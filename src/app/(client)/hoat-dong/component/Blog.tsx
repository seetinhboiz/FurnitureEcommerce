import {
    Box,
    Card,
    CardActionArea,
    Divider,
    Grid,
    Paper,
    ThemeProvider,
    Typography,
} from '@mui/material';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import theme from '../../theme';

export default function Blog({ directionImg, data, type }: any) {
    const blogTheme = theme;
    const { t } = useTranslation();

    return (
        <ThemeProvider theme={blogTheme}>
            <Paper elevation={24} sx={{ mt: 4, mb: 4 }}>
                <CardActionArea>
                    <Card>
                        <Grid
                            xs={12}
                            container
                            justifyContent={'space-evenly'}
                            sx={{ p: 2 }}
                            minHeight={'400px'}
                        >
                            <Grid
                                xs={12}
                                md={4}
                                item
                                sx={{
                                    borderRadius: 8,
                                    overflow: 'hidden',
                                    order: directionImg === 'right' ? 1 : 0,
                                }}
                            >
                                <Box
                                    sx={{
                                        position: 'relative',
                                        width: 1,
                                        height: 1,
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}
                                >
                                    <Image
                                        src={
                                            type === 'PRODUCT'
                                                ? data.images[0].url
                                                : data.img
                                        }
                                        alt="Image"
                                        height={1}
                                        width={1}
                                        layout="responsive"
                                        objectFit="cover"
                                        style={{
                                            objectFit: 'contain',
                                            maxHeight: '300px',
                                        }}
                                    />
                                </Box>
                            </Grid>
                            <Grid
                                md={6}
                                xs={12}
                                item
                                sx={{ order: directionImg === 'right' ? 0 : 1 }}
                            >
                                <Typography
                                    variant="h5"
                                    color={blogTheme.palette.primary.main}
                                    textAlign={'center'}
                                >
                                    {type === 'PRODUCT'
                                        ? t(`${data.name}`).toUpperCase()
                                        : t(`${data.title}`).toUpperCase()}
                                </Typography>
                                <Divider />
                                <Typography
                                    variant="h5"
                                    color={blogTheme.palette.primary.main}
                                    sx={{
                                        fontWeight: 'lighter',
                                        textAlign: 'justify',
                                        marginBottom: 2,
                                    }}
                                >
                                    {type === 'PRODUCT'
                                        ? t(`${data.description}`)
                                        : t(`${data.subtitle}`)}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Card>
                </CardActionArea>
            </Paper>
        </ThemeProvider>
    );
}
