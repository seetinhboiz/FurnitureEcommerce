'use client';
import Footer from '@/components/Footer';
import { Grid, ThemeProvider, Typography } from '@mui/material';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import theme from '../../theme';
import Banner from '../../trang-chu/component/Banner';
import Advertise from './Advertise';
import ServiceInformationItem from './ServiceInfomationItem';
import StorageSVG from './StorageSVG';
import divider from '/public/images/service/divider.svg';
import teamwork from '/public/images/service/teamwork.svg';

export default function ServiceAfterExhibitionComponent() {
    const { t } = useTranslation();

    return (
        <ThemeProvider theme={theme}>
            <Grid container xs={12}>
                <Grid container item xs={12}>
                    <Banner bannerName="serviceAfterExhibitionBanner" />
                </Grid>
                <Grid
                    paddingTop={6}
                    display={'flex'}
                    justifyContent={'center'}
                    color={theme.palette.primary.main}
                    sx={{ backgroundColor: theme.palette.primary.contrastText }}
                >
                    <Grid
                        container
                        xs={10}
                        display={'flex'}
                        justifyContent={'center'}
                        alignItems={'center'}
                    >
                        <Grid item md={6} xs={12}>
                            <Typography
                                variant="h4"
                                textAlign={'center'}
                                fontWeight={'bold'}
                            >
                                {t('service.solution')}
                            </Typography>
                        </Grid>

                        <Grid item>
                            <Typography
                                variant="h6"
                                textAlign={'justify'}
                                marginTop={4}
                                marginBottom={6}
                            >
                                {t('service.solutionDescription')}
                            </Typography>
                        </Grid>

                        <Grid item md={6} xs={12} marginBottom={6}>
                            <StorageSVG />
                        </Grid>

                        <Grid item md={10} xs={12}>
                            <Image
                                src={divider}
                                alt=""
                                layout="responsive"
                                width={1}
                                height={1}
                            />
                        </Grid>

                        <Grid
                            item
                            container
                            xs={12}
                            marginTop={6}
                            marginBottom={6}
                        >
                            <Advertise />
                        </Grid>

                        <Grid item md={10} xs={12}>
                            <Image
                                src={divider}
                                alt=""
                                layout="responsive"
                                width={1}
                                height={1}
                            />
                        </Grid>

                        <Grid item xs={12} marginTop={6}>
                            <Typography
                                variant="h4"
                                textAlign={'center'}
                                fontWeight={'bold'}
                            >
                                {t('service.serviceAfterExhibitionTitle')}
                            </Typography>

                            <Typography
                                variant="h6"
                                textAlign={'left'}
                                marginTop={4}
                            >
                                {t(
                                    'service.serviceExhibitionDescription_Paragraph_1',
                                )}
                            </Typography>
                            <Typography variant="h6" textAlign={'left'}>
                                {t(
                                    'service.serviceExhibitionDescription_Paragraph_2',
                                )}
                            </Typography>
                        </Grid>

                        <Grid item xs={12} container marginTop={4}>
                            <ServiceInformationItem />
                        </Grid>

                        <Grid
                            item
                            md={8}
                            xs={12}
                            paddingY={4}
                            marginTop={6}
                            style={{
                                backgroundColor: theme.palette.primary.main,
                                borderRadius: 36,
                            }}
                        >
                            <Typography
                                variant="h4"
                                fontWeight={'bold'}
                                color={'#FBBB20'}
                                textAlign={'center'}
                            >
                                {t('service.solutionStorage')}
                            </Typography>
                        </Grid>

                        <Grid item container xs={10} marginBottom={6}>
                            <Grid xs={12} md={6}>
                                <Image
                                    src={teamwork}
                                    alt=""
                                    layout="responsive"
                                    height={1}
                                    width={1}
                                />
                            </Grid>
                            <Grid
                                xs={12}
                                md={6}
                                display={'flex'}
                                alignItems={'center'}
                            >
                                <Typography variant="h6" textAlign={'center'}>
                                    {t('service.solutionStorageDescription')}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Footer />
        </ThemeProvider>
    );
}
