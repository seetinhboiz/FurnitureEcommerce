import { createTheme, responsiveFontSizes } from '@mui/material';

const theme = responsiveFontSizes(
    createTheme({
        palette: {
            primary: {
                main: '#401D59',
                contrastText: '#fff',
            },
            secondary: {
                main: '#E9F1FA',
                contrastText: '#fff',
            },
            error: {
                main: '#ff4c51',
                light: '#ff4c51',
                contrastText: '#fff',
            },
            success: {
                main: '#56ca00',
                light: '#56ca00',
                contrastText: '#fff',
            },
            warning: {
                main: '#ffb400',
                light: '#ffb400',
                contrastText: '#fff',
            },
        },
        typography: {
            fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
            h1: {
                fontSize: '3rem',
                '@media (max-width:1200px)': {
                    fontSize: '3rem',
                },
                '@media (max-width:600px)': {
                    fontSize: '2rem',
                },
            },
            h2: {
                fontSize: '2.5rem',
                '@media (max-width:1200px)': {
                    fontSize: '2.5rem',
                },
                '@media (max-width:600px)': {
                    fontSize: '1.5rem',
                },
            },
            h3: {
                fontSize: '2.25rem',
                '@media (max-width:1200px)': {
                    fontSize: '2.25rem',
                },
                '@media (max-width:600px)': {
                    fontSize: '1.75rem',
                },
            },
            h4: {
                fontSize: '2rem',
                '@media (max-width:1200px)': {
                    fontSize: '2rem',
                },
                '@media (max-width:600px)': {
                    fontSize: '1.5rem',
                },
            },
            h6: {
                fontSize: '1.25rem',
                '@media (max-width:1200px)': {
                    fontSize: '1.25rem',
                },
                '@media (max-width:600px)': {
                    fontSize: '0.875rem',
                },
            },
            body1: {
                fontSize: '1.2rem',
                '@media (max-width:1200px)': {
                    fontSize: '0.875rem',
                },
                '@media (max-width:600px)': {
                    fontSize: '0.75rem',
                },
            },
            body2: {
                fontSize: '0.875rem',
                '@media (max-width:1200px)': {
                    fontSize: '0.75rem',
                },
                '@media (max-width:600px)': {
                    fontSize: '0.625rem',
                },
            },
            subtitle1: {
                fontSize: '1.4rem',
                '@media (max-width:1200px)': {
                    fontSize: '0.875rem',
                },
                '@media (max-width:600px)': {
                    fontSize: '0.75rem',
                },
            },
            subtitle2: {
                fontSize: '1.2rem',
                '@media (max-width:1200px)': {
                    fontSize: '0.875rem',
                },
                '@media (max-width:600px)': {
                    fontSize: '0.75rem',
                },
            },
        },
        components: {
            MuiCssBaseline: {
                styleOverrides: {
                    body: {
                        scrollbarColor: '#6b6b6b',
                        '&::-webkit-scrollbar, & *::-webkit-scrollbar': {
                            backgroundColor: '#fff',
                            width: 8,
                            height: 8,
                        },
                        '&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb':
                            {
                                borderRadius: 8,
                                backgroundColor: '#e2e2e2',
                                minHeight: 24,
                            },
                        '&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus':
                            {
                                backgroundColor: '#959595',
                            },
                        '&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active':
                            {
                                backgroundColor: '#959595',
                            },
                        '&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover':
                            {
                                backgroundColor: '#959595',
                            },
                        '&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner':
                            {
                                backgroundColor: '#2b2b2b',
                            },
                    },
                },
            },
        },
    }),
);

export default theme;
