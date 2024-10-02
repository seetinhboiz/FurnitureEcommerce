'use client';

import { ApiPathEnum } from '@/api/api.path.enum';
import axios from '@/api/axios.instance';
import Footer from '@/components/Footer';
import { ICategory } from '@/types/categories/categories.interface';
import { IProduct } from '@/types/products/products.interface';
import {
    Divider,
    FormControl,
    Grid,
    InputLabel,
    MenuItem,
    Select,
    SelectChangeEvent,
    ThemeProvider,
    Typography,
} from '@mui/material';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import theme from '../../theme';
import ProductBox from '../../san-pham/components/product-box';

const AllProductComponent = () => {
    const searchParams = useSearchParams();

    const [products, setProducts] = useState<IProduct[]>();
    const [categories, setCategories] = useState<ICategory[]>();
    const [categoryId, setCategoryId] = useState('');
    const [title, setTitle] = useState<string>();

    let categoryIdParam: any;

    const searchCategory = searchParams.get('category');

    if (searchCategory) {
        categoryIdParam = searchCategory?.split('-')[1];
    }

    const handleSelectChange = (event: SelectChangeEvent) => {
        setCategoryId(event.target.value);

        const selectedCategory = categories?.find(
            (category) => category._id === event.target.value,
        );

        selectedCategory
            ? setTitle(selectedCategory.name)
            : setTitle('tất cả sản phẩm');
    };

    const getTitle = () => {
        !title && getCurrentCategory();
    };

    const getCurrentCategory = () => {
        axios
            .get(`${ApiPathEnum.Category}/${categoryIdParam}`)
            .then((res) => setTitle(res.data.data.name));
    };

    const getProductByFilter = () => {
        axios
            .get(`${ApiPathEnum.Product}`, {
                params: {
                    category: categoryId
                        ? categoryId.trim()
                        : (categoryIdParam as string),
                },
            })
            .then((res) => setProducts(res.data.data));
    };

    const getCategory = () => {
        axios
            .get(`${ApiPathEnum.Category}`)
            .then((res) => setCategories(res.data.data));
    };

    useEffect(() => {
        getProductByFilter();
        getCategory();
        getTitle();
    }, [categoryId]);

    return (
            <ThemeProvider theme={theme}>
                <Grid
                    container
                    justifyContent={'center'}
                    xs={12}
                    sx={{
                        backgroundColor: theme.palette.primary.contrastText,
                        paddingTop: 4,
                        paddingBottom: 4,
                    }}
                >
                    <Grid item xs={10} container alignItems={'center'}>
                        <Grid xs={12} item>
                            <Typography
                                variant="h4"
                                color={theme.palette.primary.main}
                                fontWeight={'bold'}
                                textAlign={'center'}
                            >
                                {title?.toUpperCase()}
                            </Typography>
                        </Grid>
                        <FormControl sx={{ width: 200, mr: 4 }}>
                            <InputLabel id="demo-simple-select-label">
                                Nhóm sản phẩm
                            </InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={categoryId || categoryIdParam}
                                label="Nhóm sản phẩm"
                                onChange={handleSelectChange}
                            >
                                <MenuItem value={' '}>None</MenuItem>
                                {categories?.map((category) => (
                                    <MenuItem
                                        value={category._id}
                                        key={category._id}
                                    >
                                        {category.name}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        <Grid xs={12} sx={{ paddingTop: 2, paddingBottom: 2 }}>
                            <Divider />
                        </Grid>
                        <Grid item container xs={12} spacing={2}>
                            {products?.map((product) => (
                                <Grid
                                    item
                                    xs={12}
                                    md={6}
                                    lg={3}
                                    key={product._id}
                                >
                                    <ProductBox
                                        data={product}
                                        type={'product'}
                                    />
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>
                <Footer />
            </ThemeProvider>
    );
};

export default AllProductComponent;
