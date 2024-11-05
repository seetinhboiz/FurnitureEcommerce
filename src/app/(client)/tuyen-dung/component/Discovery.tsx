'use client';
import { Divider, Grid, ThemeProvider, Typography } from '@mui/material';
import theme from '../../theme';
import teamWorkImg from '../../../assets/images/teamWork.jpg';
import education from '/public/images/recruitment/education.svg';
import clock_8 from '/public/images/recruitment/8-o-clock.svg';
import clock_4 from '/public/images/recruitment/4-o-clock.svg';
import handshake from '/public/images/recruitment/handshake.svg';
import chart from '/public/images/recruitment/chart.svg';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

export default function Discovery() {
    const { t } = useTranslation();
    return (
        <ThemeProvider theme={theme}>
            <Grid
                container
                justifyContent={'center'}
                xs={12}
                sx={{ backgroundColor: theme.palette.primary.contrastText }}
            >
                <Grid xs={8} item>
                    <Typography
                        variant="h4"
                        color={theme.palette.primary.main}
                        textAlign={'center'}
                        fontWeight={'bold'}
                        sx={{ paddingTop: 6, paddingBottom: 2 }}
                    >
                        {t('recruitment.discovery.title').toUpperCase()}
                    </Typography>
                </Grid>
                <Grid xs={10} item>
                    <Typography
                        variant="h6"
                        color={theme.palette.primary.main}
                        textAlign={'justify'}
                    >
                        {t('recruitment.discovery.description')}
                    </Typography>
                </Grid>
                <Grid xs={8} item justifyContent={'center'}>
                    <Image
                        src={teamWorkImg}
                        alt="photo"
                        layout="responsive"
                        style={{ paddingTop: 30, paddingBottom: 30 }}
                    />
                </Grid>

                <Grid
                    xs={8}
                    container
                    item
                    justifyContent={'space-between'}
                    sx={{ paddingBottom: 6 }}
                >
                    <Grid
                        xs={12}
                        sm={5}
                        item
                        container
                        justifyContent={'center'}
                        sx={{ paddingBottom: { xs: 4, sm: 2 } }}
                    >
                        <Grid xs={12} container justifyContent={'center'}>
                            <Image
                                src={education}
                                alt="Hat Image"
                                height={100}
                                width={100}
                            />
                        </Grid>
                        <Typography
                            variant="h4"
                            color={theme.palette.primary.main}
                            textAlign={'center'}
                            fontWeight={'bold'}
                        >
                            {t('recruitment.discovery.intership')}
                        </Typography>
                        <Typography
                            variant="subtitle1"
                            color={theme.palette.primary.main}
                            textAlign={'center'}
                            fontWeight={'bold'}
                        >
                            {t('recruitment.discovery.internshipDescription')}
                        </Typography>
                    </Grid>
                    <Grid
                        xs={12}
                        sm={5}
                        item
                        container
                        justifyContent={'center'}
                        sx={{ paddingBottom: { xs: 4, sm: 2 } }}
                    >
                        <Grid xs={12} container justifyContent={'center'}>
                            <Image
                                src={clock_8}
                                alt="Hat Image"
                                height={100}
                                width={100}
                            />
                        </Grid>
                        <Typography
                            variant="h4"
                            color={theme.palette.primary.main}
                            textAlign={'center'}
                            fontWeight={'bold'}
                        >
                            {t('recruitment.discovery.fullTime')}
                        </Typography>
                        <Typography
                            variant="subtitle1"
                            color={theme.palette.primary.main}
                            textAlign={'center'}
                            fontWeight={'bold'}
                        >
                            {t('recruitment.discovery.fullTimeDescription')}
                        </Typography>
                    </Grid>
                </Grid>

                <Grid xs={12} container justifyContent={'center'}>
                    <Grid xs={8} item>
                        <Typography
                            variant="h4"
                            color={theme.palette.primary.main}
                            textAlign={'center'}
                            fontWeight={'bold'}
                            sx={{ paddingBottom: 4 }}
                        >
                            {t(
                                'recruitment.discovery.growupTitle',
                            ).toUpperCase()}
                        </Typography>
                    </Grid>
                    <Grid xs={10} item>
                        <Typography
                            variant="h6"
                            color={theme.palette.primary.main}
                            textAlign={'justify'}
                            sx={{ mb: 8 }}
                        >
                            {t('recruitment.discovery.growupDescription')}
                        </Typography>
                    </Grid>
                </Grid>

                <Grid
                    xs={10}
                    container
                    item
                    justifyContent={'space-evenly'}
                    alignItems={'center'}
                >
                    <Grid
                        sm={4}
                        xs={12}
                        container
                        item
                        borderRadius={10}
                        alignItems={'center'}
                        sx={{
                            backgroundColor: theme.palette.primary.main,
                            padding: 4,
                        }}
                    >
                        <Typography
                            variant={'h4'}
                            textAlign={'center'}
                            color={theme.palette.primary.contrastText}
                        >
                            {t('recruitment.discovery.firstTitle')}
                        </Typography>
                    </Grid>
                    <Grid xs={6} item container justifyContent={'center'}>
                        <Image src={clock_4} alt="" height={100} width={100} />
                        <Typography
                            variant={'h6'}
                            color={theme.palette.primary.main}
                            textAlign={'center'}
                            sx={{ mt: 2 }}
                        >
                            {t('recruitment.discovery.firstDescription')}
                        </Typography>
                    </Grid>
                </Grid>
                <Grid xs={10}>
                    <Divider sx={{ mt: 4, mb: 4 }} />
                </Grid>
                <Grid
                    xs={10}
                    container
                    item
                    justifyContent={'space-evenly'}
                    alignItems={'center'}
                >
                    <Grid
                        xs={6}
                        item
                        container
                        justifyContent={'center'}
                        sx={{ order: { xs: 2, sm: 1 } }}
                    >
                        <Image
                            src={handshake}
                            alt=""
                            height={100}
                            width={100}
                        />
                        <Typography
                            variant={'h6'}
                            color={theme.palette.primary.main}
                            textAlign={'center'}
                            sx={{ mt: 2 }}
                        >
                            {t('recruitment.discovery.secondDescription')}
                        </Typography>
                    </Grid>
                    <Grid
                        sm={4}
                        xs={12}
                        container
                        item
                        borderRadius={10}
                        alignItems={'center'}
                        sx={{
                            backgroundColor: theme.palette.primary.main,
                            padding: 4,
                            order: { xs: 1, sm: 2 },
                        }}
                        order={1}
                    >
                        <Typography
                            variant={'h4'}
                            textAlign={'center'}
                            color={theme.palette.primary.contrastText}
                        >
                            {t('recruitment.discovery.secondTitle')}
                        </Typography>
                    </Grid>
                </Grid>
                <Grid xs={10}>
                    <Divider sx={{ mt: 4, mb: 4 }} />
                </Grid>
                <Grid
                    xs={10}
                    container
                    item
                    justifyContent={'space-evenly'}
                    alignItems={'center'}
                >
                    <Grid
                        sm={4}
                        xs={12}
                        container
                        item
                        borderRadius={10}
                        alignItems={'center'}
                        sx={{
                            backgroundColor: theme.palette.primary.main,
                            padding: 4,
                        }}
                    >
                        <Typography
                            variant={'h4'}
                            textAlign={'center'}
                            color={theme.palette.primary.contrastText}
                        >
                            {t('recruitment.discovery.thirdTitle')}
                        </Typography>
                    </Grid>
                    <Grid xs={6} item container justifyContent={'center'}>
                        <Image src={chart} alt="" height={100} width={100} />
                        <Typography
                            variant={'h6'}
                            color={theme.palette.primary.main}
                            textAlign={'center'}
                            sx={{ mt: 2 }}
                        >
                            {t('recruitment.discovery.thirdDescription')}
                        </Typography>
                    </Grid>
                </Grid>
                <Grid xs={10}>
                    <Divider sx={{ mt: 4, mb: 4 }} />
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}
