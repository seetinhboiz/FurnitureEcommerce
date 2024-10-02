'use client';
import { Box, Grid, ThemeProvider, Typography } from '@mui/material';
import theme from '../../theme';
import Image from 'next/image';
import DoneIcon from '@mui/icons-material/Done';
import { useTranslation } from 'react-i18next';
import './style.scss';

export default function Service() {
    const { t } = useTranslation();

    return (
        <ThemeProvider theme={theme}>
            <Grid
                sx={{
                    backgroundColor: theme.palette.primary.contrastText,
                    paddingTop: 6,
                    paddingBottom: 6,
                }}
            >
                <Grid xs={12} container>
                    <Grid
                        item
                        container
                        alignContent={'center'}
                        justifyContent={'center'}
                        xs={6}
                        p={5}
                    >
                        <Grid
                            sx={{
                                height: {
                                    xs: 200,
                                    md: 500,
                                    lg: 600,
                                },
                                width: {
                                    xs: 200,
                                    md: 500,
                                    lg: 600,
                                },
                            }}
                            className="hexagonContainer"
                            p={1}
                        >
                            <Box
                                className="hexagonWhiteContainer"
                                width={1}
                                height={1}
                                p={5}
                            >
                                <Box position={'relative'} height={1} width={1}>
                                    <Image
                                        src="/images/home/sample.jpg"
                                        className="hexagon"
                                        alt="sample"
                                        fill
                                        sizes="100vw"
                                    />
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>

                    <Grid xs={6} item container alignContent={'center'} p={5}>
                        <Grid item xs={12}>
                            <Typography
                                variant="h4"
                                textAlign={'left'}
                                color={theme.palette.primary.main}
                                sx={{ mb: { xs: 0, md: 4 } }}
                            >
                                {t('home.rentalService').toUpperCase()}
                            </Typography>
                        </Grid>
                        <Grid
                            xs={12}
                            container
                            direction={'row'}
                            alignItems={'center'}
                            sx={{ mt: { xs: 0, md: 4 } }}
                            justifyContent={'left'}
                        >
                            <DoneIcon color="primary" fontSize="medium" />
                            <Typography
                                variant="h6"
                                color={theme.palette.primary.main}
                                fontWeight={'bold'}
                                sx={{ ml: 2 }}
                            >
                                {t('home.fast')}
                            </Typography>
                        </Grid>
                        <Grid
                            xs={12}
                            container
                            direction={'row'}
                            alignItems={'center'}
                            sx={{ mt: { xs: 0, md: 4 } }}
                            justifyContent={'left'}
                        >
                            <DoneIcon color="primary" />
                            <Typography
                                variant="h6"
                                color={theme.palette.primary.main}
                                fontWeight={'bold'}
                                sx={{ ml: 2 }}
                            >
                                {t('home.efficiency')}
                            </Typography>
                        </Grid>
                        <Grid
                            xs={12}
                            container
                            direction={'row'}
                            alignItems={'center'}
                            justifyContent={'left'}
                            sx={{ mt: { xs: 0, md: 4 } }}
                        >
                            <DoneIcon color="primary" />
                            <Typography
                                variant="h6"
                                color={theme.palette.primary.main}
                                fontWeight={'bold'}
                                sx={{ ml: 2 }}
                            >
                                {t('home.simple')}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid
                    xs={12}
                    container
                    justifyContent={'space-evenly'}
                    sx={{ mt: 4 }}
                >
                    <Grid xs={6} item container alignContent={'center'}>
                        <Grid item xs={12}>
                            <Typography
                                variant="h4"
                                textAlign={'right'}
                                color={theme.palette.primary.main}
                                sx={{ mb: { xs: 0, md: 6 } }}
                            >
                                {t('home.afterShowService').toUpperCase()}
                            </Typography>
                        </Grid>
                        <Grid
                            xs={12}
                            container
                            direction={'row'}
                            alignItems={'center'}
                            sx={{ mt: { xs: 0, md: 4 } }}
                            justifyContent={'right'}
                        >
                            <Typography
                                variant="h6"
                                color={theme.palette.primary.main}
                                fontWeight={'bold'}
                                sx={{ ml: 2 }}
                            >
                                {t('home.afterShowService')}
                            </Typography>
                        </Grid>
                        <Grid
                            xs={12}
                            container
                            direction={'row'}
                            alignItems={'center'}
                            sx={{ mt: { xs: 0, md: 4 } }}
                            justifyContent={'right'}
                        >
                            <Typography
                                variant="h6"
                                color={theme.palette.primary.main}
                                fontWeight={'bold'}
                                sx={{ ml: 2 }}
                            >
                                {t('home.longTermSolution')}
                            </Typography>
                        </Grid>
                        <Grid
                            xs={12}
                            container
                            direction={'row'}
                            alignItems={'center'}
                            justifyContent={'right'}
                            sx={{ mt: { xs: 0, md: 4 } }}
                        >
                            <Typography
                                variant="h6"
                                color={theme.palette.primary.main}
                                fontWeight={'bold'}
                                sx={{ ml: 2 }}
                            >
                                {t('home.connectWithClient')}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid
                        item
                        container
                        alignContent={'center'}
                        justifyContent={'center'}
                        xs={6}
                        p={5}
                    >
                        <Grid
                            sx={{
                                height: {
                                    xs: 200,
                                    md: 500,
                                    lg: 600,
                                },
                                width: {
                                    xs: 200,
                                    md: 500,
                                    lg: 600,
                                },
                            }}
                            className="hexagonContainer"
                            p={1}
                        >
                            <Box
                                className="hexagonWhiteContainer"
                                width={1}
                                height={1}
                                p={5}
                            >
                                <Box position={'relative'} height={1} width={1}>
                                    <Image
                                        src="/images/home/sample.jpg"
                                        className="hexagon"
                                        alt="sample"
                                        fill
                                        sizes="100vw"
                                    />
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}
