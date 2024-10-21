'use client';
import { ApiPathEnum } from '@/api/api.path.enum';
import axios from '@/api/axios.instance';
import { IBanner } from '@/types/products/products.interface';
import EditIcon from '@mui/icons-material/Edit';
import {
    alpha,
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    createTheme,
    Grid,
    PaletteMode,
    Stack,
    Typography,
} from '@mui/material';
import { useEffect, useState } from 'react';
import Header from '../dashboard/components/Header';
import Navbar from '../dashboard/components/Navbar';
import SideMenu from '../dashboard/components/SideMenu';
import getDashboardTheme from '../dashboard/theme/getDashboardTheme';
import BannerDialog from './component/BannerDialog';

export default function BannerEdit() {
    const [mode, setMode] = useState<PaletteMode>('light');
    const [open, setOpen] = useState(false);
    const [reload, setReload] = useState(true);
    const [banners, setBanners] = useState<IBanner[]>();
    const [selectedBanner, setSelectedBanner] = useState<IBanner>();
    const dashboardTheme = createTheme(getDashboardTheme(mode));

    const getBanner = (name: string) => {
        axios.get(`${ApiPathEnum.Banner}`, { params: { name } }).then((res) => {
            if (res.status === 200) {
                setBanners(res.data.data);
            }
        });
    };

    const toggleColorMode = () => {
        setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
    };

    useEffect(() => {
        getBanner('');
    }, []);

    return (
        <Box sx={{ display: 'flex' }}>
            <SideMenu />
            <Navbar mode={mode} toggleColorMode={toggleColorMode} />
            {/* Main content */}
            <Box
                component="main"
                sx={(theme) => ({
                    position: { sm: 'relative', md: '' },
                    top: { sm: '48px', md: '0' },
                    height: {
                        sm: 'calc(100vh - 48px)',
                        md: '100vh',
                    },
                    flexGrow: 1,
                    pt: 2,
                    backgroundColor: alpha(theme.palette.background.default, 1),
                    overflow: 'auto',
                })}
            >
                <Stack
                    spacing={2}
                    sx={{
                        alignItems: 'center',
                        mx: 3,
                        pb: 10,
                    }}
                >
                    <Header mode={mode} toggleColorMode={toggleColorMode} />
                    <Typography variant="h4">Quản lý Banner</Typography>
                    {/* <MainGrid /> */}
                    <Box>
                        <Grid
                            container
                            justifyContent="center"
                            alignItems="center"
                            sx={{ mt: 5 }}
                        >
                            <Grid xs={10} item>
                                {banners?.map((banner) => (
                                    <Card sx={{ maxWidth: '100%', mb: 4 }} key={banner._id}>
                                        <CardMedia
                                            component="img"
                                            alt="green iguana"
                                            // height="100%"
                                            image={banner?.image.url}
                                        />
                                        <CardContent>
                                            <Typography
                                                gutterBottom
                                                variant="h5"
                                                component="div"
                                            >
                                                {banner.name === 'homeBannerImg'
                                                    ? 'Trang chủ Banner'
                                                    : banner.name ===
                                                        'recruitmentBannerImg'
                                                      ? 'Tuyển dụng Banner'
                                                      : banner.name ===
                                                          'productBanner'
                                                        ? 'Sản phẩm Banner'
                                                        : 'Chính sách Banner'}
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Button
                                                size="small"
                                                startIcon={<EditIcon />}
                                                onClick={() => {
                                                    setSelectedBanner(banner);
                                                    setOpen(true);
                                                }}
                                            >
                                                Edit Banner
                                            </Button>
                                        </CardActions>
                                    </Card>
                                ))}
                            </Grid>
                        </Grid>
                        <BannerDialog
                            open={open}
                            reload={reload}
                            setOpen={setOpen}
                            setReload={setReload}
                            banner={selectedBanner}
                            getBanner={getBanner}
                        />
                    </Box>
                </Stack>
            </Box>
        </Box>
    );
}
