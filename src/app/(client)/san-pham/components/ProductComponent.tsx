'use client';
import { ApiPathEnum, convertSlug } from '@/api/api.path.enum';
import axios from '@/api/axios.instance';
import Footer from '@/components/Footer';
import { ICategory } from '@/types/categories/categories.interface';
import { IProduct } from '@/types/products/products.interface';
import { ApiResponse } from '@/types/utils/api-response.interface';
import {
    Box,
    Container,
    CssBaseline,
    Grid,
    Stack,
    ThemeProvider,
    Typography,
} from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { CSSProperties, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import BookIcon from '../../../assets/images/icon/book.png';
import theme from '../../theme';
import GearSvg from './gear-svg';
import NewProductComponent from './new-product-box';
import ProductBox from './product-box';
import Blog from '../../hoat-dong/component/Blog';
import ProductBanner from './Banner';
import NewIcon from './new-icon';

export default function ProductComponent() {
    const { t } = useTranslation();

    const styleTitle: CSSProperties = {
        color: theme.palette.primary.main,
        fontWeight: 'bold',
    };

    const [newProducts, setNewProducts] = useState<IProduct[]>();
    const [potentialProducts, setPotentialProducts] = useState<IProduct[]>();
    const [categories, setCategories] = useState<ICategory[]>();

    const getNewProduct = () => {
        axios
            .get<ApiResponse<IProduct[]>>(`${ApiPathEnum.Product}?isNew=true`)
            .then((res) => {
                if (res.status === 200) {
                    setNewProducts(res.data.data as IProduct[]);
                }
            });
    };

    const getPotentialProduct = () => {
        axios
            .get<
                ApiResponse<IProduct[]>
            >(`${ApiPathEnum.Product}?isPotential=true`)
            .then((res) => {
                if (res.status === 200) {
                    setPotentialProducts(res.data.data as IProduct[]);
                }
            });
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

    useEffect(() => {
        getNewProduct();
        getPotentialProduct();
        getCategories();
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box sx={{ backgroundColor: '#fff', width: 1 }}>
                <Grid xs={12}>
                    <ProductBanner />
                </Grid>
                <Container sx={{ backgroundColor: '#fff', width: 1 }}>
                    <Grid container xs={12}>
                        <Grid
                            xs={12}
                            display={'flex'}
                            justifyContent={'center'}
                            alignItems={'center'}
                            sx={{ marginBottom: '20px' }}
                        >
                            <Typography
                                variant="h4"
                                color={theme.palette.primary.main}
                                fontWeight={'bold'}
                                textAlign="justify"
                            >
                                {t('product.productIntroduce')}
                            </Typography>
                        </Grid>
                        <Grid
                            item
                            container
                            justifyContent={'center'}
                            xs={12}
                            alignItems={'center'}
                            my={3}
                        >
                            <Grid
                                item
                                xs={12}
                                mb={2}
                                justifyContent={'center'}
                                container
                            >
                                <svg
                                    width="550"
                                    height="60"
                                    viewBox="0 0 550 60"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M2 4.79166L32.8476 57.6907L108.347 57.4427L138.173 4.3445L212.173 4.10148L238.346 57.0158L312.346 56.7728L328.25 3.72027L408.461 2.45665L438.345 56.359L517.671 56.0985L547.494 2"
                                        stroke="#FBBB20"
                                        strokeWidth="4"
                                    />
                                </svg>
                            </Grid>
                            <Typography sx={styleTitle} variant="h4">
                                {t('product.newProduct').toUpperCase()}
                            </Typography>
                        </Grid>
                        <Grid xs={12} container sx={{ position: 'relative' }}>
                            <NewProductComponent newProducts={newProducts} />
                            <NewIcon />
                        </Grid>
                        <Grid
                            item
                            container
                            justifyContent={'center'}
                            xs={12}
                            alignItems={'center'}
                            mt={10}
                            mb={3}
                        >
                            <svg
                                width="115"
                                height="15"
                                viewBox="0 0 115 15"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M113 2.55141L106.723 13L91.3599 12.951L85.2908 2.46308L70.233 2.41508L64.9069 12.8667L49.8491 12.8187L46.613 2.33979L30.2911 2.0902L24.2101 12.737L8.06845 12.6855L2 2"
                                    stroke="#FBBB20"
                                    strokeWidth="4"
                                />
                            </svg>
                            <Typography
                                sx={{
                                    ...styleTitle,
                                    mx: 2,
                                }}
                                variant="h4"
                            >
                                {t('product.groupProduct').toUpperCase()}
                            </Typography>
                            <svg
                                width="115"
                                height="15"
                                viewBox="0 0 115 15"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M113 2.55141L106.723 13L91.3599 12.951L85.2908 2.46308L70.233 2.41508L64.9069 12.8667L49.8491 12.8187L46.613 2.33979L30.2911 2.0902L24.2101 12.737L8.06845 12.6855L2 2"
                                    stroke="#FBBB20"
                                    strokeWidth="4"
                                />
                            </svg>
                        </Grid>
                        <Grid item container xs={12} spacing={2}>
                            {categories?.map((category) => (
                                <Grid
                                    item
                                    xs={12}
                                    md={6}
                                    lg={3}
                                    key={category._id}
                                >
                                    <ProductBox
                                        data={category}
                                        type={'category'}
                                    />
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                    <Grid
                        item
                        container
                        justifyContent={'center'}
                        xs={12}
                        alignItems={'center'}
                        my={3}
                    >
                        <Grid
                            item
                            xs={12}
                            mb={2}
                            justifyContent={'center'}
                            container
                        >
                            <GearSvg />
                        </Grid>
                        <Typography
                            sx={styleTitle}
                            variant="h4"
                            textAlign={'center'}
                        >
                            {t(
                                'product.introducePotentialProduct',
                            ).toUpperCase()}
                        </Typography>
                        <Grid item xs={12}>
                            {potentialProducts?.map((product) => (
                                <Link
                                    href={`/san-pham/${convertSlug(product.name)}-${product._id}`}
                                    key={product._id}
                                >
                                    <Blog
                                        directionImg={'left'}
                                        data={product}
                                        type={'PRODUCT'}
                                        key={product._id}
                                    />
                                </Link>
                            ))}
                        </Grid>
                    </Grid>
                </Container>
                <Grid xs={12}>
                    <Footer />
                </Grid>
            </Box>
        </ThemeProvider>
    );
}
