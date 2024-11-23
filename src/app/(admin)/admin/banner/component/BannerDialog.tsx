import { ApiPathEnum } from '@/api/api.path.enum';
import axios from '@/api/axios.instance';
import VisuallyHiddenInput from '@/components/VisuallyHiddenInput';
import { updateFailed, updateSuccessfully } from '@/types/common/notification.constant';
import { IBanner, IImage } from '@/types/products/products.interface';
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
} from '@mui/material';
import { useFormik } from 'formik';
import { Dispatch, SetStateAction, useState } from 'react';
import { toast } from 'react-toastify';

interface DialogProps {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
    setReload: Dispatch<SetStateAction<boolean>>;
    reload: boolean;
    banner?: IBanner;
    getBanner: (name: string) => void;
}

const BannerDialog: React.FC<DialogProps> = ({
    open,
    setOpen,
    setReload,
    reload,
    banner,
    getBanner,
}) => {
    const [uploadLoading, setUploadLoading] = useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    const onSubmit = () => {
        updateBanner();

        handleClose();
    };

    const formik = useFormik({
        initialValues: {
            images: {} as IImage,
        },
        onSubmit,
        enableReinitialize: true,
    });

    const updateBanner = () => {
        const editBanner: IBanner = {
            _id: banner?._id,
            name: banner?.name || 'bannerImg',
            image: {
                id: formik.values.images.id,
                url: formik.values.images.url,
            },
        };
        axios
            .put(`${ApiPathEnum.Banner}/${banner?._id}`, editBanner)
            .then((res) => {
                if (res.status === 200) {
                    setReload(!reload);
                    toast.success(updateSuccessfully);
                    getBanner('');
                }
            })
            .catch((res) => {
                toast.error(`${updateFailed}\n${res?.message}`);
            });
    };

    const deleteImage = (id: string) => {
        formik.setFieldValue('image', {});
        axios.post(`${ApiPathEnum.Files}/remove`, { id });
    };

    const handleUploadImage = (evt: any) => {
        if (evt.target.files[0]) {
            setUploadLoading(true);
            const formData = new FormData();

            formData.append('files', evt.target.files[0]);
            axios
                .post<ApiResponse<any>>(`${ApiPathEnum.Files}/upload`, formData)
                .then((res) => {
                    if (res.status === 201) {
                        const image = {
                            id: res.data.data[0].id,
                            url: res.data.data[0].url,
                        };
                        formik.setFieldValue('images', image);
                    }
                })
                .finally(() => {
                    setUploadLoading(false);
                });
        }
    };

    return (
        <Dialog open={open} onClose={handleClose} maxWidth={'sm'} fullWidth>
            <DialogTitle>Cập nhật Banner</DialogTitle>
            <form onSubmit={formik.handleSubmit}>
                <DialogContent>
                    <LoadingButton
                        component="label"
                        variant="contained"
                        tabIndex={-1}
                        startIcon={<CloudUploadIcon />}
                        sx={{ my: 1 }}
                        loading={uploadLoading}
                    >
                        Tải ảnh Banner
                        <VisuallyHiddenInput
                            type="file"
                            multiple={true}
                            onChange={handleUploadImage}
                        />
                    </LoadingButton>
                    <List>
                        {formik.values.images.id && (
                            <List>
                                <ListItem
                                    key={formik.values.images.id}
                                    sx={{ gap: 2 }}
                                    secondaryAction={
                                        <IconButton
                                            edge="end"
                                            aria-label="delete"
                                            onClick={() => {
                                                deleteImage(
                                                    formik.values.images.id,
                                                );
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
                                                src={formik.values.images.url}
                                                width={1}
                                                height={1}
                                            />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                        sx={{ overflow: 'hidden' }}
                                        primary={formik.values.images.id}
                                    />
                                </ListItem>
                            </List>
                        )}
                    </List>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Hủy bỏ</Button>
                    <Button type="submit">Cập nhật</Button>
                </DialogActions>
            </form>
        </Dialog>
    );
};

export default BannerDialog;
