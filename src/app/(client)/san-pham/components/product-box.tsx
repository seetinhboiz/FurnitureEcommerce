import { convertSlug } from '@/api/api.path.enum';
import {
    Box,
    Card,
    CardContent,
    CardMedia,
    Stack,
    Typography,
} from '@mui/material';
import Link from 'next/link';
import { CSSProperties } from 'react';
import theme from '../../theme';

const ProductBox = ({ data, type }: { data: any; type: any }) => {
    const styleProductTitle: CSSProperties = {
        fontSize: '20px',
        fontWeight: 'bold',
    };

    return (
        <Link
            href={
                type === 'product'
                    ? `/san-pham/${convertSlug(data.name)}-${data._id}`
                    : `/tat-ca-san-pham?category=${convertSlug(data.name)}-${data._id}`
            }
        >
            <Card
                key={data.name}
                variant="outlined"
                sx={{
                    '&:hover': {
                        backgroundColor: theme.palette.primary.main,
                        color: theme.palette.primary.contrastText,
                        cursor: 'pointer',
                    },
                    '&:hover img': {
                        transition: 'transform 0.5s ease-in-out',
                        transform: 'scale(1.1)',
                    },
                }}
            >
                <CardContent>
                    <Box sx={{ overflow: 'hidden' }} height="300px">
                        <CardMedia
                            component="img"
                            image={
                                type === 'product'
                                    ? data.images[0].url
                                    : data.image.url
                            }
                            alt={data.alt}
                            height={'100%'}
                            width={1}
                        />
                    </Box>
                    <Stack direction={'row'} justifyContent={'center'} mt={2}>
                        <Typography sx={styleProductTitle}>
                            {data.name}
                        </Typography>
                    </Stack>
                </CardContent>
            </Card>
        </Link>
    );
};

export default ProductBox;
