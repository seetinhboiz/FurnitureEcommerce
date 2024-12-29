import { ApiPathEnum } from '@/api/api.path.enum';
import axios from '@/api/axios.instance';
import VisuallyHiddenInput from '@/components/VisuallyHiddenInput';
import {
    createFailed,
    createSuccessfully,
    updateFailed,
    updateSuccessfully,
} from '@/types/common/notification.constant';
import { IImage } from '@/types/products/products.interface';
import { ApiResponse } from '@/types/utils/api-response.interface';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import DeleteIcon from '@mui/icons-material/Delete';
import { LoadingButton } from '@mui/lab';
import {
    Avatar,
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    IconButton,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    TextField,
} from '@mui/material';
import { useCookies } from 'next-client-cookies';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import NotfoundImage from '../../../../assets/images/common/not-found.png';
import { IActivity } from '@/types/activities/activities.interface';

interface ActivityDialogProps {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
    setReload: Dispatch<SetStateAction<boolean>>;
    reload: boolean;
    type: 'CREATE' | 'UPDATE';
    activity?: IActivity;
}

const ActivityDialog: React.FC<ActivityDialogProps> = ({
    open,
    setOpen,
    type,
    activity,
    setReload,
    reload,
}) => {
    const cookie = useCookies();
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [images, setImages] = useState<IImage[] | undefined>();
    const [loading, setLoading] = useState(false);

    const config = {
        headers: {
            Authorization: `Bearer ${cookie.get('token')}`,
        },
    };

    const handleClose = () => {
        setOpen(false);
    };

    const createActivity = (activity: IActivity) => {
        axios
            .post(ApiPathEnum.Activity, activity, config)
            .then((res) => {
                if (res.status === 201) {
                    setReload(!reload);
                    toast.success(createSuccessfully);
                }
            })
            .catch((res) => {
                toast.error(`${createFailed}\n${res.message}`);
            });
    };

    const updateActivity = (activity: IActivity) => {
        axios
            .put(`${ApiPathEnum.Activity}/${activity?._id}`, activity, config)
            .then((res) => {
                if (res.status === 200) {
                    setReload(!reload);
                    toast.success(updateSuccessfully);
                }
            })
            .catch((res) => {
                toast.error(`${updateFailed}\n${res?.message}`);
            });
    };

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!images) {
            return;
        }

        const data: IActivity = {
            name,
            description,
            images: images,
        };

        if (type === 'CREATE') {
            createActivity(data);
        } else {
            updateActivity({
                ...data,
                _id: activity?._id,
            });
        }

        handleClose();
    };

    const handleUploadImage = (evt: any) => {
        if (evt.target.files) {
            setLoading(true);
            for (const file of evt.target.files) {
                const formData = new FormData();

                formData.append('files', file);
                axios
                    .post<ApiResponse<any>>(
                        `${ApiPathEnum.Files}/upload`,
                        formData,
                    )
                    .then((res) => {
                        if (res.status === 201) {
                            const image = {
                                id: res.data.data[0].id,
                                url: res.data.data[0].url,
                            };

                            setImages([image]);
                        }
                    })
                    .finally(() => {
                        setLoading(false);
                    });
            }
        }
    };

    const deleteImage = (id: string | undefined) => {
        if (!id) {
            return;
        }

        setImages(undefined);
        axios.post(`${ApiPathEnum.Files}/remove`, { id });
    };

    useEffect(() => {
        if (type === 'UPDATE') {
            setImages(activity?.images);
            setName(activity?.name ?? '');
            setDescription(activity?.description ?? '');
        } else {
            setName('');
            setImages(undefined);
            setDescription('')
        }
    }, [open]);

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            PaperProps={{
                component: 'form',
                onSubmit,
            }}
            maxWidth={'lg'}
            fullWidth
        >
            <DialogTitle>
                {type === 'CREATE' ? 'Tạo hoạt động' : 'Cập nhật hoạt động'}
            </DialogTitle>
            <DialogContent>
                <TextField
                    sx={{ mt: 1 }}
                    autoFocus
                    required
                    id="name"
                    label="Tên hoạt động"
                    name="Tên hoạt động"
                    fullWidth
                    value={name}
                    onChange={(evt) => {
                        setName(evt.target.value);
                    }}
                />
                <TextField
                    multiline
                    rows={20}
                    sx={{ mt: 1 }}
                    autoFocus
                    required
                    id="description"
                    label="Nội dung hoạt động"
                    name="Nội dung hoạt động"
                    fullWidth
                    value={description}
                    onChange={(evt) => {
                        setDescription(evt.target.value);
                    }}
                />
                <LoadingButton
                    component="label"
                    variant="contained"
                    tabIndex={-1}
                    startIcon={<CloudUploadIcon />}
                    sx={{ my: 1 }}
                    loading={loading}
                    disabled={!!images}
                >
                    Tải ảnh hoạt động
                    <VisuallyHiddenInput
                        type="file"
                        multiple={false}
                        onChange={handleUploadImage}
                    />
                </LoadingButton>
                {images?.map(
                    (x) =>
                        x.url && (
                            <List key={x.id}>
                                <ListItem
                                    sx={{ gap: 2 }}
                                    secondaryAction={
                                        <IconButton
                                            edge="end"
                                            aria-label="delete"
                                            onClick={() => {
                                                deleteImage(x?.id);
                                            }}
                                        >
                                            <DeleteIcon />
                                        </IconButton>
                                    }
                                >
                                    <ListItemAvatar>
                                        <Avatar
                                            sx={{ width: 100, height: 100 }}
                                        >
                                            <Box
                                                component="img"
                                                src={x?.url ?? NotfoundImage}
                                                width={1}
                                                height={1}
                                            />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={x.id}
                                        sx={{ overflow: 'hidden' }}
                                    />
                                </ListItem>
                            </List>
                        ),
                )}
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Hủy bỏ</Button>
                <Button type="submit">
                    {type === 'CREATE' ? 'Tạo mới' : 'Cập nhật'}
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default ActivityDialog;
