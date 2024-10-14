import { convertSlug } from '@/api/api.path.enum';
import Fancybox from '@/components/FancyBox';
import {
    Box,
    Card,
    CardContent,
    CardMedia,
    Grid,
    Typography,
    useMediaQuery,
} from '@mui/material';
import { Stack } from '@mui/system';
import Link from 'next/link';
import { CSSProperties } from 'react';
import theme from '../../theme';
import Carousel from 'react-material-ui-carousel';

export default function NewProductComponent({ newProducts }: any) {
    const isDownMdScreen = useMediaQuery(theme.breakpoints.down('md'));
    const sliderItems = isDownMdScreen ? 1 : 3;

    const styleProductTitle: CSSProperties = {
        fontSize: '20px',
        fontWeight: 'bold',
    };

    const showProductsCarousel = () => {
        const renderItems = [];
        if (newProducts)
            for (let i = 0; i < newProducts.length; i += sliderItems) {
                if (i % sliderItems === 0) {
                    renderItems.push(
                        <Grid container xs={12} key={`carousel-item-${i}`}>
                            {newProducts
                                ?.slice(i, i + sliderItems)
                                .map((item: any) => (
                                    <Grid item xs={12} md={4} key={item._id}>
                                        <Link
                                            href={`/san-pham/${convertSlug(item.name)}-${item._id}`}
                                        >
                                            <Card
                                                key={item._id}
                                                variant="outlined"
                                                sx={{
                                                    marginLeft: 2,
                                                    marginRight: 2,
                                                    marginTop: 2,
                                                    marginBottom: 2,
                                                }}
                                            >
                                                <CardMedia
                                                    component="img"
                                                    height="300"
                                                    image={item.images[0].url}
                                                    alt={item.name}
                                                />
                                                <CardContent>
                                                    <Stack
                                                        direction={'row'}
                                                        justifyContent={
                                                            'center'
                                                        }
                                                    >
                                                        <Typography
                                                            sx={
                                                                styleProductTitle
                                                            }
                                                        >
                                                            {item.name}
                                                        </Typography>
                                                    </Stack>
                                                </CardContent>
                                            </Card>
                                        </Link>
                                    </Grid>
                                ))}
                        </Grid>,
                    );
                }
            }
        return renderItems;
    };

    return (
        <Grid item container xs={12}>
            <Grid
                item
                container
                xs={12}
                sx={{
                    backgroundColor: theme.palette.primary.main,
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <Box width={1} py={2}>
                    <Fancybox
                        options={{
                            Carousel: {
                                infinite: false,
                            },
                        }}
                    >
                        <Carousel>{showProductsCarousel()}</Carousel>
                    </Fancybox>
                </Box>
            </Grid>
        </Grid>
    );
}
