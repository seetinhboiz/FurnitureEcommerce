import { ApiPathEnum } from '@/api/api.path.enum';
import axios from '@/api/axios.instance';
import VisuallyHiddenInput from '@/components/VisuallyHiddenInput';
import { IActivity } from '@/types/activities/activities.interface';
import {
    createFailed,
    createSuccessfully,
    maximum50Character,
    mustHaveOneImage,
    requiredText,
    updateFailed,
    updateSuccessfully,
} from '@/types/common/notification.constant';
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
    Typography,
} from '@mui/material';
import { useFormik } from 'formik';
import { useCookies } from 'next-client-cookies';
import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import { toast } from 'react-toastify';
import * as yup from 'yup';
import NotfoundImage from '../../../../assets/images/common/not-found.png';
import scrollToIndex from '../../scrollToIndex';

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
    const [loading, setLoading] = useState(false);

    const config = {
        headers: {
            Authorization: `Bearer ${cookie.get('token')}`,
        },
    };

    const nodeRef = {
        name: useRef(null),
        description: useRef(null),
        images: useRef(null),
    };

    const initialValues = {
        name: type === 'CREATE' ? '' : activity?.name,
        description: type === 'CREATE' ? '' : activity?.description,
        images: type === 'CREATE' ? [] : activity?.images,
    } as IActivity;

    const validationSchema = yup.object().shape({
        name: yup.string().required(requiredText).max(50, maximum50Character),
        description: yup.string().required(requiredText),
        images: yup.array().min(1, mustHaveOneImage),
    });

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

    const onSubmit = () => {
        if (type === 'CREATE') {
            createActivity(formik.values);
        } else {
            updateActivity({
                ...formik.values,
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

                            formik.setFieldValue('images', [image]);
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

        formik.setFieldValue('images', []);

        axios.post(`${ApiPathEnum.Files}/remove`, { id });
    };

    const handleScrollToError = () => {
        switch (Object.keys(formik.errors)[0]) {
            case 'name':
                scrollToIndex(nodeRef.name, 'input');
                break;
                case 'description':
                scrollToIndex(nodeRef.description, 'textarea');
                break;
            case 'images':
                scrollToIndex(nodeRef.images);
                break;
            default:
                break;
        }
    };

    const formik = useFormik({
        initialValues,
        onSubmit,
        validate() {
            if (formik.errors) {
                handleScrollToError();
            }
            return;
        },
        validateOnChange: true,
        validateOnMount: true,
        enableReinitialize: true,
        validationSchema,
    });

    useEffect(() => {}, [open]);

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            PaperProps={{
                component: 'form',
                onSubmit: formik.handleSubmit,
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
                    id="name"
                    label="Tên hoạt động"
                    name="name"
                    fullWidth
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    error={formik.touched.name && Boolean(formik.errors.name)}
                    helperText={formik.touched.name && formik.errors.name}
                    ref={nodeRef.name}
                />
                <TextField
                    multiline
                    rows={20}
                    sx={{ mt: 1 }}
                    id="description"
                    label="Nội dung hoạt động"
                    name="description"
                    fullWidth
                    value={formik.values.description}
                    onChange={formik.handleChange}
                    error={
                        formik.touched.description &&
                        Boolean(formik.errors.description)
                    }
                    helperText={
                        formik.touched.description && formik.errors.description
                    }
                    ref={nodeRef.description}
                />
                <LoadingButton
                    component="label"
                    variant="contained"
                    tabIndex={-1}
                    startIcon={<CloudUploadIcon />}
                    sx={{ my: 1 }}
                    loading={loading}
                    disabled={!!(formik.values.images.length > 0)}
                    ref={nodeRef.images}
                >
                    Tải ảnh hoạt động
                    <VisuallyHiddenInput
                        type="file"
                        multiple={false}
                        onChange={handleUploadImage}
                    />
                </LoadingButton>
                {Boolean(formik.errors.images) && (
                    <Typography color={'red'}>{mustHaveOneImage}</Typography>
                )}
                {formik.values.images?.map(
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
