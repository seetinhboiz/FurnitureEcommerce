'use client';
import {
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Grid,
    ThemeProvider,
    Typography,
} from '@mui/material';
import theme from '../../theme';
import { blogs } from '@/app/static';
import { useTranslation } from 'react-i18next';

export default function Blog() {
    const { t } = useTranslation();
    return (
        <ThemeProvider theme={theme}>
            <Grid
                xs={12}
                sx={{
                    paddingBottom: 6,
                    backgroundColor: theme.palette.primary.contrastText,
                }}
            >
                <Typography
                    variant="h4"
                    sx={{
                        color: theme.palette.primary.main,
                        zIndex: 1,
                        textAlign: 'center',
                        fontWeight: 'bold',
                    }}
                >
                    {t('home.provideCreativeSolutionExhibition').toUpperCase()}
                </Typography>
                <Grid
                    xs={12}
                    container
                    justifyContent={'space-evenly'}
                    sx={{ p: 6 }}
                >
                    {blogs.map((blog) => (
                        <Grid
                            item
                            xs={12}
                            md={4}
                            key={blog.id}
                            px={2}
                            mt={{ xs: 4, md: 0 }}
                        >
                            <Card elevation={24}>
                                <CardActionArea>
                                    <CardMedia
                                        sx={{ height: 200 }}
                                        image={blog.img}
                                        title={t(blog.title)}
                                    />
                                    <CardContent sx={{ minHeight: 200 }}>
                                        <Typography
                                            gutterBottom
                                            variant="subtitle1"
                                            fontWeight={'bold'}
                                            component="div"
                                            textAlign={'center'}
                                            color={theme.palette.primary.main}
                                        >
                                            {t(blog.title)}
                                        </Typography>
                                        <Typography
                                            variant="body1"
                                            textAlign={'justify'}
                                            color={theme.palette.primary.main}
                                            sx={{ mt: 4 }}
                                        >
                                            {t(blog.subtitle)}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}
