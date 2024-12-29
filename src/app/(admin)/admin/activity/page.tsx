'use client';
import {
    alpha,
    Box,
    Button,
    createTheme,
    CssBaseline,
    PaletteMode,
    Stack,
    ThemeProvider,
    Typography,
} from '@mui/material';
import SideMenu from '../dashboard/components/SideMenu';
import Navbar from '../dashboard/components/Navbar';
import Header from '../dashboard/components/Header';
import { useEffect, useState } from 'react';
import getDashboardTheme from '../dashboard/theme/getDashboardTheme';
import AddIcon from '@mui/icons-material/Add';
import MainActivity from './component/MainActivity';
import ActivityDialog from './component/ActivityDialog';
import { interceptorHandle } from '@/api/axios.instance';
import { IActivity } from '@/types/activities/activities.interface';

export default function Activity() {
    const [mode, setMode] = useState<PaletteMode>('light');
    const [open, setOpen] = useState(false);
    const [reload, setReload] = useState(true);
    const [type, setType] = useState<'CREATE' | 'UPDATE'>('CREATE');
    const [selectedActivity, setSelectedActivity] = useState<
        IActivity | undefined
    >();
    const [showCustomTheme, setShowCustomTheme] = useState(true);
    const dashboardTheme = createTheme(getDashboardTheme(mode));
    const defaultTheme = createTheme({ palette: { mode } });

    const toggleColorMode = () => {
        setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
    };

    useEffect(() => {
        interceptorHandle();
    }, [interceptorHandle]);

    return (
        <main>
            <ThemeProvider theme={dashboardTheme}>
                <CssBaseline />
                <Box sx={{ display: 'flex' }}>
                    <SideMenu />
                    <Navbar mode={mode} toggleColorMode={toggleColorMode} />
                    {/* Main content */}
                    <Box
                        component="main"
                        sx={(theme) => ({
                            position: { sm: 'relative', md: '' },
                            top: { sm: '48px', md: '0' },
                            height: { sm: 'calc(100vh - 48px)', md: '100vh' },
                            flexGrow: 1,
                            pt: 2,
                            backgroundColor: alpha(
                                theme.palette.background.default,
                                1,
                            ),
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
                            <Header
                                mode={mode}
                                toggleColorMode={toggleColorMode}
                            />
                            <Typography variant="h4">
                                Quản lý hoạt động
                            </Typography>
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'flex-end',
                                    width: '100%',
                                }}
                            >
                                <Button
                                    component="label"
                                    role={undefined}
                                    variant="contained"
                                    tabIndex={-1}
                                    startIcon={<AddIcon />}
                                    color="info"
                                    onClick={() => {
                                        setOpen(true);
                                        setType('CREATE');
                                    }}
                                >
                                    Hoạt động mới
                                </Button>
                            </Box>
                            <MainActivity
                                reload={reload}
                                setReload={setReload}
                                setType={setType}
                                setSelectedActivity={setSelectedActivity}
                                setOpen={setOpen}
                            />
                        </Stack>
                    </Box>
                </Box>
            </ThemeProvider>
            <ActivityDialog
                reload={reload}
                open={open}
                setOpen={setOpen}
                type={type}
                activity={selectedActivity}
                setReload={setReload}
            />
        </main>
    );
}
