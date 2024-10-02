'use client';
import { activities } from '@/app/static';
import Footer from '@/components/Footer';
import { Box, Grid, ThemeProvider, Typography } from '@mui/material';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import theme from '../../../theme';
import { useTranslation } from 'react-i18next';

export default function ActivityDetailComponent() {
    const { t } = useTranslation();
    const path = usePathname();

    const activityId = path.split('-')[path.split('-').length - 1];
    const [currentActivity, setCurrentActivity] = useState<any>({});

    const getActivity = () => {
        const activity = activities.find(
            (activity) => activity.id.toString() === activityId,
        );

        activity && setCurrentActivity(activity);
    };

    useEffect(() => {
        getActivity();
    }, [currentActivity]);

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
                        variant="h4"
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
                        variant="h5"
                        fontWeight={'bold'}
                        color={theme.palette.primary.main}
                        sx={{ paddingTop: 4, paddingBottom: 4 }}
                    >
                        {t(`${currentActivity.title}`)}
                    </Typography>
                    <Typography
                        variant="h6"
                        color={theme.palette.primary.main}
                        textAlign={'justify'}
                    >
                        {t(`${currentActivity.description?.firstTypography}`)}
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
                                dangerouslySetInnerHTML={{
                                    __html: t(
                                        `${currentActivity.description?.mainTypography}`,
                                    ),
                                }}
                            ></Typography>
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
                                        currentActivity?.img ??
                                        '/images/activity/welcomeEp.png'
                                    }
                                    alt="welcome"
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    style={{
                                        objectFit: 'cover',
                                    }}
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
