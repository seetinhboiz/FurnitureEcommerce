'use client';
import { Grid, ThemeProvider, Typography } from '@mui/material';
import Image from 'next/image';
import email from '/public/images/recruitment/email.svg';
import phone from '/public/images/recruitment/phone.svg';
import location from '/public/images/recruitment/location.svg';
import theme from '../../theme';
import { useTranslation } from 'react-i18next';

export default function Contact() {
    const { t } = useTranslation();

    return (
        <ThemeProvider theme={theme}>
            <Grid
                container
                justifyContent={'center'}
                sx={{
                    backgroundColor: theme.palette.primary.contrastText,
                    paddingBottom: 4,
                }}
            >
                <Grid xs={12} item>
                    <Typography
                        variant="h4"
                        color={theme.palette.primary.main}
                        textAlign={'center'}
                        fontWeight={'bold'}
                        sx={{ paddingTop: 6, paddingBottom: 2 }}
                    >
                        {t('recruitment.contact.contactHr').toUpperCase()}
                    </Typography>
                </Grid>
                <Grid xs={8} item>
                    <Typography
                        variant="h6"
                        color={theme.palette.primary.main}
                        textAlign={'center'}
                        fontWeight={'bold'}
                    >
                        {t('recruitment.contact.ifHaveQuestion')}
                    </Typography>
                </Grid>

                <Grid
                    xs={10}
                    container
                    item
                    justifyContent={'center'}
                    sx={{ paddingTop: 4, paddingBottom: 4 }}
                >
                    <Grid
                        xs={12}
                        sm={4}
                        item
                        container
                        sx={{ paddingBottom: { sm: 0, xs: 4 } }}
                    >
                        <Grid
                            xs={12}
                            item
                            justifyContent={'center'}
                            container
                            sx={{ mb: 2 }}
                        >
                            <Image
                                src={email}
                                alt="icon"
                                width={100}
                                height={100}
                            />
                        </Grid>
                        <Grid xs={12} item justifyContent={'center'} container>
                            <Typography
                                variant="h5"
                                color={theme.palette.primary.main}
                                textAlign={'center'}
                                fontWeight={'bold'}
                            >
                                {t('recruitment.contact.email')}
                            </Typography>
                        </Grid>
                        <Grid xs={12} item justifyContent={'center'} container>
                            <Typography
                                variant="h6"
                                color={theme.palette.primary.main}
                                textAlign={'center'}
                            >
                                {t('recruitment.contact.emailDescription')}
                            </Typography>
                        </Grid>
                        <Grid xs={12} item justifyContent={'center'} container>
                            <Typography
                                variant="h6"
                                color={theme.palette.primary.main}
                                textAlign={'center'}
                            >
                                <u>honghac.trading@gmail.com</u>
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid
                        xs={12}
                        sm={4}
                        item
                        container
                        sx={{ paddingBottom: { sm: 0, xs: 4 } }}
                    >
                        <Grid
                            xs={12}
                            item
                            justifyContent={'center'}
                            container
                            sx={{ mb: 2 }}
                        >
                            <Image
                                src={phone}
                                alt="icon"
                                width={100}
                                height={100}
                            />
                        </Grid>
                        <Grid xs={12} item justifyContent={'center'} container>
                            <Typography
                                variant="h5"
                                color={theme.palette.primary.main}
                                textAlign={'center'}
                                fontWeight={'bold'}
                            >
                                {t('recruitment.contact.phone')}
                            </Typography>
                        </Grid>
                        <Grid xs={12} item justifyContent={'center'} container>
                            <Typography
                                variant="h6"
                                color={theme.palette.primary.main}
                                textAlign={'center'}
                            >
                                {t('recruitment.contact.phoneDescription')}
                            </Typography>
                        </Grid>
                        <Grid xs={12} item justifyContent={'center'} container>
                            <Typography
                                variant="h6"
                                color={theme.palette.primary.main}
                                textAlign={'center'}
                            >
                                <u>0903667510</u>
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid
                        xs={12}
                        sm={4}
                        item
                        container
                        sx={{ paddingBottom: { sm: 0, xs: 4 } }}
                    >
                        <Grid
                            xs={12}
                            item
                            justifyContent={'center'}
                            container
                            sx={{ mb: 2 }}
                        >
                            <Image
                                src={location}
                                alt="icon"
                                width={100}
                                height={100}
                            />
                        </Grid>
                        <Grid xs={12} item justifyContent={'center'} container>
                            <Typography
                                variant="h5"
                                color={theme.palette.primary.main}
                                textAlign={'center'}
                                fontWeight={'bold'}
                            >
                                {t('recruitment.contact.showRoom')}
                            </Typography>
                        </Grid>
                        <Grid xs={12} item justifyContent={'center'} container>
                            <Typography
                                variant="h6"
                                color={theme.palette.primary.main}
                                textAlign={'center'}
                            >
                                {t('recruitment.contact.showRoomAddress')}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}
