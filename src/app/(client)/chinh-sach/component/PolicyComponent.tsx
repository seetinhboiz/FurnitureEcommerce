'use client';
import { ApiPathEnum } from '@/api/api.path.enum';
import axios from '@/api/axios.instance';
import Footer from '@/components/Footer';
import { IBanner } from '@/types/products/products.interface';
import { Box, Grid, ThemeProvider, Typography } from '@mui/material';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import theme from '../../theme';
import { useTranslation } from 'react-i18next';

export default function PolicyComponent() {
    const { t } = useTranslation();
    const [banner, setBanner] = useState<IBanner>();

    const getBanner = (name: string) => {
        axios.get(`${ApiPathEnum.Banner}`, { params: { name } }).then((res) => {
            if (res.status === 200) {
                setBanner(res.data.data[0]);
            }
        });
    };

    useEffect(() => {
        getBanner('policyBannerImg');
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <Grid
                xs={12}
                container
                justifyContent={'center'}
                sx={{ backgroundColor: theme.palette.primary.contrastText }}
            >
                <Grid
                    container
                    xs={12}
                    sx={{
                        backgroundImage: `url(${banner?.image.url})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        paddingTop: { xs: 4, md: 16 },
                        paddingBottom: { xs: 4, md: 16 },
                    }}
                >
                    <Grid xs={8} item>
                        <Typography
                            variant="h4"
                            fontWeight={'bold'}
                            textAlign={'center'}
                            color={theme.palette.primary.main}
                            sx={{
                                paddingTop: 4,
                                paddingBottom: 4,
                                fontSize: { xs: '1rem', sm: '2.125rem' },
                            }}
                        >
                            CÙNG NHAU NÂNG CAO THÀNH CÔNG
                        </Typography>
                    </Grid>
                    <Grid xs={8} item>
                        <Typography
                            variant="h6"
                            textAlign={'center'}
                            color={theme.palette.primary.main}
                            sx={{
                                fontSize: { xs: '1rem', sm: '1.25rem' },
                                paddingBottom: 4,
                            }}
                        >
                            Tại ePioneer, chúng tôi chuyên cung cấp các giải
                            pháp sáng tạo và chất lượng, cùng nhau nâng cao
                            thành công.
                        </Typography>
                    </Grid>
                </Grid>

                <Grid xs={10} item>
                    <Typography
                        variant="h6"
                        textAlign={'justify'}
                        color={theme.palette.primary.main}
                        sx={{ py: 2 }}
                    >
                        {t('policy.policyDescription')}
                    </Typography>
                </Grid>

                <Grid xs={10} item>
                    <Typography
                        variant="h4"
                        fontWeight={'bold'}
                        textAlign={'center'}
                        color={theme.palette.primary.main}
                        sx={{ paddingTop: 8, paddingBottom: 4 }}
                    >
                        {t('policy.qualityGoodsAndWellPrice').toUpperCase()}
                    </Typography>
                </Grid>
                <Grid xs={10} md={6} item>
                    <Box
                        width={1}
                        sx={{
                            height: {
                                xs: 300,
                                md: 400,
                                lg: 650,
                            },
                        }}
                        position={'relative'}
                    >
                        <Image
                            alt="blog"
                            src={'/images/policy/blog1.jpg'}
                            fill
                        />
                    </Box>
                </Grid>
                <Grid xs={10} item>
                    <Typography
                        variant="h6"
                        textAlign={'justify'}
                        color={theme.palette.primary.main}
                        sx={{ paddingTop: 4 }}
                    >
                        {t('policy.qualityGoodsAndWellPriceDescription')}
                    </Typography>
                </Grid>

                <Grid xs={10} item>
                    <Typography
                        variant="h4"
                        fontWeight={'bold'}
                        textAlign={'center'}
                        color={theme.palette.primary.main}
                        sx={{ paddingTop: 8, paddingBottom: 2 }}
                    >
                        {t('policy.generalPolicy').toUpperCase()}
                    </Typography>
                    <Grid
                        xs={12}
                        item
                        container
                        justifyContent={'space-evenly'}
                        sx={{ paddingTop: 4, paddingBottom: 4 }}
                    >
                        <Grid
                            md={4}
                            xs={12}
                            item
                            container
                            sx={{ paddingBottom: { md: 0, xs: 4 } }}
                        >
                            <Grid
                                xs={12}
                                item
                                justifyContent={'center'}
                                container
                                sx={{ mb: 2 }}
                            >
                                <Box
                                    width={120}
                                    height={120}
                                    position={'relative'}
                                >
                                    <Image
                                        src={'/images/icon/express.png'}
                                        alt="icon"
                                        fill
                                    />
                                </Box>
                            </Grid>
                            <Grid
                                xs={12}
                                item
                                justifyContent={'center'}
                                container
                            >
                                <Typography
                                    variant="h5"
                                    color={theme.palette.primary.main}
                                    textAlign={'center'}
                                    fontWeight={'bold'}
                                >
                                    {t(
                                        'policy.shippingAndDeliveryTime',
                                    ).toUpperCase()}
                                </Typography>
                            </Grid>
                            <Grid
                                xs={12}
                                item
                                justifyContent={'center'}
                                container
                            >
                                <Typography
                                    variant="h6"
                                    color={theme.palette.primary.main}
                                    textAlign={'center'}
                                >
                                    {t(
                                        'policy.shippingAndDeliveryTimeDescription',
                                    )}
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid md={4} xs={12} item container>
                            <Grid
                                xs={12}
                                item
                                justifyContent={'center'}
                                container
                                sx={{ mb: 2 }}
                            >
                                <Box
                                    width={120}
                                    height={120}
                                    position={'relative'}
                                >
                                    <Image
                                        src={'/images/icon/shield.png'}
                                        alt="icon"
                                        fill
                                    />
                                </Box>
                            </Grid>
                            <Grid
                                xs={12}
                                item
                                justifyContent={'center'}
                                container
                            >
                                <Typography
                                    variant="h5"
                                    color={theme.palette.primary.main}
                                    textAlign={'center'}
                                    fontWeight={'bold'}
                                >
                                    {t('policy.guarantee').toUpperCase()}
                                </Typography>
                            </Grid>
                            <Grid
                                xs={12}
                                item
                                justifyContent={'center'}
                                container
                            >
                                <Typography
                                    variant="h6"
                                    color={theme.palette.primary.main}
                                    textAlign={'center'}
                                >
                                    {t('policy.guaranteeDescription')}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid xs={10} item>
                    <Typography
                        variant="h4"
                        fontWeight={'bold'}
                        textAlign={'center'}
                        color={theme.palette.primary.main}
                        sx={{ paddingTop: 8, paddingBottom: 2 }}
                    >
                        {t('policy.paymentPolicy').toUpperCase()}
                    </Typography>
                    <Grid
                        xs={12}
                        item
                        container
                        justifyContent={'space-evenly'}
                        sx={{ paddingTop: 4, paddingBottom: 4 }}
                    >
                        <Grid
                            md={4}
                            xs={12}
                            item
                            container
                            sx={{ paddingBottom: { md: 0, xs: 4 } }}
                        >
                            <Grid
                                xs={12}
                                item
                                justifyContent={'center'}
                                container
                                sx={{ mb: 2 }}
                            >
                                <Box
                                    width={120}
                                    height={120}
                                    position={'relative'}
                                >
                                    <Image
                                        src={'/images/icon/payment.png'}
                                        alt="icon"
                                        fill
                                    />
                                </Box>
                            </Grid>
                            <Grid
                                xs={12}
                                item
                                justifyContent={'center'}
                                container
                            >
                                <Typography
                                    variant="h5"
                                    color={theme.palette.primary.main}
                                    textAlign={'center'}
                                    fontWeight={'bold'}
                                >
                                    {t(
                                        'policy.shippingAndDeliveryTime',
                                    ).toUpperCase()}
                                </Typography>
                            </Grid>
                            <Grid
                                xs={12}
                                item
                                justifyContent={'center'}
                                container
                            >
                                <Typography
                                    variant="h6"
                                    color={theme.palette.primary.main}
                                    textAlign={'center'}
                                >
                                    {t(
                                        'policy.shippingAndDeliveryTimeDescription',
                                    )}
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid md={4} xs={12} item container>
                            <Grid
                                xs={12}
                                item
                                justifyContent={'center'}
                                container
                                sx={{ mb: 2 }}
                            >
                                <Box
                                    width={120}
                                    height={120}
                                    position={'relative'}
                                >
                                    <Image
                                        src={'/images/icon/clockIcon.png'}
                                        alt="icon"
                                        fill
                                    />
                                </Box>
                            </Grid>
                            <Grid
                                xs={12}
                                item
                                justifyContent={'center'}
                                container
                            >
                                <Typography
                                    variant="h5"
                                    color={theme.palette.primary.main}
                                    textAlign={'center'}
                                    fontWeight={'bold'}
                                >
                                    {t('policy.guarantee').toUpperCase()}
                                </Typography>
                            </Grid>
                            <Grid
                                xs={12}
                                item
                                justifyContent={'center'}
                                container
                            >
                                <Typography
                                    variant="h6"
                                    color={theme.palette.primary.main}
                                    textAlign={'center'}
                                >
                                    {t(
                                        'policy.guaranteeDescription',
                                    ).toUpperCase()}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid xs={10} item>
                    <Typography
                        variant="h4"
                        fontWeight={'bold'}
                        textAlign={'center'}
                        color={theme.palette.primary.main}
                        sx={{ paddingTop: 8, paddingBottom: 2 }}
                    >
                        {t('policy.supportPolicy').toUpperCase()}
                    </Typography>
                    <Typography
                        variant="h5"
                        fontWeight={'bold'}
                        color={theme.palette.primary.main}
                        sx={{ paddingBottom: 2 }}
                    >
                        {t('policy.prMarketingSupport')}
                    </Typography>
                    <Typography
                        variant="h6"
                        textAlign={'justify'}
                        color={theme.palette.primary.main}
                        sx={{ paddingBottom: 2 }}
                    >
                        {t('policy.prMarketingSupportContent')}
                    </Typography>

                    <Grid xs={12} container item justifyContent={'center'}>
                        <Grid md={6} xs={12} item>
                            <Box
                                width={1}
                                position={'relative'}
                                sx={{
                                    height: {
                                        xs: 300,
                                        md: 400,
                                        lg: 650,
                                    },
                                }}
                            >
                                <Image
                                    alt="blog"
                                    src={'/images/policy/blog1.jpg'}
                                    fill
                                />
                            </Box>
                        </Grid>
                    </Grid>

                    <Typography
                        variant="h5"
                        fontWeight={'bold'}
                        color={theme.palette.primary.main}
                        sx={{ paddingTop: 8, paddingBottom: 2 }}
                    >
                        {t('policy.technicalSupport')}
                    </Typography>
                    <Typography
                        variant="h6"
                        textAlign={'justify'}
                        color={theme.palette.primary.main}
                        sx={{ paddingBottom: 2 }}
                    >
                        {t('policy.technicalSupportContent')}
                    </Typography>
                    <Typography
                        variant="h5"
                        fontWeight={'bold'}
                        color={theme.palette.primary.main}
                        sx={{ paddingTop: 8, paddingBottom: 2 }}
                    >
                        {t('policy.technicalSupport')}
                    </Typography>

                    <Grid
                        xs={12}
                        item
                        container
                        justifyContent={'space-evenly'}
                        sx={{ paddingTop: 4, paddingBottom: 4 }}
                    >
                        <Grid
                            md={4}
                            xs={12}
                            item
                            container
                            sx={{ paddingBottom: { md: 0, xs: 4 } }}
                        >
                            <Grid
                                xs={12}
                                item
                                justifyContent={'center'}
                                container
                                sx={{ mb: 2 }}
                            >
                                <Box
                                    width={300}
                                    height={120}
                                    position={'relative'}
                                >
                                    <Image
                                        src={'/images/icon/trade.png'}
                                        alt="icon"
                                        fill
                                    />
                                </Box>
                            </Grid>
                            <Grid
                                xs={12}
                                item
                                justifyContent={'center'}
                                container
                            >
                                <Typography
                                    variant="h5"
                                    color={theme.palette.primary.main}
                                    textAlign={'center'}
                                    fontWeight={'bold'}
                                >
                                    {t('policy.changeGoods').toUpperCase()}
                                </Typography>
                            </Grid>
                            <Grid
                                xs={12}
                                item
                                justifyContent={'center'}
                                container
                            >
                                <Typography
                                    variant="h6"
                                    color={theme.palette.primary.main}
                                    textAlign={'center'}
                                >
                                    {t('policy.changeGoodsContent')}
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid md={4} xs={12} item container>
                            <Grid
                                xs={12}
                                item
                                justifyContent={'center'}
                                container
                                sx={{ mb: 2 }}
                            >
                                <Box
                                    width={110}
                                    height={110}
                                    position={'relative'}
                                >
                                    <Image
                                        src={'/images/icon/cart.png'}
                                        alt="icon"
                                        fill
                                    />
                                </Box>
                            </Grid>
                            <Grid
                                xs={12}
                                item
                                justifyContent={'center'}
                                container
                            >
                                <Typography
                                    variant="h5"
                                    color={theme.palette.primary.main}
                                    textAlign={'center'}
                                    fontWeight={'bold'}
                                >
                                    {t('policy.guarantee').toUpperCase()}
                                </Typography>
                            </Grid>
                            <Grid
                                xs={12}
                                item
                                justifyContent={'center'}
                                container
                            >
                                <Typography
                                    variant="h6"
                                    color={theme.palette.primary.main}
                                    textAlign={'center'}
                                >
                                    {t('policy.guaranteeContent')}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid xs={8} item>
                    <Typography
                        variant="h4"
                        fontWeight={'bold'}
                        textAlign={'center'}
                        color={theme.palette.primary.contrastText}
                        sx={{
                            paddingTop: { xs: 4, md: 8 },
                            paddingBottom: { xs: 4, md: 8 },
                            backgroundColor: theme.palette.primary.main,
                            borderRadius: 8,
                            marginTop: 8,
                            marginBottom: 4,
                        }}
                    >
                        {t(
                            'policy.developingAgencyIsOurHappiness',
                        ).toUpperCase()}
                    </Typography>

                    <Typography
                        variant="h5"
                        textAlign={'center'}
                        color={theme.palette.primary.main}
                    >
                        {t('policy.weWantToCooperate')}
                    </Typography>
                </Grid>

                <Grid
                    xs={10}
                    item
                    container
                    justifyContent={'space-between'}
                    alignItems={'center'}
                    sx={{ paddingTop: 10, paddingBottom: 10 }}
                >
                    <Grid item md={5} xs={12}>
                        <Typography
                            variant="h4"
                            textAlign={'center'}
                            fontWeight={'bold'}
                            color={theme.palette.primary.main}
                            sx={{ paddingBottom: 4 }}
                        >
                            {t(
                                'policy.discoverOurInnovativeAndQualitySolutions',
                            )}
                        </Typography>
                        <Typography
                            variant="h6"
                            textAlign={'center'}
                            color={theme.palette.primary.main}
                        >
                            {t('policy.exploreHowWeCanEnhanceYourExperience')}
                        </Typography>
                    </Grid>
                    <Grid item md={5} xs={12}>
                        <Box
                            width={1}
                            sx={{
                                height: {
                                    xs: 300,
                                    md: 400,
                                    lg: 800,
                                },
                            }}
                            position={'relative'}
                        >
                            <Image
                                alt="people"
                                src={'/images/policy/peopleStonk.png'}
                                fill
                            />
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
            <Footer />
        </ThemeProvider>
    );
}
