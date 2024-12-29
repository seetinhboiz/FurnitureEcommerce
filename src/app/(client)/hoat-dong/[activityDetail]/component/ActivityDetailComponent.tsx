'use client';
import Footer from '@/components/Footer';
import { Box, Grid, ThemeProvider, Typography } from '@mui/material';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import theme from '../../../theme';
import { useTranslation } from 'react-i18next';
import { ApiResponse } from '@/types/utils/api-response.interface';
import { IActivity } from '@/types/activities/activities.interface';
import { ApiPathEnum } from '@/api/api.path.enum';
import axios from '@/api/axios.instance';

export default function ActivityDetailComponent() {
    const { t } = useTranslation();
    const path = usePathname();

    const activityId = path.split('-')[path.split('-').length - 1];
    const [currentActivity, setCurrentActivity] = useState<IActivity>();

    const getActivity = async () => {
        const activity = await axios
            .get<
                ApiResponse<IActivity>
            >(`${ApiPathEnum.Activity}/${activityId}`)
            .then((res) => {
                if (res.status === 200) {
                    setCurrentActivity(res.data.data);
                }
            });
    };

    useEffect(() => {
        getActivity();
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <Grid
                container
                justifyContent={'center'}
                xs={12}
                sx={{
                    backgroundColor: theme.palette.primary.contrastText,
                    paddingBottom: 6,
                }}
            >
                <Grid item xs={12}>
                    <Typography
                        variant="h3"
                        textAlign={'center'}
                        fontWeight={'bold'}
                        color={theme.palette.primary.main}
                        sx={{ paddingTop: 4, paddingBottom: 4 }}
                    >
                        {t('activity.companyActivity')}
                    </Typography>
                </Grid>
                <Grid item xs={10} container>
                    <Typography
                        variant="h2"
                        fontWeight={'bold'}
                        color={theme.palette.primary.main}
                        sx={{ paddingTop: 4, paddingBottom: 4 }}
                    >
                        {currentActivity?.name}
                    </Typography>
                    <Grid
                        item
                        container
                        xs={12}
                        justifyContent={'space-between'}
                    >
                        <Grid
                            md={5}
                            xs={12}
                            item
                            sx={{ order: { xs: 2, md: 1 } }}
                        >
                            <Typography
                                variant="h6"
                                color={theme.palette.primary.main}
                                textAlign={'justify'}
                                sx={{ whiteSpace: 'pre-line' }}
                            >
                                {currentActivity?.description}
                            </Typography>
                        </Grid>
                        <Grid
                            md={5}
                            xs={12}
                            item
                            sx={{ order: { xs: 1, md: 2 } }}
                        >
                            <Box position={'relative'} width={1} height={1}>
                                <Image
                                    src={
                                        currentActivity?.images[0]?.url ??
                                        '/images/activity/welcomeEp.png'
                                    }
                                    alt="welcome"
                                    width={1}
                                    height={1}
                                    style={{
                                        objectFit: 'contain',
                                    }}
                                    layout="responsive"
                                />
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Footer />
        </ThemeProvider>
    );
}
