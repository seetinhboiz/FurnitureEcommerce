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
                                    overflow: 'hidden',
                                    order: directionImg === 'right' ? 1 : 0,
                                }}
                            >
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        position: 'relative',
                                        width: 1,
                                        height: 1,
                                        borderRadius: 20,
                                    }}
                                >
                                    <Image
                                        src={
                                            type === 'PRODUCT'
                                                ? data.images[0].url
                                                : data.images[0].url
                                        }
                                        alt="Image"
                                        layout="responsive"
                                        height={1}
                                        width={1}
                                        style={{
                                            objectFit: 'contain',
                                            maxHeight: 300,
                                            width: '100%',
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
                                    py={1}
                                    variant="h5"
                                    fontWeight={700}
                                    color={blogTheme.palette.primary.main}
                                    textAlign={'center'}
                                >
                                    {type === 'PRODUCT'
                                        ? t(`${data.name}`).toUpperCase()
                                        : data.name.toUpperCase()}
                                </Typography>
                                <Divider />
                                <Typography
                                    variant="h5"
                                    color={blogTheme.palette.primary.main}
                                    sx={{
                                        fontWeight: 'lighter',
                                        textAlign: 'justify',
                                        py: 2,
                                    }}
                                >
                                    {type === 'PRODUCT'
                                        ? t(`${data.description}`)
                                        : data?.description.slice(
                                              0,
                                              data?.description.indexOf('.'),
                                          )}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Card>
                </CardActionArea>
            </Paper>
        </ThemeProvider>
    );
}
