import { ApiPathEnum } from '@/api/api.path.enum';
import axios from '@/api/axios.instance';
import { ICategory } from '@/types/categories/categories.interface';
import { IConfirmDialog } from '@/types/confirmDialog/confirmDialog.interface';
import { ApiResponse } from '@/types/utils/api-response.interface';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import {
    Avatar,
    IconButton,
    Paper,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TablePagination,
    TableRow,
} from '@mui/material';
import { useCookies } from 'next-client-cookies';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import ConfirmDialog from '../../confirmDialog';

interface MainCategoryProps {
    reload: boolean;
    setReload: Dispatch<SetStateAction<boolean>>;
    setSelectedCategory: Dispatch<SetStateAction<ICategory | undefined>>;
    setType: Dispatch<SetStateAction<'CREATE' | 'UPDATE'>>;
    setOpen: Dispatch<SetStateAction<boolean>>;
}

const MainCategory: React.FC<MainCategoryProps> = ({
    reload,
    setReload,
    setSelectedCategory,
    setType,
    setOpen,
}) => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [categories, setCategories] = useState<ICategory[]>([]);
    const [error, setError] = useState('');
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

    const paginatedCategories = categories.slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage,
    );

    const removeCategory = (id: string) => {
        axios.delete(`${ApiPathEnum.Category}/${id}`, config).then((res) => {
            if (res.status === 200) setReload(!reload);
        });
    };

    useEffect(() => {
        axios
            .get<ApiResponse<ICategory[]>>(ApiPathEnum.Category)
            .then((res) => {
                if (res.status === 200) {
                    setCategories(res.data?.data as ICategory[]);
                } else setError(res.data?.error as string);
            });
    }, [reload]);

    return (
        <>
            <TableContainer
                sx={{ width: '100%', maxWidth: { sm: '100%', md: '1700px' } }}
                component={Paper}
            >
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="left" sx={{ fontWeight: 'bold' }}>
                                Id
                            </TableCell>
                            <TableCell
                                align="center"
                                sx={{ fontWeight: 'bold' }}
                            >
                                Ảnh
                            </TableCell>
                            <TableCell align="left" sx={{ fontWeight: 'bold' }}>
                                Tên
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
                        {paginatedCategories.map((category) => (
                            <TableRow
                                key={category.name}
                                sx={{
                                    '&:last-child td, &:last-child th': {
                                        border: 0,
                                    },
                                }}
                            >
                                <TableCell align="left">
                                    {category._id}
                                </TableCell>
                                <TableCell align="center">
                                    <Stack
                                        direction="row"
                                        justifyContent={'center'}
                                    >
                                        <Avatar
                                            src={category.image?.url}
                                            sx={{ width: 80, height: 80 }}
                                        />
                                    </Stack>
                                </TableCell>
                                <TableCell align="left">
                                    {category.name}
                                </TableCell>
                                <TableCell align="center">
                                    <IconButton
                                        sx={{
                                            border: 'none',
                                            boxShadow: 'none',
                                            padding: 0,
                                        }}
                                        onClick={() => {
                                            setType('UPDATE');
                                            setSelectedCategory(category);
                                            setOpen(true);
                                        }}
                                    >
                                        <EditIcon color="success" />
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
                                                    removeCategory(
                                                        category?._id as string,
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
                count={categories.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
            <ConfirmDialog
                confirmDialog={confirmDialog}
                setConfirmDialog={setConfirmDialog}
            />
        </>
    );
};

export default MainCategory;
