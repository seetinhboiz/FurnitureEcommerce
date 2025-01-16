'use client';
import { ApiPathEnum } from '@/api/api.path.enum';
import axios from '@/api/axios.instance';
import { ICategory } from '@/types/categories/categories.interface';
import { IConfirmDialog } from '@/types/confirmDialog/confirmDialog.interface';
import { IProduct } from '@/types/products/products.interface';
import { ApiResponse } from '@/types/utils/api-response.interface';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import {
    alpha,
    Box,
    Button,
    createTheme,
    IconButton,
    PaletteMode,
    Paper,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TablePagination,
    TableRow,
    Typography,
} from '@mui/material';
import { useEffect, useState } from 'react';
import ConfirmDialog from '../confirmDialog';
import Header from '../dashboard/components/Header';
import Navbar from '../dashboard/components/Navbar';
import SideMenu from '../dashboard/components/SideMenu';
import getDashboardTheme from '../dashboard/theme/getDashboardTheme';
import ProductDialog from './component/ProductDialog';
import { useCookies } from 'next-client-cookies';

export default function User() {
    const [mode, setMode] = useState<PaletteMode>('light');
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [products, setProducts] = useState<IProduct[]>([]);
    const [open, setOpen] = useState(false);
    const [reload, setReload] = useState(true);
    const [type, setType] = useState<'CREATE' | 'UPDATE'>('CREATE');
    const [selectedProduct, setSelectedProduct] = useState<
        IProduct | undefined
    >();
    const [confirmDialog, setConfirmDialog] = useState<IConfirmDialog>({
        isOpen: false,
        title: '',
        subTitle: '',
    });
    const cookie = useCookies();

    const config = {
        headers: {
            Authorization: `Bearer ${cookie.get('token')}`,
        },
    };

    const handleChangePage = (event: any, newPage: any) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: any) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const paginatedProducts = products.slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage,
    );

    useEffect(() => {
        axios.get<ApiResponse<IProduct[]>>(ApiPathEnum.Product).then((res) => {
            if (res.status === 200) {
                setProducts(res.data.data as IProduct[]);
            }
        });
    }, [reload]);
    const dashboardTheme = createTheme(getDashboardTheme(mode));

    const toggleColorMode = () => {
        setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
    };

    const handleDelete = (id: string) => {
        axios.delete(`${ApiPathEnum.Product}/${id}`, config).then((res) => {
            if (res.status === 200) {
                setReload(!reload);
            }
        });
    };

    useEffect(() => {}, []);

    return (
        <Box sx={{ display: 'flex' }}>
            <SideMenu />
            <Navbar mode={mode} toggleColorMode={toggleColorMode} />
            {/* Main content */}
            <Box
                component="main"
                sx={(theme) => ({
                    position: { sm: 'relative', md: '' },
                    top: { sm: '48px', md: '0' },
                    height: { sm: 'calc(100vh - 48px)', md: '100vh' },
                    flexGrow: 1,
                    pt: 2,
                    backgroundColor: alpha(theme.palette.background.default, 1),
                    overflow: 'auto',
                })}
            >
                <Stack
                    spacing={2}
                    sx={{
                        alignItems: 'center',
                        mx: 3,
                        pb: 10,
                    }}
                >
                    <Header mode={mode} toggleColorMode={toggleColorMode} />
                    <Typography
                        variant="h4"
                        color={mode === 'light' ? 'black' : 'white'}
                    >
                        Quản lý sản phẩm
                    </Typography>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'flex-end',
                            width: '100%',
                        }}
                    >
                        <Button
                            component="label"
                            role={undefined}
                            variant="contained"
                            tabIndex={-1}
                            startIcon={<AddIcon />}
                            color="info"
                            onClick={() => {
                                setType('CREATE');
                                setOpen(true);
                                setSelectedProduct(undefined);
                            }}
                        >
                            Sản phẩm mới
                        </Button>
                    </Box>
                    <TableContainer
                        sx={{
                            width: '100%',
                            maxWidth: { sm: '100%', md: '1700px' },
                        }}
                        component={Paper}
                    >
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell
                                        align="left"
                                        sx={{ fontWeight: 'bold' }}
                                    >
                                        Id
                                    </TableCell>
                                    <TableCell
                                        align="left"
                                        sx={{ fontWeight: 'bold' }}
                                    >
                                        Tên sản phẩm
                                    </TableCell>
                                    <TableCell
                                        align="left"
                                        sx={{ fontWeight: 'bold' }}
                                    >
                                        Danh mục
                                    </TableCell>
                                    <TableCell
                                        align="left"
                                        sx={{ fontWeight: 'bold' }}
                                    >
                                        Giá
                                    </TableCell>
                                    <TableCell
                                        align="left"
                                        sx={{ fontWeight: 'bold' }}
                                    >
                                        Số lượng tồn kho
                                    </TableCell>
                                    <TableCell
                                        align="center"
                                        sx={{ fontWeight: 'bold' }}
                                    >
                                        Hành động
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {paginatedProducts.map((product) => (
                                    <TableRow
                                        key={product.name}
                                        sx={{
                                            '&:last-child td, &:last-child th':
                                                { border: 0 },
                                        }}
                                    >
                                        <TableCell align="left">
                                            {product._id}
                                        </TableCell>
                                        <TableCell align="left">
                                            {product.name}
                                        </TableCell>
                                        <TableCell align="left">
                                            {
                                                (
                                                    product.categoryId as ICategory
                                                )?.name
                                            }
                                        </TableCell>
                                        <TableCell align="left">
                                            {product.price}
                                        </TableCell>
                                        <TableCell align="left">
                                            {product.stock}
                                        </TableCell>
                                        <TableCell align="center">
                                            <IconButton
                                                sx={{
                                                    border: 'none',
                                                    boxShadow: 'none',
                                                    padding: 0,
                                                }}
                                            >
                                                <EditIcon
                                                    color="success"
                                                    onClick={() => {
                                                        setSelectedProduct(
                                                            product,
                                                        );
                                                        setType('UPDATE');
                                                        setOpen(true);
                                                    }}
                                                />
                                            </IconButton>
                                            <IconButton
                                                color="secondary"
                                                sx={{
                                                    border: 'none',
                                                    boxShadow: 'none',
                                                    padding: 0,
                                                }}
                                                onClick={() => {
                                                    setConfirmDialog({
                                                        isOpen: true,
                                                        title: 'Bạn có chắc muốn xoá?',
                                                        subTitle:
                                                            'Bạn sẽ không thể hoàn tác hành động này.',
                                                        onConfirm: () => {
                                                            handleDelete(
                                                                product?._id as string,
                                                            );
                                                        },
                                                    });
                                                }}
                                            >
                                                <DeleteIcon color="error" />
                                            </IconButton>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <TablePagination
                        rowsPerPageOptions={[10, 25, 50]}
                        component="div"
                        count={products.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </Stack>
            </Box>
            <ProductDialog
                open={open}
                reload={reload}
                setOpen={setOpen}
                setReload={setReload}
                type={type}
                product={selectedProduct}
            />
            <ConfirmDialog
                confirmDialog={confirmDialog}
                setConfirmDialog={setConfirmDialog}
            />
        </Box>
    );
}
