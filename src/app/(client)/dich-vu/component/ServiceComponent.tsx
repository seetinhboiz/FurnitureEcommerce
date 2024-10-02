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
import lightImg from '../../../assets/images/introduce/light.png';
import settingImg from '../../../assets/images/introduce/setting.png';
import toolImg from '../../../assets/images/introduce/tool.png';
import theme from '../../theme';
import { useTranslation } from 'react-i18next';

const ServiceComponent = () => {
    const serviceTheme = theme;
    const { t } = useTranslation();
    const serviceData = [
        {
            title: t('service.rental').toUpperCase(),
            img: settingImg,
            description: t('service.rentalDescription'),
        },
        {
            title: t('service.install').toUpperCase(),
            img: toolImg,
            description: t('service.installDescription'),
        },
        {
            title: t('service.afterShow').toUpperCase(),
            img: lightImg,
            description: t('service.afterShowDescription'),
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
                    {serviceData.map(({ title, description, img }, index) => (
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
                                                    serviceTheme.palette.primary
                                                        .main,
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
                                        <CardContent>
                                            <Typography
                                                gutterBottom
                                                variant="h4"
                                                component="div"
                                                color={
                                                    serviceTheme.palette.primary
                                                        .main
                                                }
                                                fontWeight={'bold'}
                                                textAlign={'center'}
                                                fontFamily={'Inika'}
                                            >
                                                {title}
                                            </Typography>
                                            <Typography
                                                variant="h6"
                                                color={
                                                    serviceTheme.palette.primary
                                                        .main
                                                }
                                                textAlign={'justify'}
                                                fontFamily={'Inika'}
                                                sx={{
                                                    display: '-webkit-box',
                                                    WebkitLineClamp: 12,
                                                    WebkitBoxOrient: 'vertical',
                                                    overflow: 'hidden',
                                                    textOverflow: 'ellipsis',
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
                                                {t('service.detail')}
                                            </Button>
                                        </CardActions>
                                    </Card>
                                </Paper>
                            </Grid>
                        </Grid>
                    ))}
                </Grid>
                <Footer />
            </Grid>
        </ThemeProvider>
    );
};

export default ServiceComponent;
