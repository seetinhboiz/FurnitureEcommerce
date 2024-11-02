'use client';
import { ApiPathEnum } from '@/api/api.path.enum';
import axios from '@/api/axios.instance';
import { IBanner } from '@/types/products/products.interface';
import { Box, Grid, ThemeProvider } from '@mui/material';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import theme from '../../theme';

interface Props {
    bannerName: string;
}

export default function Banner(props: Props) {
    const [banner, setBanner] = useState<IBanner>();

    const getBanner = () => {
        axios
            .get(`${ApiPathEnum.Banner}`, {
                params: { name: props.bannerName },
            })
            .then((res) => {
                if (res.status === 200) {
                    setBanner(res.data.data[0]);
                }
            });
    };

    useEffect(() => {
        getBanner();
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ backgroundColor: theme.palette.primary.contrastText }}>
                <Grid xs={12}>
                    <Box position={'relative'}>
                        <Image
                            src={
                                banner?.image?.url ?? '/path/default/image.jpg'
                            }
                            alt="Banner"
                            objectFit="contain"
                            layout="responsive"
                            width={1}
                            height={1}
                        />
                    </Box>
                </Grid>
            </Box>
        </ThemeProvider>
    );
}
