'use client';
import Footer from '@/components/Footer';
import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Grid,
    Paper,
    ThemeProvider,
    Typography,
} from '@mui/material';
import lightImg from '/public/images/introduce/light-within-circle.svg';
import gearImg from '/public/images/introduce/gear.svg';
import toolImg from '/public/images/introduce/tool.svg';
import theme from '../../theme';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';

const ServiceComponent = () => {
    const serviceTheme = theme;
    const { t } = useTranslation();

    const serviceData = [
        {
            title: t('service.rental').toUpperCase(),
            img: gearImg,
            description: t('service.rentalDescription'),
            link: '/dich-vu/chi-tiet',
        },
        {
            title: t('service.install').toUpperCase(),
            img: toolImg,
            description: t('service.installDescription'),
            link: '#',
        },
        {
            title: t('service.afterShow').toUpperCase(),
            img: lightImg,
            description: t('service.afterShowDescription'),
            link: '/dich-vu-sau-trien-lam',
        },
    ];

    return (
        <ThemeProvider theme={serviceTheme}>
            <Grid xs={12} sx={{ backgroundColor: '#fff' }}>
                <Grid
                    xs={12}
                    container
                    justifyContent={'space-evenly'}
                    sx={{ paddingTop: 8, paddingBottom: 8 }}
                >
                    {serviceData.map(
                        ({ title, description, img, link }, index) => (
                            <Grid
                                xs={10}
                                md={3}
                                item
                                justifyContent={'center'}
                                container
                                key={index}
                                sx={{ mt: 1, mb: 1 }}
                            >
                                <Grid xs={12}>
                                    <Paper elevation={24}>
                                        <Card
                                            sx={{
                                                minHeight: 500,
                                                maxHeight: 500,
                                                display: 'flex',
                                                flexDirection: 'column',
                                            }}
                                        >
                                            <CardMedia
                                                sx={{
                                                    height: 140,
                                                    backgroundColor:
                                                        serviceTheme.palette
                                                            .primary.main,
                                                }}
                                                image={img.src}
                                                title="lightImg"
                                                component="img"
                                                style={{
                                                    objectFit: 'contain',
                                                    paddingBottom: 20,
                                                    paddingTop: 20,
                                                }}
                                            />
                                            <CardContent
                                                sx={{ overflow: 'hidden' }}
                                            >
                                                <Typography
                                                    gutterBottom
                                                    variant="h5"
                                                    color={
                                                        serviceTheme.palette
                                                            .primary.main
                                                    }
                                                    fontWeight={'bold'}
                                                    textAlign={'center'}
                                                >
                                                    {title}
                                                </Typography>
                                                <Typography
                                                    variant="h6"
                                                    color={
                                                        serviceTheme.palette
                                                            .primary.main
                                                    }
                                                    textAlign={'justify'}
                                                    sx={{
                                                        overflow: 'hidden',
                                                        textOverflow:
                                                            'ellipsis',
                                                        display: '-webkit-box',
                                                        WebkitLineClamp: 7,
                                                        WebkitBoxOrient: 'vertical'
                                                    }}
                                                >
                                                    {description}
                                                </Typography>
                                            </CardContent>
                                            <CardActions
                                                disableSpacing
                                                sx={{ mt: 'auto' }}
                                            >
                                                <Button size="small">
                                                    <Link href={link}>
                                                        {t('service.detail')}
                                                    </Link>
                                                </Button>
                                            </CardActions>
                                        </Card>
                                    </Paper>
                                </Grid>
                            </Grid>
                        ),
                    )}
                </Grid>
                <Footer />
            </Grid>
        </ThemeProvider>
    );
};

export default ServiceComponent;
