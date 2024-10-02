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
                        }}
                    >
                        <Grid item xs={6} container justifyContent={'center'}>
                            <Typography
                                variant="h6"
                                color={theme.palette.primary.main}
                                textAlign={'center'}
                                sx={{
                                    fontSize: { xs: '1rem', sm: '1.25rem' },
                                }}
                            >
                                Khám phá những cơ hội nghề nghiệp thú vị tại
                                ePioneer thúc đẩy tính toàn diện và phát triển
                                cá nhân
                            </Typography>
                            <Grid item xs={12}>
                                <Typography
                                    variant="h4"
                                    color={theme.palette.primary.main}
                                    textAlign={'center'}
                                    fontWeight={'bold'}
                                    sx={{
                                        paddingTop: { xs: 2, sm: 4 },
                                        paddingBottom: { xs: 2, sm: 4 },
                                        fontSize: {
                                            xs: '1.2rem',
                                            sm: '2.125rem',
                                        },
                                    }}
                                >
                                    MỞ KHOÁ TIỀM NĂNG CỦA BẠN
                                </Typography>
                            </Grid>
                            <Typography
                                variant="h6"
                                color={theme.palette.primary.main}
                                textAlign={'center'}
                                sx={{
                                    fontSize: { xs: '1rem', sm: '1.25rem' },
                                }}
                            >
                                Hãy tham gia cùng chúng tôi và phát huy hết tiềm
                                năng của bạn trong một môi trường năng động và
                                hỗ trợ.
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>
            </Grid>
        </ThemeProvider>
    );
}
