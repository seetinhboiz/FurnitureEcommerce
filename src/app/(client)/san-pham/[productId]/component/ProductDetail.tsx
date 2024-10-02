'use client';
import { ApiPathEnum } from '@/api/api.path.enum';
import axios from '@/api/axios.instance';
import Fancybox from '@/components/FancyBox';
import Footer from '@/components/Footer';
import { IProduct } from '@/types/products/products.interface';
import { ApiResponse } from '@/types/utils/api-response.interface';
import { Chip, Grid, ThemeProvider, Typography } from '@mui/material';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Carousel from 'react-material-ui-carousel';
import theme from '../../../theme';
import { ICategory } from '@/types/categories/categories.interface';

export default function ProductDetail({ data }: any) {
    const pathname = usePathname();

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
                container
                xs={12}
                justifyContent={'center'}
                minHeight={'calc(100vh - 113px)'}
                sx={{
                    backgroundColor: theme.palette.primary.contrastText,
                    paddingBottom: 10,
                }}
            >
                <Grid xs={12} item>
                    <Typography
                        variant="h4"
                        textAlign={'center'}
                        fontWeight={'bold'}
                        color={theme.palette.primary.main}
                        sx={{ paddingTop: 4, paddingBottom: 4 }}
                    >
                        {product?.name.toUpperCase()}
                    </Typography>
                </Grid>
                <Grid xs={10} container item justifyContent={'space-between'}>
                    <Grid xs={12} md={5} item>
                        <Fancybox
                            options={{
                                Carousel: {
                                    infinite: false,
                                },
                            }}
                        >
                            <Carousel>
                                {product?.images.map((img) => (
                                    <div key={img.url}>
                                        <a
                                            data-fancybox="gallery"
                                            href={img.url}
                                        >
                                            <Image
                                                src={img.url}
                                                alt=""
                                                layout="responsive"
                                                width={100}
                                                height={100}
                                            />
                                        </a>
                                    </div>
                                ))}
                            </Carousel>
                        </Fancybox>
                    </Grid>
                    <Grid xs={12} md={5} item>
                        <Typography
                            variant="h5"
                            color={theme.palette.primary.main}
                            sx={{ paddingBottom: 4 }}
                        >
                            <b> Mã sản phẩm:</b> {product?._id}
                        </Typography>
                        <Typography
                            variant="h5"
                            color={theme.palette.primary.main}
                            sx={{ paddingBottom: 4 }}
                        >
                            <b> Mô tả:</b> {product?.description}
                        </Typography>
                        <Typography
                            variant="h5"
                            color={theme.palette.primary.main}
                            sx={{ paddingBottom: 4 }}
                        >
                            <b>Giá:</b> {product?.price}
                        </Typography>
                        <Typography
                            variant="h5"
                            color={theme.palette.primary.main}
                            sx={{ paddingBottom: 4 }}
                        >
                            <b>Số lượng có sẵn:</b> {product?.stock}
                        </Typography>
                        <Grid xs={12} item container>
                            <Typography
                                variant="h5"
                                color={theme.palette.primary.main}
                                sx={{ paddingBottom: 4 }}
                            >
                                <b>Danh mục:</b>
                            </Typography>
                            <Chip
                                label={category?.name}
                                color="primary"
                                clickable
                                sx={{ ml: 1, mr: 1, fontSize: '1rem' }}
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Footer />
        </ThemeProvider>
    );
}
