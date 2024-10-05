'use client';
import { ApiPathEnum } from '@/api/api.path.enum';
import axios from '@/api/axios.instance';
import { IBanner } from '@/types/products/products.interface';
import { Box, Grid, ThemeProvider, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import theme from '../../theme';

export default function Banner() {
    const [banner, setBanner] = useState<IBanner>();

    const getBanner = (name: string) => {
        axios.get(`${ApiPathEnum.Banner}`, { params: { name } }).then((res) => {
            if (res.status === 200) {
                setBanner(res.data.data[0]);
            }
        });
    };

    useEffect(() => {
        getBanner('recruitmentBannerImg');
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <Grid container>
                <Box width="100%">
                    <Grid
                        container
                        sx={{
                            backgroundImage: `url(${banner?.image.url})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            paddingTop: { xs: 6, sm: 10 },
                            paddingBottom: { xs: 6, sm: 10 },
                            minHeight: 500
                        }}
                    ></Grid>
                </Box>
            </Grid>
        </ThemeProvider>
    );
}
