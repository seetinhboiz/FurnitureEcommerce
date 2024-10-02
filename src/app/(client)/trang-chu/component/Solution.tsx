'use client';
import { Grid, ThemeProvider, Typography } from '@mui/material';
import backgroundImg from '../../../assets/images/backgorundHomeComponent.jpg';
import theme from '../../theme';
import { useTranslation } from 'react-i18next';

export default function Soulution() {
    const { t } = useTranslation();
    return (
        <ThemeProvider theme={theme}>
            <Grid
                container
                justifyContent={'center'}
                xs={12}
                sx={{ backgroundColor: theme.palette.primary.contrastText }}
            >
                <Typography
                    variant="h4"
                    color={theme.palette.primary.main}
                    fontWeight={'bold'}
                    textAlign={'center'}
                >
                    {t(
                        'home.provideSolutionToMakeExhibitionSuccessfully',
                    ).toUpperCase()}
                </Typography>
                <Grid xs={10} container justifyContent={'center'} item>
                    <Typography
                        variant="h6"
                        color={theme.palette.primary.main}
                        textAlign={'justify'}
                        sx={{ mt: 4, mb: 4 }}
                    >
                        {t('home.provideSolutionContent')}
                    </Typography>
                </Grid>

                <Grid
                    container
                    justifyContent={'center'}
                    alignItems={'center'}
                    sx={{
                        backgroundImage: `url(${backgroundImg.src})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        mt: 6,
                        paddingTop: 10,
                        paddingBottom: 10,
                    }}
                >
                    <Typography
                        variant="h4"
                        color={theme.palette.primary.contrastText}
                        fontWeight={'bold'}
                        textAlign={'center'}
                        sx={{ p: 2 }}
                    >
                        {t('home.solutionForExhibitionAndSoOn').toUpperCase()}
                    </Typography>
                    <Grid xs={8} item>
                        <Typography
                            variant="h6"
                            color={theme.palette.primary.contrastText}
                            fontWeight={'bold'}
                            textAlign={'center'}
                            sx={{ p: 2 }}
                        >
                            {t('home.contactUsToday').toUpperCase()}
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}
