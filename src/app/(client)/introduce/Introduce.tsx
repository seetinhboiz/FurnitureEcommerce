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
            sx={{ position: 'relative' }}
        >
            <Image
                src={boxImg}
                alt="icon"
                layout="responsive"
                style={{ maxWidth: isSmallScreen ? 60 : 100 }}
            />
            <Grid xs={8} container justifyContent={'center'}>
                <Typography
                    variant={isSmallScreen ? 'subtitle2' : 'h6'}
                    fontWeight={'bold'}
                    textAlign={'center'}
                    sx={{
                        marginTop: 2,
                        color: '#B8ADF8',
                    }}
                >
                    {t('introduce.commercialProduct').toUpperCase()}
                </Typography>
            </Grid>
            <Image
                src={lineTopLeft}
                alt="line"
                layout="responsive"
                style={{
                    maxWidth: 500,
                    position: 'absolute',
                    bottom: isSmallScreen ? -40 : -80,
                    left: 0,
                }}
            />
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
            sx={{ position: 'relative' }}
        >
            <Image
                src={toolImg}
                alt="icon"
                layout="responsive"
                style={{ maxWidth: isSmallScreen ? 60 : 100 }}
            />
            <Grid xs={8} container justifyContent={'center'}>
                <Typography
                    variant={isSmallScreen ? 'subtitle2' : 'h6'}
                    fontWeight={'bold'}
                    textAlign={'center'}
                    sx={{ marginTop: 2, color: '#B8ADF8' }}
                >
                    {t(
                        'introduce.fairAndExhibitionEquipmentRental',
                    ).toUpperCase()}
                </Typography>
            </Grid>
            <Image
                src={lineTopRight}
                alt="line"
                layout="responsive"
                style={{
                    maxWidth: 500,
                    position: 'absolute',
                    bottom: isSmallScreen ? -40 : -80,
                    right: -10,
                }}
            />
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
            sx={{ position: 'relative' }}
        >
            <Grid xs={8} container justifyContent={'center'}>
                <Typography
                    variant={isSmallScreen ? 'subtitle2' : 'h6'}
                    fontWeight={'bold'}
                    textAlign={'center'}
                    sx={{ marginTop: 2, marginBottom: 2, color: '#B8ADF8' }}
                >
                    {t(
                        'introduce.constructionAndInstallationOfLightingAndPowerSources',
                    ).toUpperCase()}
                </Typography>
            </Grid>
            <Image
                src={settingImg}
                alt="icon"
                layout="responsive"
                style={{ maxWidth: isSmallScreen ? 60 : 100 }}
            />
            <Image
                src={lineBottomLeft}
                alt="line"
                layout="responsive"
                style={{
                    maxWidth: 500,
                    position: 'absolute',
                    top: isSmallScreen ? -40 : -80,
                    left: 0,
                }}
            />
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
                    sx={{ marginTop: 2, marginBottom: 2, color: '#B8ADF8' }}
                    textAlign={'center'}
                >
                    {`${t('introduce.postExhibitionServices').toUpperCase()}, (${t('introduce.storage').toUpperCase()}, ${t('introduce.customerSearch')})`.toUpperCase()}
                </Typography>
            </Grid>
            <Image
                src={lightImg}
                alt="icon"
                layout="responsive"
                style={{ maxWidth: isSmallScreen ? 60 : 100 }}
            />
            <Image
                src={lineBottomRight}
                alt="line"
                layout="responsive"
                style={{
                    maxWidth: 500,
                    position: 'absolute',
                    top: isSmallScreen ? -40 : -80,
                    right: -10,
                }}
            />
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
    const isSmallScreen = useMediaQuery('(max-width:700px)');
    const { t } = useTranslation();

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
