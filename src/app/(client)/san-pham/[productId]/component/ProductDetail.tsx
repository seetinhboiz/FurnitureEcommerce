'use client';
import { ApiPathEnum } from '@/api/api.path.enum';
import axios from '@/api/axios.instance';
import Footer from '@/components/Footer';
import { IProduct } from '@/types/products/products.interface';
import { ApiResponse } from '@/types/utils/api-response.interface';
import { Box, Grid, Stack, ThemeProvider, Typography } from '@mui/material';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import theme from '../../../theme';
import { ICategory } from '@/types/categories/categories.interface';
import { useTranslation } from 'react-i18next';

export default function ProductDetail({ data }: any) {
    const pathname = usePathname();
    const { t } = useTranslation();

    const [product, setProduct] = useState<IProduct>();
    const [category, setCategory] = useState<ICategory>();

    const idProduct = pathname.split('-')[pathname.split('-').length - 1];

    const getProducts = async () => {
        try {
            const res = await axios.get<ApiResponse<IProduct>>(
                ApiPathEnum.Product + `/${idProduct}`,
            );
            if (res.status === 200) {
                setProduct(res.data.data as IProduct);
                await getCategory(res.data.data?.categoryId);
            }
        } catch (error) {
            console.error('Error fetching product:', error);
        }
    };

    const getCategory = async (categoryId: any) => {
        try {
            const res = await axios.get<ApiResponse<ICategory>>(
                ApiPathEnum.Category + `/${categoryId}`,
            );
            if (res.status === 200) {
                setCategory(res.data.data as ICategory);
            }
        } catch (error) {
            console.error('Error fetching category:', error);
        }
    };

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <Grid
                xs={12}
                container
                position={'relative'}
                sx={{
                    height: {
                        lg: 500,
                        md: 56.25,
                        sm: 300,
                        xs: 200,
                    },
                    backgroundColor: '#fff',
                }}
                overflow={'hidden'}
            >
                <Image
                    src={'/images/product/productBanner.png'}
                    fill
                    alt="banner"
                />
                <Grid item xs={12} md={6} alignItems={'center'}>
                    <Stack
                        alignItems={'center'}
                        height={1}
                        justifyContent={'center'}
                        sx={{
                            px: {
                                xs: 2,
                                md: 10,
                            },
                        }}
                        py={2}
                    >
                        <Typography
                            sx={{
                                textTransform: 'uppercase',
                                fontWeight: 700,
                                color: theme.palette.primary.main,
                                textAlign: 'center',
                            }}
                            variant="h1"
                        >
                            {product?.name}
                        </Typography>
                        <Box
                            position={'relative'}
                            width={100}
                            height={100}
                            my={2}
                            sx={{
                                width: {
                                    md: 100,
                                    xs: 50,
                                },
                                height: {
                                    md: 100,
                                    xs: 50,
                                },
                            }}
                        >
                            <Image
                                src={'/images/introduce/light.svg'}
                                fill
                                alt="light"
                            />
                        </Box>
                        <Typography
                            fontWeight={600}
                            color={theme.palette.primary.main}
                        >
                            {product?.overview}
                        </Typography>
                    </Stack>
                </Grid>
            </Grid>
            <Grid
                container
                justifyContent={'space-evenly'}
                xs={12}
                sx={{
                    py: 1,
                    color: theme.palette.primary.main,
                    px: {
                        xs: 4,
                        md: 8,
                        lg: 10,
                    },
                    backgroundColor: '#fff',
                }}
            >
                <Grid xs={12}>
                    <Typography fontWeight={700}>
                        {product?.introduction}
                    </Typography>
                </Grid>
                <Grid xs={12} container justifyContent={'center'} my={2}>
                    <Typography variant="h3" fontWeight={700}>
                        {product?.descriptionTitle}
                    </Typography>
                </Grid>
                <Grid container>
                    <Typography>{product?.description}</Typography>
                </Grid>
                <Grid justifyContent={'center'} container my={2}>
                    {product?.images[0] && (
                        <Box
                            position={'relative'}
                            sx={{
                                paddingBottom: '56.25%',
                                width: 1,
                            }}
                            width={1}
                        >
                            <Image
                                src={product?.images[0].url}
                                alt="product-image-1"
                                fill
                                style={{ objectFit: 'contain' }}
                            />
                        </Box>
                    )}
                </Grid>
                <Grid>
                    <Typography
                        fontWeight={700}
                        textAlign={'center'}
                        variant="subtitle1"
                    >
                        {product?.subDescription}
                    </Typography>
                </Grid>
                <Grid item justifyContent={'center'} container my={2}>
                    {product?.images[1] && (
                        <Grid
                            xs={4}
                            item
                            position={'relative'}
                            sx={{
                                paddingBottom: '56.25%',
                                width: 1,
                            }}
                            width={1}
                        >
                            <Image
                                src={product?.images[1].url}
                                alt={'product-image-2'}
                                fill
                                style={{ objectFit: 'contain' }}
                            />
                        </Grid>
                    )}
                </Grid>
                <Grid item justifyContent={'center'} container my={2}>
                    {product?.certificateImages &&
                        product?.certificateImages.length > 0 &&
                        product?.certificateImages.map((x) => (
                            <Grid
                                xs={4}
                                item
                                key={x.id}
                                position={'relative'}
                                sx={{
                                    paddingBottom: '56.25%',
                                    width: 1,
                                }}
                                width={1}
                            >
                                <Image
                                    src={x.url}
                                    alt={'certificate-image'}
                                    fill
                                    style={{ objectFit: 'contain' }}
                                />
                            </Grid>
                        ))}
                </Grid>
                <Grid container my={2} spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Stack
                            justifyContent={'center'}
                            alignItems={'center'}
                            spacing={2}
                        >
                            <Box
                                position={'relative'}
                                width={{ xs: 50, md: 100 }}
                                height={{ xs: 50, md: 100 }}
                            >
                                <Image
                                    src={'/images/product/ruler.svg'}
                                    alt="ruler-icon"
                                    fill
                                />
                            </Box>
                            <Typography variant="h3" fontWeight={700}>
                                {t('product.design')}
                            </Typography>
                            <Typography>{product?.design}</Typography>
                        </Stack>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Stack
                            justifyContent={'center'}
                            alignItems={'center'}
                            spacing={2}
                        >
                            <Box
                                position={'relative'}
                                width={{ xs: 50, md: 100 }}
                                height={{ xs: 50, md: 100 }}
                            >
                                <Image
                                    src={'/images/product/list.svg'}
                                    alt="ruler-icon"
                                    fill
                                />
                            </Box>
                            <Typography variant="h3" fontWeight={700}>
                                {t('product.characteristic')}
                            </Typography>
                            <Typography sx={{ whiteSpace: 'pre-line' }}>
                                {product?.characteristic}
                            </Typography>
                        </Stack>
                    </Grid>
                </Grid>
                <Grid container my={2} spacing={2} justifyContent={'center'}>
                    <Grid item xs={12}>
                        <Typography
                            variant="h3"
                            fontWeight={700}
                            textAlign={'center'}
                        >
                            {t('product.specifications')}
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography sx={{ whiteSpace: 'pre-line' }}>
                            {product?.specifications}
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        {product?.specificationImages &&
                            product?.specificationImages?.length > 0 &&
                            product?.specificationImages.map((x) => (
                                <Box
                                    key={x.id}
                                    position={'relative'}
                                    sx={{
                                        width: 1,
                                        pb: '56.25%',
                                    }}
                                >
                                    <Image
                                        src={x.url}
                                        fill
                                        style={{ objectFit: 'contain' }}
                                        alt={'spec-image'}
                                    />
                                </Box>
                            ))}
                    </Grid>
                </Grid>
                <Grid item justifyContent={'center'} container my={2}>
                    {product?.images[2] && (
                        <Grid
                            xs={4}
                            item
                            position={'relative'}
                            sx={{
                                paddingBottom: '56.25%',
                                width: 1,
                            }}
                            width={1}
                        >
                            <Image
                                src={product?.images[2].url}
                                alt={'product-image-3'}
                                fill
                                style={{ objectFit: 'contain' }}
                            />
                        </Grid>
                    )}
                </Grid>
                <Grid>
                    <Stack
                        sx={{
                            px: {
                                lg: 10,
                                md: 6,
                                sm: 4,
                                xs: 4,
                            },
                            py: {
                                lg: 8,
                                md: 4,
                                sm: 2,
                                xs: 2,
                            },
                            borderRadius: {
                                lg: 10,
                                md: 8,
                                sm: 6,
                                xs: 4,
                            },
                        }}
                        bgcolor={theme.palette.primary.main}
                        justifyContent={'center'}
                        alignItems={'center'}
                        my={2}
                    >
                        <Typography
                            fontWeight={800}
                            color={theme.palette.primary.contrastText}
                            variant="h3"
                        >
                            {t('product.storeCriteria')}
                        </Typography>
                    </Stack>
                    <Typography>{t('product.teamMemberSupport')}</Typography>
                </Grid>
                {product?.catalogImage && (
                    <Stack
                        justifyContent={'center'}
                        alignContent={'center'}
                        my={2}
                        width={1}
                        height={1}
                    >
                        <Box position={'relative'} width={1} pb={'56.25%'}>
                            <Image
                                src={product?.catalogImage?.url ?? ''}
                                fill
                                alt={'catalog'}
                                style={{ objectFit: 'contain' }}
                            />
                        </Box>
                    </Stack>
                )}
            </Grid>

            <Footer />
        </ThemeProvider>
    );
}
