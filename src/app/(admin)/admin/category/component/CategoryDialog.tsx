import { ApiPathEnum } from '@/api/api.path.enum';
import axios from '@/api/axios.instance';
import { ICategory } from '@/types/categories/categories.interface';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    TextField,
    DialogActions,
    Button,
    ListItem,
    IconButton,
    ListItemAvatar,
    Avatar,
    Box,
    ListItemText,
    List,
} from '@mui/material';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { ApiResponse } from '@/types/utils/api-response.interface';
import { IImage } from '@/types/products/products.interface';
import DeleteIcon from '@mui/icons-material/Delete';
import NotfoundImage from '../../../../assets/images/common/not-found.png';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import VisuallyHiddenInput from '@/components/VisuallyHiddenInput';
import { LoadingButton } from '@mui/lab';
import { useCookies } from 'next-client-cookies';

interface CategoryDialogProps {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
    setReload: Dispatch<SetStateAction<boolean>>;
    reload: boolean;
    type: 'CREATE' | 'UPDATE';
    category?: ICategory;
}

const CategoryDialog: React.FC<CategoryDialogProps> = ({
    open,
    setOpen,
    type,
    category,
    setReload,
    reload,
}) => {
    const cookie = useCookies();
    const [name, setName] = useState('');
    const [image, setImage] = useState<IImage | undefined>();
    const [loading, setLoading] = useState(false);

    const config = {
        headers: {
            Authorization: `Bearer ${cookie.get('token')}`,
        },
    };

    const handleClose = () => {
        setOpen(false);
    };

    const createCategory = (category: ICategory) => {
        axios.post(ApiPathEnum.Category, category, config).then((res) => {
            if (res.status === 201) {
                setReload(!reload);
            }
        });
    };

    const updateCategory = (category: ICategory) => {
        axios
            .put(`${ApiPathEnum.Category}/${category?._id}`, category, config)
            .then((res) => {
                if (res.status === 200) {
                    setReload(!reload);
                }
            });
    };

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!image) {
            return;
        }

        const data: ICategory = {
            name,
            image,
        };

        if (type === 'CREATE') {
            createCategory(data);
        } else {
            updateCategory({
                ...data,
                _id: category?._id,
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

                            setImage(image);
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

        setImage(undefined);
        axios.post(`${ApiPathEnum.Files}/remove`, { id });
    };

    useEffect(() => {
        if (type === 'UPDATE') {
            setImage(category?.image);
            setName(category?.name ?? '');
        } else {
            setName('');
            setImage(undefined);
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
            maxWidth={'sm'}
            fullWidth
        >
            <DialogTitle>
                {type === 'CREATE' ? 'Tạo danh mục' : 'Cập nhật danh mục'}
            </DialogTitle>
            <DialogContent>
                <TextField
                    sx={{ mt: 1 }}
                    autoFocus
                    required
                    id="name"
                    label="Tên danh mục"
                    name="Tên danh mục"
                    fullWidth
                    value={name}
                    onChange={(evt) => {
                        setName(evt.target.value);
                    }}
                />
                <LoadingButton
                    component="label"
                    variant="contained"
                    tabIndex={-1}
                    startIcon={<CloudUploadIcon />}
                    sx={{ my: 1 }}
                    loading={loading}
                    disabled={!!image}
                >
                    Tải ảnh danh mục
                    <VisuallyHiddenInput
                        type="file"
                        multiple={false}
                        onChange={handleUploadImage}
                    />
                </LoadingButton>
                {image?.url && (
                    <List>
                        <ListItem
                            sx={{ gap: 2 }}
                            secondaryAction={
                                <IconButton
                                    edge="end"
                                    aria-label="delete"
                                    onClick={() => {
                                        deleteImage(image?.id);
                                    }}
                                >
                                    <DeleteIcon />
                                </IconButton>
                            }
                        >
                            <ListItemAvatar>
                                <Avatar sx={{ width: 100, height: 100 }}>
                                    <Box
                                        component="img"
                                        src={image?.url ?? NotfoundImage}
                                        width={1}
                                        height={1}
                                    />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText
                                primary={image.id}
                                sx={{ overflow: 'hidden' }}
                            />
                        </ListItem>
                    </List>
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

export default CategoryDialog;
