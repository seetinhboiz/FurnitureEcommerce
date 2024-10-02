'use client';
import { Grid, ThemeProvider, Typography } from '@mui/material';
import Image from 'next/image';
import { useState } from 'react';
import theme from '../../theme';
import { useTranslation } from 'react-i18next';

export default function Article() {
    const [hovered, setHovered] = useState(false);
    const { t } = useTranslation();

    return (
        <ThemeProvider theme={theme}>
            <Grid
                xs={12}
                container
                justifyContent={'space-evenly'}
                alignItems={'center'}
                sx={{
                    backgroundColor: theme.palette.primary.contrastText,
                    paddingTop: 6,
                    paddingBottom: 6,
                }}
            >
                <Grid xs={10} md={4} item sx={{ mt: 2, mb: 2 }}>
                    <Typography
                        variant="h4"
                        textAlign={'center'}
                        color={theme.palette.primary.main}
                        sx={{
                            marginBottom: '30px',
                        }}
                    >
                        <i>{t('home.changeTheWayYouExperience')}</i>
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        color={theme.palette.primary.main}
                        sx={{
                            fontWeight: 'lighter',
                            textAlign: 'justify',
                            marginBottom: 2,
                        }}
                    >
                        {t('home.changeTheWayYouExperienceContent')}
                    </Typography>
                </Grid>
                <Grid
                    xs={10}
                    md={6}
                    item
                    borderRadius={8}
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                    sx={{
                        position: 'relative',
                        overflow: 'hidden',
                        cursor: 'pointer',
                        width: 100,
                        height: {
                            lg: 800,
                            md: 400,
                            sm: 400,
                        },
                    }}
                >
                    <Image
                        src={'/images/home/articles/article3.jpg'}
                        alt="Banner"
                        fill
                        sizes="100vw"
                        style={{ objectFit: 'cover' }}
                    />
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}
