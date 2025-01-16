import { ApiPathEnum } from '@/api/api.path.enum';
import axios from '@/api/axios.instance';
import VisuallyHiddenInput from '@/components/VisuallyHiddenInput';
import { ICategory } from '@/types/categories/categories.interface';
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
    const [loading, setLoading] = useState(false);

    const config = {
        headers: {
            Authorization: `Bearer ${cookie.get('token')}`,
        },
    };

    const initialValues = {
        name: type === 'CREATE' ? '' : category?.name,
        image:
            type === 'CREATE'
                ? {
                      url: '',
                      id: '',
                  }
                : category?.image,
    } as ICategory;

    const validationSchema = yup.object().shape({
        name: yup.string().required(requiredText).max(50, maximum50Character),
        image: yup
            .object()
            .required(mustHaveOneImage)
            .shape({
                url: yup.string().required(requiredText),
                id: yup.string().required(requiredText),
            }),
    });

    const nodeRef = {
        name: useRef(null),
        image: useRef(null),
    };

    const handleClose = () => {
        setOpen(false);
    };

    const createCategory = (category: ICategory) => {
        axios
            .post(ApiPathEnum.Category, category, config)
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

    const updateCategory = (category: ICategory) => {
        axios
            .put(`${ApiPathEnum.Category}/${category?._id}`, category, config)
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
            createCategory(formik.values);
        } else {
            updateCategory({
                ...formik.values,
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

                            formik.setFieldValue('image', image);
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

        formik.setFieldValue('image', {
            id: '',
            url: '',
        });

        axios.post(`${ApiPathEnum.Files}/remove`, { id });
    };

    const handleScrollToError = () => {
        switch (Object.keys(formik.errors)[0]) {
            case 'name':
                scrollToIndex(nodeRef.name, 'input');
                break;
            case 'images':
                scrollToIndex(nodeRef.image);
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
            maxWidth={'sm'}
            fullWidth
        >
            <DialogTitle>
                {type === 'CREATE' ? 'Tạo danh mục' : 'Cập nhật danh mục'}
            </DialogTitle>
            <DialogContent>
                <TextField
                    sx={{ mt: 1 }}
                    id="name"
                    label="Tên danh mục"
                    name="name"
                    fullWidth
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    error={formik.touched.name && Boolean(formik.errors.name)}
                    helperText={formik.touched.name && formik.errors.name}
                    ref={nodeRef.name}
                />
                <LoadingButton
                    component="label"
                    variant="contained"
                    tabIndex={-1}
                    startIcon={<CloudUploadIcon />}
                    sx={{ my: 1 }}
                    loading={loading}
                    disabled={!!formik.values.image?.id}
                    ref={nodeRef.image}
                >
                    Tải ảnh danh mục
                    <VisuallyHiddenInput
                        type="file"
                        multiple={false}
                        onChange={handleUploadImage}
                    />
                </LoadingButton>
                {Boolean(formik.errors.image) && (
                    <Typography color={'red'}>{mustHaveOneImage}</Typography>
                )}
                {formik.values.image?.url && (
                    <List>
                        <ListItem
                            sx={{ gap: 2 }}
                            secondaryAction={
                                <IconButton
                                    edge="end"
                                    aria-label="delete"
                                    onClick={() => {
                                        deleteImage(formik.values.image?.id);
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
                                        src={
                                            formik.values.image?.url ??
                                            NotfoundImage
                                        }
                                        width={1}
                                        height={1}
                                    />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText
                                primary={formik.values.image.id}
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
