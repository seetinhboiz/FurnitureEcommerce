import { ApiPathEnum } from '@/api/api.path.enum';
import axios from '@/api/axios.instance';
import Editor from '@/components/LexicalEditor/LexicalEditor';
import VisuallyHiddenInput from '@/components/VisuallyHiddenInput';
import {
    createFailed,
    createSuccessfully,
    maximum50Character,
    moreThanZero,
    requiredText,
    updateSuccessfully,
} from '@/types/common/notification.constant';
import { isHtmlTagRegex } from '@/types/common/regex.constants';
import { IJobAds } from '@/types/job-ads/job-ads.interface';
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
    Stack,
    TextField,
    Typography,
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import { useFormik } from 'formik';
import { useCookies } from 'next-client-cookies';
import { Dispatch, SetStateAction, useRef, useState } from 'react';
import { toast } from 'react-toastify';
import * as yup from 'yup';
import scrollToIndex from '../../scrollToIndex';

interface JobAdsDialogProps {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
    setReload: Dispatch<SetStateAction<boolean>>;
    reload: boolean;
    type: 'CREATE' | 'UPDATE';
    jobAds?: IJobAds;
}

export const JobAdsDialog: React.FC<JobAdsDialogProps> = ({
    open,
    setOpen,
    reload,
    setReload,
    type,
    jobAds,
}) => {
    const cookie = useCookies();
    const [uploadLoading, setUploadLoading] = useState<boolean>(false);

    const nodeRef = {
        name: useRef(null),
        position: useRef(null),
        quantity: useRef(null),
        startDate: useRef(null),
        endDate: useRef(null),
        title: useRef(null),
        image: useRef(null),
        positionInformation: useRef(null),
        jobDescription: useRef(null),
        requirement: useRef(null),
        salaryInformation: useRef(null),
    };

    const initialValues = {
        _id: type === 'CREATE' ? '' : jobAds?._id,
        name: type === 'CREATE' ? '' : jobAds?.name,
        position: type === 'CREATE' ? '' : jobAds?.position,
        quantity: type === 'CREATE' ? 0 : jobAds?.quantity,
        startDate: type === 'CREATE' ? null : jobAds?.startDate,
        endDate: type === 'CREATE' ? null : jobAds?.endDate,
        title: type === 'CREATE' ? '' : jobAds?.title,
        positionInformation:
            type === 'CREATE' ? '' : jobAds?.positionInformation,
        jobDescription: type === 'CREATE' ? '' : jobAds?.jobDescription,
        requirement: type === 'CREATE' ? '' : jobAds?.requirement,
        salaryInformation: type === 'CREATE' ? '' : jobAds?.salaryInformation,
        image: type === 'CREATE' ? null : jobAds?.image,
    } as IJobAds;

    const validationSchema = yup.object().shape({
        name: yup.string().required(requiredText).max(50, maximum50Character),
        position: yup.string().required(requiredText),
        quantity: yup.number().min(1, moreThanZero),
        startDate: yup.date().required(requiredText),
        endDate: yup.date().required(requiredText),
        title: yup.string().required(requiredText),
        image: yup.object().nonNullable(requiredText),
        positionInformation: yup
            .string()
            .matches(isHtmlTagRegex, requiredText)
            .required(requiredText),
        jobDescription: yup
            .string()
            .matches(isHtmlTagRegex, requiredText)
            .required(requiredText),
        requirement: yup
            .string()
            .matches(isHtmlTagRegex, requiredText)
            .required(requiredText),
        salaryInformation: yup
            .string()
            .matches(isHtmlTagRegex, requiredText)
            .required(requiredText),
    });

    const config = {
        headers: {
            Authorization: `Bearer ${cookie.get('token')}`,
        },
    };

    const handleCreateJobAds = async (jobAds: IJobAds): Promise<boolean> => {
        delete jobAds._id;

        return !!(await axios
            .post(ApiPathEnum.JobAds, jobAds, config)
            .then((res) => {
                if (res.status === 201) {
                    setReload(!reload);
                    toast.success(createSuccessfully);
                    return true;
                }
            })
            .catch((res) => {
                toast.error(`${createFailed}\n${res.message}`);
                return false;
            }));
    };

    const handleUpdateJobAds = async (jobAds: IJobAds): Promise<boolean> => {
        return !!(await axios
            .put(`${ApiPathEnum.JobAds}/${jobAds._id}`, jobAds, config)
            .then((res) => {
                if (res.status === 200) {
                    setReload(!reload);
                    toast.success(updateSuccessfully);
                    return true;
                }
            })
            .catch((res) => {
                toast.error(`${createFailed}\n${res.message}`);
                return false;
            }));
    };

    const handleUploadImage = (evt: any) => {
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
                            const newImages = (formik.values.image = images[0]);

                            formik.setFieldValue('image', newImages);
                        }
                    })
                    .finally(() => {
                        setUploadLoading(false);
                    });
            }
        }
    };

    const deleteImage = (id: string) => {
        formik.setFieldValue('images', null);
        axios.post(`${ApiPathEnum.Files}/remove`, { id });
    };

    const onSubmit = async () => {
        let status = false;
        if (type === 'CREATE') {
            status = await handleCreateJobAds(formik.values);
        } else {
            status = await handleUpdateJobAds(formik.values);
        }

        if (status) {
            handleClose();
        }
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleScrollToError = () => {
        switch (Object.keys(formik.errors)[0]) {
            case 'name':
                scrollToIndex(nodeRef.name, 'input');
                break;
            case 'position':
                scrollToIndex(nodeRef.position, 'input');
                break;
            case 'quantity':
                scrollToIndex(nodeRef.quantity, 'input');
                break;
            case 'startDate':
                scrollToIndex(nodeRef.startDate, 'input');
                break;
            case 'endDate':
                scrollToIndex(nodeRef.endDate, 'input');
                break;
            case 'title':
                scrollToIndex(nodeRef.title, 'input');
                break;
            case 'image':
                scrollToIndex(nodeRef.image);
                break;
            case 'positionInformation':
                if (formik.errors.position) {
                    scrollToIndex(nodeRef.position, 'input');
                } else if (formik.errors.quantity) {
                    scrollToIndex(nodeRef.quantity, 'input');
                } else if (formik.errors.startDate) {
                    scrollToIndex(nodeRef.startDate, 'input');
                } else if (formik.errors.endDate) {
                    scrollToIndex(nodeRef.endDate, 'input');
                } else if (formik.errors.title) {
                    scrollToIndex(nodeRef.title, 'input');
                } else if (formik.errors.image) {
                    scrollToIndex(nodeRef.image);
                } else {
                    scrollToIndex(
                        nodeRef.positionInformation,
                        'div.content-editor',
                    );
                }
                break;
            case 'jobDescription':
                scrollToIndex(nodeRef.jobDescription, 'div.content-editor');
                break;
            case 'requirement':
                scrollToIndex(nodeRef.requirement, 'div.content-editor');
                break;
            case 'salaryInformation':
                scrollToIndex(nodeRef.salaryInformation, 'div.content-editor');
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

    return (
        <Dialog open={open} onClose={handleClose} maxWidth={'lg'} fullWidth>
            <form onSubmit={formik.handleSubmit}>
                <DialogTitle>
                    {type === 'CREATE'
                        ? 'Tạo tin tuyển dụng'
                        : 'Cập nhật tin tuyển dụng'}
                </DialogTitle>
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
                        ref={nodeRef.name}
                    />
                    <TextField
                        sx={{ my: 1 }}
                        id="position"
                        label="Vị trí"
                        name="position"
                        fullWidth
                        value={formik.values.position}
                        onChange={formik.handleChange}
                        error={
                            formik.touched.position &&
                            Boolean(formik.errors.position)
                        }
                        helperText={
                            formik.touched.position && formik.errors.position
                        }
                        ref={nodeRef.position}
                    />
                    <TextField
                        sx={{ my: 1 }}
                        id="quantity"
                        label="Số lượng"
                        type="number"
                        name="quantity"
                        fullWidth
                        value={formik.values.quantity}
                        onChange={formik.handleChange}
                        error={
                            formik.touched.quantity &&
                            Boolean(formik.errors.quantity)
                        }
                        helperText={
                            formik.touched.quantity && formik.errors.quantity
                        }
                        ref={nodeRef.quantity}
                    />
                    <Stack direction={'row'} gap={2} sx={{ my: 1 }}>
                        <DatePicker
                            label="Ngày bắt đầu"
                            slotProps={{
                                textField: {
                                    InputLabelProps: { shrink: true },
                                },
                            }}
                            value={dayjs(formik.values.startDate)}
                            sx={{ width: 1 }}
                            onChange={(value) => {
                                formik.setFieldValue(
                                    'startDate',
                                    value?.toDate(),
                                );
                            }}
                            format="DD/MM/YYYY"
                            ref={nodeRef.startDate}
                        />
                        <DatePicker
                            label="Ngày kết thúc"
                            slotProps={{
                                textField: {
                                    InputLabelProps: { shrink: true },
                                },
                            }}
                            value={dayjs(formik.values.endDate)}
                            sx={{ width: 1 }}
                            onChange={(value) => {
                                formik.setFieldValue(
                                    'endDate',
                                    value?.toDate(),
                                );
                            }}
                            format="DD/MM/YYYY"
                            ref={nodeRef.endDate}
                        />
                    </Stack>
                    <TextField
                        sx={{ my: 1 }}
                        id="title"
                        label="Tiêu đề"
                        name="title"
                        fullWidth
                        value={formik.values.title}
                        onChange={formik.handleChange}
                        error={
                            formik.touched.title && Boolean(formik.errors.title)
                        }
                        helperText={formik.touched.title && formik.errors.title}
                        ref={nodeRef.title}
                    />
                    <Stack direction={'row'} gap={2} alignItems={'center'}>
                        <LoadingButton
                            component="label"
                            variant="contained"
                            tabIndex={-1}
                            startIcon={<CloudUploadIcon />}
                            sx={{ my: 1 }}
                            loading={uploadLoading}
                            ref={nodeRef.image}
                        >
                            Tải ảnh sản phẩm
                            <VisuallyHiddenInput
                                type="file"
                                multiple={false}
                                onChange={handleUploadImage}
                            />
                        </LoadingButton>
                        {formik.touched.image &&
                            Boolean(formik.errors.image) && (
                                <Typography color="error">
                                    {formik.errors.image}
                                </Typography>
                            )}
                    </Stack>
                    {formik.values.image && (
                        <List>
                            <ListItem
                                sx={{ gap: 2 }}
                                secondaryAction={
                                    <IconButton
                                        edge="end"
                                        aria-label="delete"
                                        onClick={() => {
                                            deleteImage(
                                                formik.values.image
                                                    ?.id as string,
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
                                            src={
                                                formik.values.image
                                                    ?.url as string
                                            }
                                            width={1}
                                            height={1}
                                        />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    sx={{ overflow: 'hidden' }}
                                    primary={formik.values.image?.id as string}
                                />
                            </ListItem>
                        </List>
                    )}
                    <Box sx={{ my: 1 }} ref={nodeRef.positionInformation}>
                        <Typography sx={{ mb: 1, fontWeight: 500 }}>
                            Thông tin vị trí
                        </Typography>
                        <Editor
                            value={formik.values.positionInformation}
                            onChange={(value) => {
                                formik.setFieldValue(
                                    'positionInformation',
                                    value,
                                );
                            }}
                            name="positionInformation"
                            error={
                                formik.touched.positionInformation &&
                                Boolean(formik.errors.positionInformation)
                            }
                            helperText={
                                formik.touched.positionInformation &&
                                formik.errors.positionInformation
                            }
                        />
                    </Box>
                    <Box sx={{ my: 1 }} ref={nodeRef.jobDescription}>
                        <Typography sx={{ mb: 1, fontWeight: 500 }}>
                            Mô tả công việc
                        </Typography>
                        <Editor
                            value={formik.values.jobDescription}
                            onChange={(value) => {
                                formik.setFieldValue('jobDescription', value);
                            }}
                            name="jobDescription"
                            error={
                                formik.touched.jobDescription &&
                                Boolean(formik.errors.jobDescription)
                            }
                            helperText={
                                formik.touched.jobDescription &&
                                formik.errors.jobDescription
                            }
                        />
                    </Box>
                    <Box sx={{ my: 1 }} ref={nodeRef.requirement}>
                        <Typography sx={{ mb: 1, fontWeight: 500 }}>
                            Yêu cầu công việc
                        </Typography>
                        <Editor
                            value={formik.values.requirement}
                            onChange={(value) => {
                                formik.setFieldValue('requirement', value);
                            }}
                            name="requirement"
                            error={
                                formik.touched.requirement &&
                                Boolean(formik.errors.requirement)
                            }
                            helperText={
                                formik.touched.requirement &&
                                formik.errors.requirement
                            }
                        />
                    </Box>
                    <Box sx={{ my: 1 }} ref={nodeRef.salaryInformation}>
                        <Typography sx={{ mb: 1, fontWeight: 500 }}>
                            Thông tin lương thưởng
                        </Typography>
                        <Editor
                            value={formik.values.salaryInformation}
                            onChange={(value) => {
                                formik.setFieldValue(
                                    'salaryInformation',
                                    value,
                                );
                            }}
                            name="salaryInformation"
                            error={
                                formik.touched.salaryInformation &&
                                Boolean(formik.errors.salaryInformation)
                            }
                            helperText={
                                formik.touched.salaryInformation &&
                                formik.errors.salaryInformation
                            }
                        />
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Hủy bỏ</Button>
                    <Button type="submit">
                        {type === 'CREATE' ? 'Tạo mới' : 'Cập nhật'}
                    </Button>
                </DialogActions>
            </form>
        </Dialog>
    );
};
