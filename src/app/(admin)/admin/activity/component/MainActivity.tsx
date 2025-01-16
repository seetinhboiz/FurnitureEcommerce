import { ApiPathEnum } from '@/api/api.path.enum';
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
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import axios from '@/api/axios.instance';
import { IActivity } from '@/types/activities/activities.interface';
import { IConfirmDialog } from '@/types/confirmDialog/confirmDialog.interface';
import ConfirmDialog from '../../confirmDialog';
import { useCookies } from 'next-client-cookies';

interface MainActivityProps {
    reload: boolean;
    setReload: Dispatch<SetStateAction<boolean>>;
    setSelectedActivity: Dispatch<SetStateAction<IActivity | undefined>>;
    setType: Dispatch<SetStateAction<'CREATE' | 'UPDATE'>>;
    setOpen: Dispatch<SetStateAction<boolean>>;
}

const MainActivity: React.FC<MainActivityProps> = ({
    reload,
    setReload,
    setSelectedActivity,
    setType,
    setOpen,
}) => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [activities, setActivities] = useState<IActivity[]>([]);
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

    const paginatedCategories = activities.slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage,
    );

    const removeActivity = (id: string) => {
        axios.delete(`${ApiPathEnum.Activity}/${id}`, config).then((res) => {
            if (res.status === 200) setReload(!reload);
        });
    };

    useEffect(() => {
        axios
            .get<ApiResponse<IActivity[]>>(ApiPathEnum.Activity)
            .then((res) => {
                if (res.status === 200) {
                    setActivities(res.data?.data as IActivity[]);
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
                        {paginatedCategories.map((activity) => (
                            <TableRow
                                key={activity.name}
                                sx={{
                                    '&:last-child td, &:last-child th': {
                                        border: 0,
                                    },
                                }}
                            >
                                <TableCell align="left">
                                    {activity._id}
                                </TableCell>
                                <TableCell align="center">
                                    <Stack
                                        direction="row"
                                        justifyContent={'center'}
                                    >
                                        <Avatar
                                            src={activity.images?.[0]?.url}
                                            sx={{ width: 80, height: 80 }}
                                        />
                                    </Stack>
                                </TableCell>
                                <TableCell align="left">
                                    {activity.name}
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
                                            setSelectedActivity(activity);
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
                                        // onClick={() =>
                                        //     removeActivity(
                                        //         activity?._id as string,
                                        //     )
                                        // }
                                        onClick={() => {
                                            setConfirmDialog({
                                                isOpen: true,
                                                title: 'Bạn có chắc muốn xoá?',
                                                subTitle:
                                                    'Bạn sẽ không thể hoàn tác hành động này.',
                                                onConfirm: () => {
                                                    removeActivity(
                                                        activity?._id as string,
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
                count={activities.length}
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

export default MainActivity;
