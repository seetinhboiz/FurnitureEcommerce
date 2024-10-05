'use client';
import { ApiPathEnum } from '@/api/api.path.enum';
import axios from '@/api/axios.instance';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import { LoadingButton } from '@mui/lab';
import {
    Avatar,
    Box,
    Button,
    Checkbox,
    createTheme,
    CssBaseline,
    FormControlLabel,
    FormHelperText,
    Grid,
    Link,
    Paper,
    TextField,
    ThemeProvider,
    Typography,
} from '@mui/material';
import { useCookies } from 'next-client-cookies';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';

function Copyright(props: any) {
    return (
        <Typography
            variant="body2"
            color="text.secondary"
            align="center"
            {...props}
        >
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Epioneer
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const defaultTheme = createTheme();

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    // Validate inputs
    const isUsernameValid = username.trim() !== '';
    const isPasswordValid = password.trim() !== '';

    const [usernameError, setUsernameError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    const router = useRouter();
    const cookies = useCookies();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        setUsernameError(!isUsernameValid);
        setPasswordError(!isPasswordValid);

        const data = new FormData(event.currentTarget);
        const username = data.get('username') as string;
        const password = data.get('password') as string;
        try {
            setLoading(true);

            const response = await axios.post(ApiPathEnum.Login, {
                username,
                password,
            });

            if (response.status === 200 || response.status === 201) {
                const user = response.data;
                cookies.set('token', user.data.accessToken);
                cookies.set('username', user.data.username);

                toast.success('Login successful');
                router.push('/admin');
            } else {
                toast.error('Login failed');
            }
        } catch (error) {
            toast.error('Login failed');
        } finally {
            setLoading(false);
        }
    };

    return (
        <ThemeProvider theme={defaultTheme}>
            <Grid container component="main" sx={{ height: '100vh' }}>
                <CssBaseline />
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={7}
                    sx={{
                        backgroundImage:
                            'url("https://www.ieltsvietop.vn/wp-content/uploads/2023/08/Furniture-la-gi.jpg")',
                        backgroundColor: (t) =>
                            t.palette.mode === 'light'
                                ? t.palette.grey[50]
                                : t.palette.grey[900],
                        backgroundSize: 'cover',
                        backgroundPosition: 'left',
                    }}
                />
                <Grid
                    item
                    xs={12}
                    sm={8}
                    md={5}
                    component={Paper}
                    elevation={6}
                    square
                >
                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <LockOpenIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Đăng nhập
                        </Typography>
                        <Box
                            component="form"
                            noValidate
                            onSubmit={handleSubmit}
                            sx={{ mt: 1 }}
                        >
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="username"
                                label="Tên đăng nhập"
                                name="username"
                                autoComplete="username"
                                autoFocus
                                value={username}
                                onChange={(event) =>
                                    setUsername(event.target.value)
                                }
                            />
                            {usernameError && (
                                <FormHelperText id="username-error-text" error>
                                    Username is required.
                                </FormHelperText>
                            )}
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Mật khẩu"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                value={password}
                                onChange={(event) =>
                                    setPassword(event.target.value)
                                }
                            />
                            {passwordError && (
                                <FormHelperText id="password-error-text" error>
                                    Password is required.
                                </FormHelperText>
                            )}
                            <LoadingButton
                                type="submit"
                                fullWidth
                                variant="contained"
                                loading={loading}
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Đăng nhập
                            </LoadingButton>
                            <Copyright sx={{ mt: 2 }} />
                        </Box>
                    </Box>
                </Grid>
            </Grid>
            <ToastContainer />
        </ThemeProvider>
    );
}
