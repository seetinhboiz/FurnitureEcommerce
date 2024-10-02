'use client';
import { Box, Grid, ThemeProvider, Typography } from '@mui/material';
import theme from '../../theme';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

export default function Welcome() {
    const { t } = useTranslation();

    return (
        <ThemeProvider theme={theme}>
            <Grid
                xs={12}
                container
                justifyContent={'space-evenly'}
                sx={{
                    backgroundColor: theme.palette.primary.contrastText,
                    paddingTop: 6,
                    paddingBottom: 6,
                }}
                minHeight={500}
            >
                <Grid md={6} xs={12} item>
                    <Box width={1} height={1} position={'relative'}>
                        <Image
                            src={'/images/home/welcome/articleTool.png'}
                            alt="tool"
                            objectFit="contain"
                            layout="responsive"
                            height={1}
                            width={1}
                        />
                    </Box>
                </Grid>
                <Grid
                    md={6}
                    xs={12}
                    item
                    container
                    justifyContent={'center'}
                    alignItems={'center'}
                >
                    <Grid xs={8} item py={4}>
                        <Typography
                            variant="h4"
                            color={theme.palette.primary.contrastText}
                            textAlign={'center'}
                            sx={{
                                backgroundColor: theme.palette.primary.main,
                                borderRadius: 8,
                                py: 10,
                                fontWeight: 600,
                            }}
                        >
                            {t('home.welcome').toUpperCase()}
                        </Typography>
                    </Grid>
                    <Grid xs={12} item>
                        <Typography
                            variant="h6"
                            color={theme.palette.primary.main}
                            textAlign={'center'}
                        >
                            {t('home.weProvideCreativeSolution')}
                        </Typography>
                    </Grid>
                    <Grid xs={1.5} item height={1}>
                        <Box width={1} position={'relative'}>
                            <Image
                                src={'/images/home/welcome/articleLogo.jpg'}
                                alt="Logo"
                                objectFit="contain"
                                layout="responsive"
                                height={1}
                                width={1}
                            />
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}
