'use client';
import {
    Box,
    Grid,
    ThemeProvider,
    Typography,
    useMediaQuery,
} from '@mui/material';
import Image from 'next/image';
import theme from '../../theme';
import { useTranslation } from 'react-i18next';

export default function StorageService() {
    const { t } = useTranslation();
    const storageTheme = theme;
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    theme.typography.h4 = {
        fontSize: '1.2rem',
        '@media (min-width:600px)': {
            fontSize: '1.5rem',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '2.4rem',
        },
    };

    return (
        <ThemeProvider theme={storageTheme}>
            <Grid
                xs={12}
                container
                justifyContent={'space-evenly'}
                alignItems={'center'}
                sx={{
                    backgroundColor: storageTheme.palette.primary.main,
                    py: 12,
                }}
                height={1}
            >
                <Grid
                    item
                    xs={12}
                    md={4}
                    height={1}
                    sx={{
                        display: {
                            xs: 'none',
                            md: 'block',
                        },
                        px: {
                            xs: 0,
                            md: 3,
                            lg: 10,
                        },
                    }}
                >
                    <Box
                        position={'relative'}
                        width={1}
                        sx={{ height: { xs: 0, md: 300, lg: 500 } }}
                    >
                        <Image
                            src={'/images/home/storage/package.png'}
                            alt={'Package image'}
                            fill
                            sizes='100vw'
                        />
                    </Box>
                </Grid>
                <Grid item xs={12} md={4} height={1} px={5}>
                    <Typography
                        variant="h4"
                        sx={{
                            color: '#EFE1CE',
                            textShadow: '0 0 5px black',
                            zIndex: 1,
                            textAlign: 'center',
                            fontWeight: 'bold',
                        }}
                    >
                        {t('home.storageService').toUpperCase()}
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        sx={{
                            color: '#EFE1CE',
                            textShadow: '0 0 5px black',
                            zIndex: 1,
                            textAlign: 'justify',
                            marginTop: 4,
                        }}
                    >
                        {t('home.storageContent1')}
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        sx={{
                            color: '#EFE1CE',
                            textShadow: '0 0 5px black',
                            zIndex: 1,
                            textAlign: 'justify',
                            marginTop: 4,
                        }}
                    >
                        {t('home.storageContent2')}
                    </Typography>
                </Grid>
                <Grid
                    item
                    xs={12}
                    md={4}
                    justifyContent={'center'}
                    container
                    height={1}
                    sx={{
                        display: {
                            xs: 'none',
                            md: 'block',
                        },
                        px: {
                            xs: 0,
                            md: 3,
                            lg: 10,
                        },
                    }}
                >
                    <Box
                        position={'relative'}
                        width={1}
                        sx={{ height: { xs: 0, md: 300, lg: 500 } }}
                    >
                        <Image
                            src={'/images/home/storage/warehouse.png'}
                            alt={'Warehouse image'}
                            fill
                            sizes='100vw'
                        />
                    </Box>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}
