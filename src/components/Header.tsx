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
import { styled, useTheme } from '@mui/material/styles';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import logo from '../app/assets/images/logoHeader.jpg';
import LanguageButton from './LanguageButton';

const StyledAppBar = styled(AppBar)({
  width: "100%",
  // backgroundColor: theme.palette.primary.main,
  backgroundColor: theme.palette.primary.contrastText,
  padding: "16px",
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
  fontWeight: "bold",
  textDecoration: "none",
  "&:hover": {
    textDecoration: "underline",
  },
  cursor: "pointer",
  "&.selected": {
    // color: "#3F0071",
    color: theme.palette.primary.contrastText,
    padding: "10px",
    // backgroundColor: "#fff",
    backgroundColor: theme.palette.primary.main,
    borderRadius: "10px",
  },
  fontSize: "1.2rem",
  "@media (max-width: 1010px)": {
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

const sideMenu = [
    {
        name: 'TRANG CHỦ',
        icon: <HomeIcon />,
        path: '/home',
    },
    {
        name: 'SẢN PHẨM',
        icon: <ProductionQuantityLimitsIcon />,
        path: '/products',
    },
    {
        name: 'DỊCH VỤ',
        icon: <MiscellaneousServicesIcon />,
        path: '/service',
    },
    {
        name: 'TUYỂN DỤNG',
        icon: <WorkIcon />,
        path: '/recruitment',
    },
    {
        name: 'HOẠT ĐỘNG',
        icon: <LocalActivityIcon />,
        path: '/activity',
    },
    {
        name: 'CHÍNH SÁCH',
        icon: <PolicyIcon />,
        path: '/policy',
    },
    {
        name: 'LIÊN HỆ',
        icon: <PhoneIcon />,
        path: '/contact',
    },
];

const Header = () => {
    const pathName = usePathname();
    const theme = useTheme();
    const [open, setOpen] = useState(false);
    const [mounted, setMounted] = useState(false);
    const router = useRouter();
    const isScreenLarge = useMediaQuery('(min-width:1010px)');

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
        <StyledAppBar position="static">
            <StyledToolbar>
                <Grid
                    container
                    justifyContent="space-between"
                    alignItems="center"
                    flexWrap={'nowrap'}
                    xs={12}
                >
                    <Grid
                        item
                        xs={6}
                        md={1}
                        container
                        justifyContent={'center'}
                        alignItems={'center'}
                    >
                        <Image
                            src={logo}
                            alt="logo"
                            layout="responsive"
                            style={{ borderRadius: 6 }}
                        />
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
                                    pathName === '/home' && isScreenLarge
                                        ? 'selected'
                                        : ''
                                }
                                onClick={() => router.push('/home')}
                                variant="body1"
                            >
                                TRANG CHỦ
                            </MenuItem>
                        </Grid>
                        <Grid item>
                            <MenuItem
                                className={
                                    pathName === '/products' && isScreenLarge
                                        ? 'selected'
                                        : ''
                                }
                                onClick={() => router.push('/products')}
                                variant="body1"
                            >
                                SẢN PHẨM
                            </MenuItem>
                        </Grid>
                        <Grid item>
                            <MenuItem
                                className={
                                    pathName === '/service' && isScreenLarge
                                        ? 'selected'
                                        : ''
                                }
                                onClick={() => router.push('/service')}
                                variant="body1"
                            >
                                DỊCH VỤ
                            </MenuItem>
                        </Grid>
                        <Grid item>
                            <MenuItem
                                className={
                                    pathName === '/recruitment' && isScreenLarge
                                        ? 'selected'
                                        : ''
                                }
                                onClick={() => router.push('/recruitment')}
                                variant="body1"
                            >
                                TUYỂN DỤNG
                            </MenuItem>
                        </Grid>
                        <Grid item>
                            <MenuItem
                                className={
                                    pathName === '/activity' && isScreenLarge
                                        ? 'selected'
                                        : ''
                                }
                                onClick={() => router.push('/activity')}
                                variant="body1"
                            >
                                HOẠT ĐỘNG
                            </MenuItem>
                        </Grid>
                        <Grid item>
                            <MenuItem
                                className={
                                    pathName === '/policy' && isScreenLarge
                                        ? 'selected'
                                        : ''
                                }
                                onClick={() => router.push('/policy')}
                                variant="body1"
                            >
                                CHÍNH SÁCH
                            </MenuItem>
                        </Grid>
                        <Grid item>
                            <MenuItem
                                className={
                                    pathName === '/contact' && isScreenLarge
                                        ? 'selected'
                                        : ''
                                }
                                onClick={() => router.push('/contact')}
                                variant="body1"
                            >
                                LIÊN HỆ
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
                                    <MenuIcon />
                                </IconButton>
                            )}
                        </Grid>
                    </Grid>
                </Grid>
                {!isScreenLarge && open && (
                    <Drawer
                        sx={{
                            width: drawerWidth,
                            flexShrink: 0,
                            '& .MuiDrawer-paper': {
                                width: drawerWidth,
                            },
                        }}
                        variant="persistent"
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
                                            handleSideMenuItemClick(item.path)
                                        }
                                    >
                                        <ListItemIcon>{item.icon}</ListItemIcon>
                                        <ListItemText primary={item.name} />
                                    </ListItemButton>
                                </ListItem>
                            ))}
                        </List>
                    </Drawer>
                )}
            </StyledToolbar>
        </StyledAppBar>
    );
};

export default Header;
