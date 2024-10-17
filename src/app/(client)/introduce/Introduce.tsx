'use client';
import PurpleBackground from '@/components/PurpleBackground';
import { Box, Grid, Typography, useMediaQuery } from '@mui/material';
import Image from 'next/image';
import lineBottomLeft from '../../assets/images/introduce/bottomleft.png';
import lineBottomRight from '../../assets/images/introduce/bottomright.png';
import boxImg from '../../assets/images/introduce/box.png';
import lightImg from '../../assets/images/introduce/light.png';
import settingImg from '../../assets/images/introduce/setting.png';
import toolImg from '../../assets/images/introduce/tool.png';
import lineTopLeft from '../../assets/images/introduce/topleft.png';
import lineTopRight from '../../assets/images/introduce/topright.png';
import { useTranslation } from 'react-i18next';
import theme from '../theme';

function Item({ isSmallScreen }: any) {
    const { t } = useTranslation();
    return (
        <Grid
            xs={12}
            container
            justifyContent={'center'}
            direction={'column'}
            alignItems={'center'}
            minHeight={200}
            position={'relative'}
        >
            <Box
                width={1}
                height={100}
                position={'relative'}
                display={'flex'}
                justifyContent={'center'}
                maxWidth={isSmallScreen ? 60 : 100}
            >
                <Image src={'/images/introduce/box.svg'} alt="icon" fill />
            </Box>
            <Grid xs={8} container justifyContent={'center'}>
                <Typography
                    variant={isSmallScreen ? 'subtitle2' : 'h6'}
                    fontWeight={'bold'}
                    textAlign={'center'}
                    sx={{
                        marginTop: 2,
                        color: '#FBBB20',
                    }}
                >
                    {t('introduce.commercialProduct').toUpperCase()}
                </Typography>
            </Grid>
            <Box
                width={1}
                maxWidth={500}
                sx={{height:{xs: '40%', md: '80%', lg: 1}}}
                position={'absolute'}
                bottom={isSmallScreen ? -40 : -80}
                left={0}
            >
                <Image
                    src={'/images/introduce/top-left-line.svg'}
                    alt="line"
                    fill
                />
            </Box>
        </Grid>
    );
}

function Item2({ isSmallScreen }: any) {
    const { t } = useTranslation();

    return (
        <Grid
            xs={12}
            container
            justifyContent={'center'}
            direction={'column'}
            alignItems={'center'}
            minHeight={200}
            position={'relative'}
        >
            <Box
                width={1}
                height={100}
                position={'relative'}
                display={'flex'}
                justifyContent={'center'}
                maxWidth={isSmallScreen ? 60 : 100}
            >
                <Image src={'/images/introduce/tool.svg'} alt="icon" fill />
            </Box>
            <Grid xs={8} container justifyContent={'center'}>
                <Typography
                    variant={isSmallScreen ? 'subtitle2' : 'h6'}
                    fontWeight={'bold'}
                    textAlign={'center'}
                    color={theme.palette.text.secondary}
                    sx={{ marginTop: 2, color: '#FBBB20' }}
                >
                    {t(
                        'introduce.fairAndExhibitionEquipmentRental',
                    ).toUpperCase()}
                </Typography>
            </Grid>
            <Box
                width={1}
                maxWidth={500}
                sx={{height:{xs: '40%', md: '80%', lg: 1}}}
                position={'absolute'}
                bottom={isSmallScreen ? -40 : -80}
                right={-10}
            >
                <Image
                    src={'/images/introduce/top-right-line.svg'}
                    alt="line"
                    fill
                />
            </Box>
        </Grid>
    );
}

function Item3({ isSmallScreen }: any) {
    const { t } = useTranslation();

    return (
        <Grid
            xs={12}
            container
            justifyContent={'center'}
            direction={'column'}
            alignItems={'center'}
            minHeight={200}
            position={'relative'}
        >
            <Grid xs={8} container justifyContent={'center'}>
                <Typography
                    variant={isSmallScreen ? 'subtitle2' : 'h6'}
                    fontWeight={'bold'}
                    textAlign={'center'}
                    sx={{ marginTop: 2, marginBottom: 2, color: '#FBBB20' }}
                >
                    {t(
                        'introduce.constructionAndInstallationOfLightingAndPowerSources',
                    ).toUpperCase()}
                </Typography>
            </Grid>
            <Box
                width={1}
                height={100}
                position={'relative'}
                display={'flex'}
                justifyContent={'center'}
                maxWidth={isSmallScreen ? 60 : 100}
            >
                <Image src={'/images/introduce/gear.svg'} alt="icon" fill />
            </Box>
            <Box
                width={1}
                maxWidth={500}
                sx={{height:{xs: '40%', md: '80%', lg: 1}}}
                position={'absolute'}
                top={isSmallScreen ? -40 : -80}
                left={0}
            >
                <Image
                    src={'/images/introduce/bot-left-line.svg'}
                    alt="line"
                    fill
                />
            </Box>
        </Grid>
    );
}

function Item4({ isSmallScreen }: any) {
    const { t } = useTranslation();

    return (
        <Grid
            xs={12}
            container
            justifyContent={'center'}
            direction={'column'}
            alignItems={'center'}
            minHeight={200}
            sx={{ position: 'relative' }}
        >
            <Grid xs={8} container justifyContent={'center'}>
                <Typography
                    variant={isSmallScreen ? 'subtitle2' : 'h6'}
                    fontWeight={'bold'}
                    sx={{ marginTop: 2, marginBottom: 2, color: '#FBBB20' }}
                    textAlign={'center'}
                >
                    {`${t('introduce.postExhibitionServices').toUpperCase()}, (${t('introduce.storage').toUpperCase()}, ${t('introduce.customerSearch')})`.toUpperCase()}
                </Typography>
            </Grid>
            <Box
                width={1}
                height={100}
                position={'relative'}
                display={'flex'}
                justifyContent={'center'}
                maxWidth={isSmallScreen ? 60 : 100}
            >
                <Image src={'/images/introduce/light.svg'} alt="icon" fill />
            </Box>
            <Box
                width={1}
                maxWidth={500}
                sx={{height:{xs: '40%', md: '80%', lg: 1}}}
                position={'absolute'}
                top={isSmallScreen ? -40 : -80}
                right={-10}
            >
                <Image
                    src={'/images/introduce/bot-right-line.svg'}
                    alt="line"
                    fill
                />
            </Box>
        </Grid>
    );
}

function RowItem({ isSmallScreen }: any) {
    return (
        <Grid xs={12} container justifyContent={'space-between'}>
            <Grid xs={5} item>
                <Item isSmallScreen={isSmallScreen} />
            </Grid>
            <Grid xs={5} item>
                <Item2 isSmallScreen={isSmallScreen} />
            </Grid>
        </Grid>
    );
}

function RowItem2({ isSmallScreen }: any) {
    return (
        <Grid xs={12} container justifyContent={'space-between'}>
            <Grid xs={5} item>
                <Item3 isSmallScreen={isSmallScreen} />
            </Grid>
            <Grid xs={5} item>
                <Item4 isSmallScreen={isSmallScreen} />
            </Grid>
        </Grid>
    );
}

export default function Introduce() {
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'));
    const isLargeScreen = useMediaQuery(theme.breakpoints.down('lg'));

    return (
        <Box>
            <PurpleBackground />
            <Grid xs={12} container justifyContent={'center'}>
                <Grid
                    xs={11}
                    item
                    sx={{
                        position: 'relative',
                        minHeight: 'calc(100vh - 113px)',
                    }}
                >
                    <RowItem isSmallScreen={isSmallScreen} />
                    <Typography
                        variant={isSmallScreen ? 'h4' : 'h2'}
                        fontWeight={'bold'}
                        sx={{ marginTop: 6, marginBottom: 6 }}
                        textAlign={'center'}
                        color={theme.palette.primary.contrastText}
                    >
                        EPIONEER
                    </Typography>
                    <RowItem2 isSmallScreen={isSmallScreen} />
                    <Typography
                        variant="subtitle1"
                        fontWeight={'bold'}
                        textAlign={'left'}
                        sx={{
                            position: 'absolute',
                            bottom: isSmallScreen ? 10 : 30,
                            left: 0,
                        }}
                        color={theme.palette.primary.contrastText}
                    >
                        Epioneer Company Ltd.
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    );
}
