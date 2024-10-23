'use client';
import theme from '@/app/(client)/theme';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import HomeIcon from '@mui/icons-material/Home';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';
import MenuIcon from '@mui/icons-material/Menu';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import PhoneIcon from '@mui/icons-material/Phone';
import PolicyIcon from '@mui/icons-material/Policy';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import WorkIcon from '@mui/icons-material/Work';
import {
    AppBar,
    Box,
    Divider,
    Drawer,
    Grid,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Toolbar,
    Typography,
    useMediaQuery,
} from '@mui/material';
import { styled, ThemeProvider } from '@mui/material/styles';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import LanguageButton from './LanguageButton';
import { useTranslation } from 'react-i18next';

const StyledAppBar = styled(AppBar)({
    width: '100%',
    backgroundColor: theme.palette.primary.contrastText,
    padding: '16px',
    zIndex: 1,
});

const StyledToolbar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between',
    height: '113px',
});

const MenuItem = styled(Typography)({
    // color: "white",
    color: theme.palette.primary.main,
    fontWeight: 'bold',
    textDecoration: 'none',
    '&:hover': {
        textDecoration: 'underline',
    },
    cursor: 'pointer',
    '&.selected': {
        // color: "#3F0071",
        color: theme.palette.primary.contrastText,
        padding: '10px',
        // backgroundColor: "#fff",
        backgroundColor: theme.palette.primary.main,
        borderRadius: '10px',
    },
    fontSize: '1.2rem',
    '@media (max-width: 1010px)': {
        fontSize: 0,
    },
});

// Side menu
const drawerWidth = 240;

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
}));

const Header = () => {
    const { t } = useTranslation();
    const pathName = usePathname();
    const [open, setOpen] = useState(false);
    const [mounted, setMounted] = useState(false);
    const router = useRouter();
    const isScreenLarge = useMediaQuery('(min-width:1010px)');

    const sideMenu = [
        {
            name: t('header.home').toUpperCase(),
            icon: <HomeIcon />,
            path: '/trang-chu',
        },
        {
            name: t('header.product').toUpperCase(),
            icon: <ProductionQuantityLimitsIcon />,
            path: '/san-pham',
        },
        {
            name: t('header.service').toUpperCase(),
            icon: <MiscellaneousServicesIcon />,
            path: '/dich-vu',
        },
        {
            name: t('header.recruit').toUpperCase(),
            icon: <WorkIcon />,
            path: '/tuyen-dung',
        },
        {
            name: t('header.activity').toUpperCase(),
            icon: <LocalActivityIcon />,
            path: '/hoat-dong',
        },
        {
            name: t('header.policy').toUpperCase(),
            icon: <PolicyIcon />,
            path: '/chinh-sach',
        },
        {
            name: t('header.contact').toUpperCase(),
            icon: <PhoneIcon />,
            path: '/lien-he',
        },
    ];

    useEffect(() => {
        setMounted(true);
    }, []);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const handleSideMenuItemClick = (path: any) => {
        router.push(path);
        handleDrawerClose();
    };

    if (!mounted) return null;

    return (
        <StyledAppBar position="sticky">
            <StyledToolbar>
                <ThemeProvider theme={theme}>
                    <Grid
                        container
                        justifyContent="space-between"
                        alignItems="center"
                        flexWrap={'nowrap'}
                        xs={12}
                    >
                        <Grid item xs={6} md={1} height={140}>
                            <Box
                                width={140}
                                height={1}
                                position={'relative'}
                                sx={{ cursor: 'pointer' }}
                                onClick={() => {
                                    router.push('/');
                                }}
                            >
                                <Image
                                    src={'/images/logoHeader.jpg'}
                                    alt="logo"
                                    fill
                                />
                            </Box>
                        </Grid>
                        <Grid
                            item
                            container
                            spacing={5}
                            alignItems={'center'}
                            justifyContent={'center'}
                            xs={9}
                        >
                            <Grid item>
                                <MenuItem
                                    className={
                                        pathName === '/trang-chu' &&
                                        isScreenLarge
                                            ? 'selected'
                                            : ''
                                    }
                                    onClick={() => router.push('/trang-chu')}
                                    variant="body1"
                                >
                                    {t('header.home').toUpperCase()}
                                </MenuItem>
                            </Grid>
                            <Grid item>
                                <MenuItem
                                    className={
                                        pathName === '/san-pham' &&
                                        isScreenLarge
                                            ? 'selected'
                                            : ''
                                    }
                                    onClick={() => router.push('/san-pham')}
                                    variant="body1"
                                >
                                    {t('header.product').toUpperCase()}
                                </MenuItem>
                            </Grid>
                            <Grid item>
                                <MenuItem
                                    className={
                                        pathName === '/dich-vu' && isScreenLarge
                                            ? 'selected'
                                            : ''
                                    }
                                    onClick={() => router.push('/dich-vu')}
                                    variant="body1"
                                >
                                    {t('header.service').toUpperCase()}
                                </MenuItem>
                            </Grid>
                            <Grid item>
                                <MenuItem
                                    className={
                                        pathName === '/tuyen-dung' &&
                                        isScreenLarge
                                            ? 'selected'
                                            : ''
                                    }
                                    onClick={() => router.push('/tuyen-dung')}
                                    variant="body1"
                                >
                                    {t('header.recruit').toUpperCase()}
                                </MenuItem>
                            </Grid>
                            <Grid item>
                                <MenuItem
                                    className={
                                        pathName === '/hoat-dong' &&
                                        isScreenLarge
                                            ? 'selected'
                                            : ''
                                    }
                                    onClick={() => router.push('/hoat-dong')}
                                    variant="body1"
                                >
                                    {t('header.activity').toUpperCase()}
                                </MenuItem>
                            </Grid>
                            <Grid item>
                                <MenuItem
                                    className={
                                        pathName === '/chinh-sach' &&
                                        isScreenLarge
                                            ? 'selected'
                                            : ''
                                    }
                                    onClick={() => router.push('/chinh-sach')}
                                    variant="body1"
                                >
                                    {t('header.policy').toUpperCase()}
                                </MenuItem>
                            </Grid>
                            <Grid item>
                                <MenuItem
                                    className={
                                        pathName === '/lien-he' && isScreenLarge
                                            ? 'selected'
                                            : ''
                                    }
                                    onClick={() => router.push('/lien-he')}
                                    variant="body1"
                                >
                                    {t('header.contact').toUpperCase()}
                                </MenuItem>
                            </Grid>
                        </Grid>
                        <Grid
                            item
                            xs={6}
                            md={!isScreenLarge && !open ? 2 : 1}
                            container
                            justifyContent={!open ? 'space-between' : 'right'}
                            alignItems={'center'}
                        >
                            <Grid item xs={!isScreenLarge && !open ? 6 : 12}>
                                <LanguageButton />
                            </Grid>
                            <Grid item xs={4}>
                                {!isScreenLarge && (
                                    <IconButton
                                        color="inherit"
                                        aria-label="open drawer"
                                        edge="end"
                                        onClick={handleDrawerOpen}
                                        sx={{
                                            ...(open && { display: 'none' }),
                                            marginLeft: 2,
                                        }}
                                    >
                                        <MenuIcon
                                            sx={{
                                                color: theme.palette.primary
                                                    .main,
                                            }}
                                        />
                                    </IconButton>
                                )}
                            </Grid>
                        </Grid>
                    </Grid>
                    {!isScreenLarge && open && (
                        <Drawer
                            sx={{
                                position: 'absolute',
                                '& .MuiDrawer-paper': {
                                    width: drawerWidth,
                                    position: 'absolute',
                                },
                            }}
                            variant="temporary"
                            anchor="right"
                            open={open}
                        >
                            <DrawerHeader>
                                <IconButton onClick={handleDrawerClose}>
                                    {theme.direction === 'rtl' ? (
                                        <ChevronLeftIcon />
                                    ) : (
                                        <ChevronRightIcon />
                                    )}
                                </IconButton>
                            </DrawerHeader>
                            <Divider />
                            <List>
                                {sideMenu.map((item, index) => (
                                    <ListItem key={index} disablePadding>
                                        <ListItemButton
                                            onClick={() =>
                                                handleSideMenuItemClick(
                                                    item.path,
                                                )
                                            }
                                        >
                                            <ListItemIcon>
                                                {item.icon}
                                            </ListItemIcon>
                                            <ListItemText primary={item.name} />
                                        </ListItemButton>
                                    </ListItem>
                                ))}
                            </List>
                        </Drawer>
                    )}
                </ThemeProvider>
            </StyledToolbar>
        </StyledAppBar>
    );
};

export default Header;
