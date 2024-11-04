import { ApiPathEnum } from '@/api/api.path.enum';
import axios from '@/api/axios.instance';
import { ICategory } from '@/types/categories/categories.interface';
import { IProduct } from '@/types/products/products.interface';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    TextField,
    DialogActions,
    Button,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    List,
    ListItem,
    Box,
    ListItemText,
    IconButton,
    ListItemAvatar,
    Avatar,
    FormControlLabel,
    Switch,
    Typography,
    Stack,
    Grid,
} from '@mui/material';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { ApiResponse } from '@/types/utils/api-response.interface';
import DeleteIcon from '@mui/icons-material/Delete';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import VisuallyHiddenInput from '@/components/VisuallyHiddenInput';
import { LoadingButton } from '@mui/lab';
import {
    maximum255Character,
    maximum50Character,
    maximumThreeImages,
    maximumTwoImages,
    moreThanZero,
    mustHaveOneImage,
    requiredText,
} from '@/types/common/notification.constant';

interface ProductDialogProps {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
    setReload: Dispatch<SetStateAction<boolean>>;
    reload: boolean;
    type: 'CREATE' | 'UPDATE';
    product?: IProduct;
}

type ImageType = 'CERT' | 'CATALOG' | 'PROD' | 'SPEC';

const ProductDialog: React.FC<ProductDialogProps> = ({
    open,
    setOpen,
    type,
    product,
    setReload,
    reload,
}) => {
    const [categories, setCategories] = useState<ICategory[]>([]);
    const [uploadLoading, setUploadLoading] = useState(false);
    const handleClose = () => {
        setOpen(false);
    };

    const createProduct = (product: IProduct) => {
        delete product._id;
        axios.post(ApiPathEnum.Product, product).then((res) => {
            if (res.status === 201) {
                setReload(!reload);
            }
        });
    };

    const updateProduct = (product: IProduct) => {
        axios
            .put(`${ApiPathEnum.Product}/${product?._id}`, product)
            .then((res) => {
                if (res.status === 200) {
                    setReload(!reload);
                }
            });
    };

    const onSubmit = () => {
        if (type === 'CREATE') {
            createProduct(formik.values);
        } else {
            updateProduct(formik.values);
        }

        handleClose();
    };

    const getCategories = () => {
        axios
            .get<ApiResponse<ICategory[]>>(ApiPathEnum.Category)
            .then((res) => {
                if (res.status === 200) {
                    setCategories(res.data.data as ICategory[]);
                }
            });
    };

    const validationSchema = yup.object().shape({
        name: yup.string().required(requiredText).max(50, maximum50Character),
        description: yup.string().max(255 * 10, maximum255Character),
        price: yup.number().min(1, moreThanZero),
        stock: yup.number().min(1, moreThanZero),
        images: yup.array().min(1, mustHaveOneImage).max(3, maximumThreeImages),
        descriptionTitle: yup
            .string()
            .required(requiredText)
            .max(50, maximum50Character),
        specificationImages: yup
            .array()
            .min(1, mustHaveOneImage)
            .max(2, maximumTwoImages),
        overview: yup.string().required(requiredText),
        introduction: yup.string().required(requiredText),
        design: yup.string().required(requiredText),
        specifications: yup.string().required(requiredText),
    });

    const initialValues = {
        _id: type === 'CREATE' ? '' : product?._id,
        name: type === 'CREATE' ? '' : product?.name,
        description: type === 'CREATE' ? '' : product?.description,
        images: type === 'CREATE' ? [] : (product?.images ?? []),
        price: type === 'CREATE' ? 0 : product?.price,
        stock: type === 'CREATE' ? 0 : product?.stock,
        categoryId:
            type === 'CREATE' ? '' : (product?.categoryId as ICategory)?._id,
        isNew: type === 'CREATE' ? false : product?.isNew,
        isPotential: type === 'CREATE' ? false : product?.isPotential,
        catalogImage: type === 'CREATE' ? null : product?.catalogImage,
        certificateImages:
            type === 'CREATE' ? [] : (product?.certificateImages ?? []),
        characteristic: type === 'CREATE' ? '' : product?.characteristic,
        design: type === 'CREATE' ? '' : product?.design,
        introduction: type === 'CREATE' ? '' : product?.introduction,
        overview: type === 'CREATE' ? '' : product?.overview,
        specificationImages:
            type === 'CREATE' ? [] : (product?.specificationImages ?? []),
        specifications: type === 'CREATE' ? '' : product?.specifications,
        subDescription: type === 'CREATE' ? '' : product?.subDescription,
        descriptionTitle: type === 'CREATE' ? '' : product?.descriptionTitle,
    } as IProduct;

    const formik = useFormik({
        initialValues,
        onSubmit,
        enableReinitialize: true,
        validationSchema,
    });

    const deleteImage = (id: string, type: ImageType) => {
        switch (type) {
            case 'PROD': {
                const newValue = formik.values.images.filter(
                    (x) => x.id !== id,
                );
                formik.setFieldValue('images', newValue);

                break;
            }

            case 'CATALOG': {
                formik.setFieldValue('catalogImage', undefined);

                break;
            }
            case 'CERT': {
                const newValue = formik.values.certificateImages.filter(
                    (x) => x.id !== id,
                );
                formik.setFieldValue('certificateImages', newValue);

                break;
            }
            case 'SPEC': {
                const newValue = formik.values.specificationImages.filter(
                    (x) => x.id !== id,
                );
                formik.setFieldValue('specificationImages', newValue);

                break;
            }
        }

        axios.post(`${ApiPathEnum.Files}/remove`, { id });
    };

    const handleUploadProductImage = (evt: any) => {
        if (formik.values.images.length > 3) {
            return;
        }

        if (evt.target.files) {
            for (const file of evt.target.files) {
                const formData = new FormData();

                formData.append('files', file);
                setUploadLoading(true);

                axios
                    .post<ApiResponse<any>>(
                        `${ApiPathEnum.Files}/upload`,
                        formData,
                    )
                    .then((res) => {
                        if (res.status === 201) {
                            const images = res.data.data.map((x: any) => ({
                                id: x.id,
                                url: x.url,
                            }));
                            const newImages =
                                formik.values.images.concat(images);

                            formik.setFieldValue('images', newImages);
                        }
                    })
                    .finally(() => {
                        setUploadLoading(false);
                    });
            }
        }
    };

    const handleUploadSpecImages = (evt: any) => {
        if (formik.values.specificationImages.length > 2) {
            return;
        }

        if (evt.target.files) {
            setUploadLoading(true);
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
                            const images = res.data.data.map((x: any) => ({
                                id: x.id,
                                url: x.url,
                            }));
                            const newImages =
                                formik.values.specificationImages.concat(
                                    images,
                                );

                            formik.setFieldValue(
                                'specificationImages',
                                newImages,
                            );
                        }
                    })
                    .finally(() => {
                        setUploadLoading(false);
                    });
            }
        }
    };

    const handleUploadCertificateImage = (evt: any) => {
        if (evt.target.files) {
            setUploadLoading(true);
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
                            const images = res.data.data.map((x: any) => ({
                                id: x.id,
                                url: x.url,
                            }));
                            const newImages =
                                formik.values.certificateImages.concat(images);

                            formik.setFieldValue(
                                'certificateImages',
                                newImages,
                            );
                        }
                    })
                    .finally(() => {
                        setUploadLoading(false);
                    });
            }
        }
    };

    const handleUploadCatalogImage = (evt: any) => {
        if (evt.target.files) {
            setUploadLoading(true);
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
                            const image = res.data.data.map((x: any) => ({
                                id: x.id,
                                url: x.url,
                            }));

                            formik.setFieldValue('catalogImage', image[0]);
                        }
                    })
                    .finally(() => {
                        setUploadLoading(false);
                    });
            }
        }
    };

    useEffect(() => {
        if (open) {
            getCategories();

            if (product) {
                const adjustProduct = {
                    ...product,
                    categoryId: (product.categoryId as ICategory)
                        ?._id as string,
                };
                formik.setValues(adjustProduct);
            }
        }
    }, [open]);

    return (
        <Dialog open={open} onClose={handleClose} maxWidth={'lg'} fullWidth>
            <DialogTitle>
                {type === 'CREATE' ? 'Tạo sản phẩm' : 'Cập nhật sản phẩm'}
            </DialogTitle>
            <form onSubmit={formik.handleSubmit}>
                <DialogContent>
                    <TextField
                        sx={{ my: 1 }}
                        id="name"
                        label="Tên"
                        name="name"
                        fullWidth
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        error={
                            formik.touched.name && Boolean(formik.errors.name)
                        }
                        helperText={formik.touched.name && formik.errors.name}
                    />
                    <Stack direction={'row'} spacing={2} sx={{ my: 1 }}>
                        <TextField
                            id="overview"
                            label="Tổng quan"
                            name="overview"
                            fullWidth
                            value={formik.values.overview}
                            onChange={formik.handleChange}
                            error={
                                formik.touched.overview &&
                                Boolean(formik.errors.overview)
                            }
                            helperText={
                                formik.touched.overview &&
                                formik.errors.overview
                            }
                            multiline
                            rows={5}
                        />
                        <TextField
                            sx={{ my: 1 }}
                            id="introduction"
                            label="Giới thiệu"
                            name="introduction"
                            fullWidth
                            value={formik.values.introduction}
                            onChange={formik.handleChange}
                            error={
                                formik.touched.introduction &&
                                Boolean(formik.errors.introduction)
                            }
                            helperText={
                                formik.touched.introduction &&
                                formik.errors.introduction
                            }
                            multiline
                            rows={5}
                        />
                    </Stack>
                    <TextField
                        sx={{ my: 1 }}
                        id="descriptionTitle"
                        label="Tiêu đề mô tả"
                        name="descriptionTitle"
                        fullWidth
                        value={formik.values.descriptionTitle}
                        onChange={formik.handleChange}
                        error={
                            formik.touched.descriptionTitle &&
                            Boolean(formik.errors.descriptionTitle)
                        }
                        helperText={
                            formik.touched.descriptionTitle &&
                            formik.errors.descriptionTitle
                        }
                    />
                    <Stack direction={'row'} spacing={2} sx={{ mt: 2, mb: 1 }}>
                        <TextField
                            id="name"
                            label="Mô tả"
                            name="description"
                            fullWidth
                            value={formik.values.description}
                            onChange={formik.handleChange}
                            error={
                                formik.touched.description &&
                                Boolean(formik.errors.description)
                            }
                            helperText={
                                formik.touched.description &&
                                formik.errors.description
                            }
                            multiline
                            rows={5}
                        />
                        <TextField
                            sx={{ my: 1 }}
                            id="subDescription"
                            label="Mô tả phụ"
                            name="subDescription"
                            fullWidth
                            value={formik.values.subDescription}
                            onChange={formik.handleChange}
                            error={
                                formik.touched.subDescription &&
                                Boolean(formik.errors.subDescription)
                            }
                            helperText={
                                formik.touched.subDescription &&
                                formik.errors.subDescription
                            }
                            multiline
                            rows={5}
                        />
                    </Stack>
                    <Stack alignItems={'center'} direction={'row'} spacing={2}>
                        <LoadingButton
                            component="label"
                            variant="contained"
                            tabIndex={-1}
                            startIcon={<CloudUploadIcon />}
                            sx={{ my: 1 }}
                            loading={uploadLoading}
                        >
                            Tải ảnh sản phẩm
                            <VisuallyHiddenInput
                                type="file"
                                multiple={true}
                                onChange={handleUploadProductImage}
                            />
                        </LoadingButton>
                        <Typography>(Tối đa 3 hình)</Typography>
                    </Stack>
                    {Boolean(formik.errors.images) && (
                        <Typography color={'red'}>
                            {formik.errors.images?.toString()}
                        </Typography>
                    )}
                    <List>
                        {formik.values.images?.map((x) => (
                            <ListItem
                                key={x.id}
                                sx={{ gap: 2 }}
                                secondaryAction={
                                    <IconButton
                                        edge="end"
                                        aria-label="delete"
                                        onClick={() => {
                                            deleteImage(x.id, 'PROD');
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
                                            src={x.url}
                                            width={1}
                                            height={1}
                                        />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    sx={{ overflow: 'hidden' }}
                                    primary={x.id}
                                />
                            </ListItem>
                        ))}
                    </List>
                    <Stack direction={'row'} alignItems={'center'} spacing={2}>
                        <LoadingButton
                            component="label"
                            variant="contained"
                            tabIndex={-1}
                            startIcon={<CloudUploadIcon />}
                            sx={{ my: 1 }}
                            loading={uploadLoading}
                        >
                            Tải ảnh chứng chỉ sản phẩm
                            <VisuallyHiddenInput
                                type="file"
                                multiple={true}
                                onChange={handleUploadCertificateImage}
                            />
                        </LoadingButton>
                        <Typography>(Tối đa 3 hình)</Typography>
                    </Stack>
                    <List>
                        {formik.values.certificateImages?.map((x) => (
                            <ListItem
                                key={x.id}
                                sx={{ gap: 2 }}
                                secondaryAction={
                                    <IconButton
                                        edge="end"
                                        aria-label="delete"
                                        onClick={() => {
                                            deleteImage(x.id, 'CERT');
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
                                            src={x.url}
                                            width={1}
                                            height={1}
                                        />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    sx={{ overflow: 'hidden' }}
                                    primary={x.id}
                                />
                            </ListItem>
                        ))}
                    </List>
                    <LoadingButton
                        component="label"
                        variant="contained"
                        tabIndex={-1}
                        startIcon={<CloudUploadIcon />}
                        sx={{ my: 1 }}
                        loading={uploadLoading}
                    >
                        Tải ảnh catalog sản phẩm
                        <VisuallyHiddenInput
                            type="file"
                            onChange={handleUploadCatalogImage}
                        />
                    </LoadingButton>
                    <List>
                        {formik.values.catalogImage && (
                            <ListItem
                                sx={{ gap: 2 }}
                                secondaryAction={
                                    <IconButton
                                        edge="end"
                                        aria-label="delete"
                                        onClick={() => {
                                            deleteImage(
                                                formik.values.catalogImage.id,
                                                'CATALOG',
                                            );
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
                                            src={formik.values.catalogImage.url}
                                            width={1}
                                            height={1}
                                        />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    sx={{ overflow: 'hidden' }}
                                    primary={formik.values.catalogImage.id}
                                />
                            </ListItem>
                        )}
                    </List>
                    <TextField
                        sx={{ my: 1 }}
                        id="name"
                        label="Giá"
                        name="price"
                        fullWidth
                        value={formik.values.price}
                        onChange={formik.handleChange}
                        error={
                            formik.touched.price && Boolean(formik.errors.price)
                        }
                        helperText={formik.touched.price && formik.errors.price}
                        type="number"
                    />
                    <TextField
                        sx={{ my: 1 }}
                        id="name"
                        label="Số lượng tồn kho"
                        name="stock"
                        fullWidth
                        value={formik.values.stock}
                        onChange={formik.handleChange}
                        type="number"
                        error={
                            formik.touched.stock && Boolean(formik.errors.stock)
                        }
                        helperText={formik.touched.stock && formik.errors.stock}
                    />
                    <Stack my={1} spacing={2} direction={'row'}>
                        <TextField
                            sx={{ my: 1 }}
                            id="design"
                            label="Thiết kế"
                            name="design"
                            fullWidth
                            value={formik.values.design}
                            onChange={formik.handleChange}
                            error={
                                formik.touched.design &&
                                Boolean(formik.errors.design)
                            }
                            helperText={
                                formik.touched.design && formik.errors.design
                            }
                            multiline
                            rows={5}
                        />
                        <TextField
                            sx={{ my: 1 }}
                            id="characteristic"
                            label="Đặc điểm"
                            name="characteristic"
                            fullWidth
                            value={formik.values.characteristic}
                            onChange={formik.handleChange}
                            error={
                                formik.touched.characteristic &&
                                Boolean(formik.errors.characteristic)
                            }
                            helperText={
                                formik.touched.characteristic &&
                                formik.errors.characteristic
                            }
                            multiline
                            rows={5}
                        />
                    </Stack>
                    <Grid container direction={'row'} spacing={2}>
                        <Grid item xs={6}>
                            <TextField
                                sx={{ my: 1 }}
                                id="specifications"
                                label="Thông số kỹ thuật"
                                name="specifications"
                                fullWidth
                                value={formik.values.specifications}
                                onChange={formik.handleChange}
                                error={
                                    formik.touched.specifications &&
                                    Boolean(formik.errors.specifications)
                                }
                                helperText={
                                    formik.touched.specifications &&
                                    formik.errors.specifications
                                }
                                multiline
                                rows={5}
                            />
                        </Grid>

                        <Grid item xs={6}>
                            <Stack
                                direction={'row'}
                                alignItems={'center'}
                                spacing={2}
                            >
                                <LoadingButton
                                    component="label"
                                    variant="contained"
                                    tabIndex={-1}
                                    startIcon={<CloudUploadIcon />}
                                    sx={{ my: 1 }}
                                    loading={uploadLoading}
                                >
                                    Tải ảnh sản phẩm (Thông số kỹ thuật)
                                    <VisuallyHiddenInput
                                        type="file"
                                        multiple={true}
                                        onChange={handleUploadSpecImages}
                                    />
                                </LoadingButton>
                                <Typography>(Tối đa 2 hình)</Typography>
                            </Stack>
                            <List>
                                {formik.values.specificationImages?.map((x) => (
                                    <ListItem
                                        key={x.id}
                                        sx={{ gap: 2 }}
                                        secondaryAction={
                                            <IconButton
                                                edge="end"
                                                aria-label="delete"
                                                onClick={() => {
                                                    deleteImage(x.id, 'SPEC');
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
                                                    src={x.url}
                                                    width={1}
                                                    height={1}
                                                />
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText
                                            sx={{ overflow: 'hidden' }}
                                            primary={x.id}
                                        />
                                    </ListItem>
                                ))}
                            </List>
                        </Grid>
                    </Grid>
                    <FormControl fullWidth sx={{ mt: 1, mb: 1 }}>
                        <InputLabel id="category">Nhóm sản phẩm</InputLabel>
                        <Select
                            labelId="category"
                            value={formik.values.categoryId}
                            label="Nhóm sản phẩm"
                            name="categoryId"
                            onChange={formik.handleChange}
                        >
                            {categories.map((x) => (
                                <MenuItem key={x._id} value={x._id}>
                                    {x.name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <FormControlLabel
                        control={
                            <Switch
                                checked={formik.values.isNew}
                                onChange={formik.handleChange}
                                name="isNew"
                            />
                        }
                        label="Sản phẩm mới"
                    />
                    <FormControlLabel
                        control={
                            <Switch
                                checked={formik.values.isPotential}
                                onChange={formik.handleChange}
                                name="isPotential"
                            />
                        }
                        label="Sản phẩm tiềm năng"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Hủy bỏ</Button>
                    <Button type="submit" disabled={uploadLoading}>
                        {type === 'CREATE' ? 'Tạo mới' : 'Cập nhật'}
                    </Button>
                </DialogActions>
            </form>
        </Dialog>
    );
};

export default ProductDialog;
