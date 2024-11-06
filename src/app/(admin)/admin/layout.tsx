'use client';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import getDashboardTheme from './dashboard/theme/getDashboardTheme';
import { ToastContainer } from 'react-toastify';

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const theme = createTheme(getDashboardTheme('light'));
    return (
        <main>
            <ThemeProvider theme={theme}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <CssBaseline />
                    {children}
                </LocalizationProvider>
            </ThemeProvider>
            <ToastContainer />
        </main>
    );
}
