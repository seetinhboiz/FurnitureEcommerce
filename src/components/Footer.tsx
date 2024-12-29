'use client';

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Box, Divider, Grid, Stack, Typography } from '@mui/material';
import Link from 'next/link';
import { MyGoogleMap } from './GoogleMap';
import logo from '../app/assets/images/footerLogo.png';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Footer() {
    const router = useRouter();

    const linkProperty = {
        cursor: 'pointer',
        '&:hover': {
            fontWeight: 800,
        },
    };

    return (
        <Box>
            <Grid
                xs={12}
                container
                justifyContent={'center'}
                sx={{
                    backgroundColor: '#EFE1CE',
                    color: '#401d59',
                    paddingBottom: 5,
                    paddingTop: 5,
                }}
            >
                <Grid xs={10} item container>
                    <Grid item xs={12}>
                        <Divider>
                            <Stack
                                direction="row"
                                divider={<Box sx={{ width: 24 }} />}
                                justifyContent="center"
                                alignItems="center"
                            >
                                <Link
                                    href={
                                        'https://www.facebook.com/profile.php?id=61563992245614'
                                    }
                                    target="_blank"
                                >
                                    <Box
                                        sx={{
                                            cursor: 'pointer',
                                            transition: 'all 0.2 ease',
                                            '&:hover': {
                                                transform: 'scale(1.2)',
                                                opacity: 0.8,
                                            },
                                        }}
                                    >
                                        <FacebookIcon />
                                    </Box>
                                </Link>
                                <Box
                                    sx={{
                                        cursor: 'pointer',
                                        transition: 'all 0.2 ease',
                                        '&:hover': {
                                            transform: 'scale(1.2)',
                                            opacity: 0.8,
                                        },
                                    }}
                                >
                                    <InstagramIcon />
                                </Box>
                                <Box
                                    sx={{
                                        cursor: 'pointer',
                                        transition: 'all 0.2 ease',
                                        '&:hover': {
                                            transform: 'scale(1.2)',
                                            opacity: 0.8,
                                        },
                                    }}
                                >
                                    <LinkedInIcon />
                                </Box>
                                <Box
                                    sx={{
                                        cursor: 'pointer',
                                        transition: 'all 0.2 ease',
                                        '&:hover': {
                                            transform: 'scale(1.2)',
                                            opacity: 0.8,
                                        },
                                    }}
                                >
                                    <XIcon />
                                </Box>
                                <Link
                                    href={
                                        'https://www.youtube.com/@Hangtotgiatotnhat'
                                    }
                                    target="_blank"
                                >
                                    <Box
                                        sx={{
                                            cursor: 'pointer',
                                            transition: 'all 0.2 ease',
                                            '&:hover': {
                                                transform: 'scale(1.2)',
                                                opacity: 0.8,
                                            },
                                        }}
                                    >
                                        <YouTubeIcon />
                                    </Box>
                                </Link>
                            </Stack>
                        </Divider>
                        <Grid
                            xs={12}
                            container
                            justifyContent={'center'}
                            sx={{ mt: 4, mb: 4 }}
                        >
                            <Box
                                position={'relative'}
                                height={'5rem'}
                                width={'14rem'}
                            >
                                <Image
                                    src={logo}
                                    alt="logo"
                                    fill
                                    sizes="100%"
                                />
                            </Box>
                        </Grid>
                        <Grid
                            xs={12}
                            container
                            item
                            justifyContent={'space-evenly'}
                        >
                            <Grid
                                container
                                justifyContent={'space-evenly'}
                                spacing={4}
                            >
                                <Grid item xs={12} md={4}>
                                    <Typography
                                        textAlign={'left'}
                                        variant="h6"
                                        gutterBottom
                                        sx={{ fontWeight: 'bold' }}
                                    >
                                        THÔNG TIN LIÊN HỆ
                                    </Typography>
                                    <Stack direction={'row'} spacing={1}>
                                        <Typography
                                            component="span"
                                            fontWeight="bold"
                                            whiteSpace={'nowrap'}
                                            variant="body2"
                                        >
                                            Địa chỉ:
                                        </Typography>
                                        <Stack>
                                            <Typography
                                                component="span"
                                                variant="body2"
                                            >
                                                <b>Cơ sở 1:</b> 36 Đường số 2,
                                                KDC Cityland Park Hill Phường
                                                10, Gò Vấp, TPHCM
                                            </Typography>
                                            <Typography
                                                component="span"
                                                variant="body2"
                                            >
                                                <b>Cơ sở 2:</b> 799 Đ. Nguyễn
                                                Văn Linh, Tân Phú, Quận 7, TPHCM
                                            </Typography>
                                        </Stack>
                                    </Stack>
                                    <Typography variant="body2">
                                        <Box component="span" fontWeight="bold">
                                            Thời gian làm việc:
                                        </Box>{' '}
                                        Thứ 2 - Thứ 6, 8h00 - 17h00
                                    </Typography>
                                    <Typography variant="body2">
                                        <Box component="span" fontWeight="bold">
                                            Hotline:
                                        </Box>{' '}
                                        <Link href="tel:+84903170150">
                                            +84903170150
                                        </Link>
                                    </Typography>
                                    <Typography variant="body2">
                                        <Box component="span" fontWeight="bold">
                                            Email:
                                        </Box>{' '}
                                        <Link href="mailto:epioneervn@gmail.com">
                                            epioneervn@gmail.com
                                        </Link>
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} md={4}>
                                    <Typography
                                        textAlign={'left'}
                                        variant="h6"
                                        gutterBottom
                                        sx={{ fontWeight: 'bold' }}
                                    >
                                        Về EPIONEER
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        onClick={() => router.push('/san-pham')}
                                        sx={linkProperty}
                                    >
                                        Sản phẩm hàng hoá, thương mại.
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        onClick={() =>
                                            router.push('/dich-vu/chi-tiet')
                                        }
                                        sx={linkProperty}
                                    >
                                        Dịch vụ cho thuê trang thiết bị hội chợ,
                                        triển lãm.
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        sx={linkProperty}
                                    >
                                        Dịch vụ thi công lắp đặt đèn chiếu sáng,
                                        nguồn điện.
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        onClick={() =>
                                            router.push('dich-vu-sau-trien-lam')
                                        }
                                        sx={linkProperty}
                                    >
                                        Dịch vụ sau triển lãm.
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} md={4}>
                                    <Grid xs={12} md={12}>
                                        <MyGoogleMap />
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
}
