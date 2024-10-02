'use client';
import Footer from '@/components/Footer';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import {
    Box,
    Button,
    Grid,
    TextField,
    ThemeProvider,
    Typography,
} from '@mui/material';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import contactImg from '../../../assets/images/contact.png';
import theme from '../../theme';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { Contact } from '@/types/contacts/contact.interface';
import {
    invalidEmail,
    maximum255Character,
    maximum50Character,
    requiredText,
} from '@/types/common/notification.constant';
import axios from '@/api/axios.instance';
import { ApiPathEnum } from '@/api/api.path.enum';
import { ApiResponse } from '@/types/utils/api-response.interface';
import { isEmailRegex } from '@/types/common/regex.constants';
import { useTranslation } from 'react-i18next';

const ContactComponent = () => {
    const { t } = useTranslation();
    const contactTheme = theme;
    const [isSend, setIsSend] = useState(false);

    const initialValues = {
        email: '',
        isResolved: false,
        message: '',
        name: '',
    };

    const validationSchema = yup.object().shape({
        name: yup.string().required(requiredText).max(50, maximum50Character),
        message: yup
            .string()
            .required(requiredText)
            .max(255, maximum255Character),
        email: yup
            .string()
            .matches(isEmailRegex, invalidEmail)
            .required(requiredText)
            .max(255, maximum255Character),
    });

    const onSubmit = () => {
        axios
            .post<ApiResponse<Contact>>(ApiPathEnum.Contact, formik.values)
            .then((res) => {
                if (res.status === 201) {
                    setIsSend(true);
                }
            });
    };

    useEffect(() => {
        setIsSend(false);
    }, []);

    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema,
    });

    return (
        <ThemeProvider theme={contactTheme}>
            <Box sx={{ backgroundColor: '#fff' }}>
                {!isSend ? (
                    <form onSubmit={formik.handleSubmit}>
                        <Grid
                            xs={12}
                            container
                            justifyContent={'space-evenly'}
                            sx={{ pt: 6, pb: 6 }}
                        >
                            <Grid
                                xs={10}
                                md={5}
                                item
                                container
                                justifyContent={'center'}
                            >
                                <Grid
                                    xs={12}
                                    item
                                    container
                                    justifyContent={'center'}
                                    alignItems={'center'}
                                >
                                    <LocalPhoneOutlinedIcon
                                        fontSize="large"
                                        sx={{
                                            color: contactTheme.palette.primary
                                                .main,
                                        }}
                                    />
                                    <Typography
                                        variant="h5"
                                        fontWeight={'bold'}
                                        color={
                                            contactTheme.palette.primary.main
                                        }
                                        sx={{ ml: 1 }}
                                    >
                                        {t('contact.contactUs')}
                                    </Typography>
                                </Grid>
                                <Grid xs={12}>
                                    <TextField
                                        id="name"
                                        label={t('contact.name')}
                                        variant="outlined"
                                        fullWidth
                                        margin="normal"
                                        color="primary"
                                        name="name"
                                        onChange={formik.handleChange}
                                        helperText={
                                            formik.touched.name &&
                                            formik.errors.name
                                        }
                                        error={
                                            formik.touched.name &&
                                            Boolean(formik.errors.name)
                                        }
                                    />
                                    <TextField
                                        id="email"
                                        label="Email"
                                        variant="outlined"
                                        fullWidth
                                        margin="normal"
                                        color="primary"
                                        placeholder="example@gmail.com"
                                        name="email"
                                        onChange={formik.handleChange}
                                        helperText={
                                            formik.touched.email &&
                                            formik.errors.email
                                        }
                                        error={
                                            formik.touched.email &&
                                            Boolean(formik.errors.email)
                                        }
                                    />
                                    <TextField
                                        id="message"
                                        label={t('contact.messsage')}
                                        multiline
                                        fullWidth
                                        margin="normal"
                                        rows={4}
                                        color="primary"
                                        placeholder="Your message"
                                        name="message"
                                        onChange={formik.handleChange}
                                        helperText={
                                            formik.touched.message &&
                                            formik.errors.message
                                        }
                                        error={
                                            formik.touched.message &&
                                            Boolean(formik.errors.message)
                                        }
                                    />
                                    <Button
                                        variant="contained"
                                        fullWidth
                                        size="large"
                                        sx={{
                                            color: '#fff',
                                            backgroundColor:
                                                contactTheme.palette.primary
                                                    .main,
                                            '&:hover': {
                                                backgroundColor:
                                                    contactTheme.palette.primary
                                                        .main,
                                            },
                                        }}
                                        type="submit"
                                    >
                                        {t('contact.send').toUpperCase()}
                                    </Button>
                                </Grid>
                            </Grid>
                            <Grid
                                xs={10}
                                md={5}
                                item
                                container
                                justifyContent={'center'}
                            >
                                <Image
                                    src={contactImg}
                                    alt="contact image"
                                    layout="responesive"
                                    objectFit="contain"
                                    style={{ width: '100%', height: 'auto' }}
                                />
                            </Grid>
                        </Grid>
                    </form>
                ) : (
                    <Grid
                        xs={12}
                        container
                        justifyContent={'space-evenly'}
                        sx={{ pt: 6, pb: 6 }}
                    >
                        <Grid xs={10} item>
                            <Typography
                                variant="h4"
                                color={theme.palette.primary.main}
                                fontWeight={'bold'}
                                textAlign={'center'}
                            >
                                {t(
                                    'contact.yourInformationHaveSentSuccessfully',
                                ).toUpperCase()}
                            </Typography>
                            <Typography
                                variant="h6"
                                color={theme.palette.primary.main}
                                fontWeight={'bold'}
                                textAlign={'center'}
                            >
                                {t(
                                    'contact.weWillContactYouAsap',
                                ).toUpperCase()}
                            </Typography>
                        </Grid>
                        <Grid xs={10} item container justifyContent={'center'}>
                            <Grid
                                xs={10}
                                md={5}
                                item
                                container
                                justifyContent={'center'}
                            >
                                <Image
                                    src={contactImg}
                                    alt="contact image"
                                    layout="responesive"
                                    objectFit="contain"
                                    style={{ width: '100%', height: 'auto' }}
                                />
                            </Grid>
                        </Grid>
                        <Grid xs={10} item>
                            <Typography
                                variant="h4"
                                color={theme.palette.primary.main}
                                fontWeight={'bold'}
                                textAlign={'center'}
                            >
                                {t('contact.thankYou').toUpperCase()}
                            </Typography>
                            <Typography
                                variant="h6"
                                color={theme.palette.primary.main}
                                textAlign={'center'}
                            >
                                {t(
                                    'contact.continueExploreOurProduct',
                                ).toUpperCase()}
                            </Typography>
                        </Grid>
                    </Grid>
                )}

                <Grid xs={12}>
                    <Footer />
                </Grid>
            </Box>
        </ThemeProvider>
    );
};

export default ContactComponent;
