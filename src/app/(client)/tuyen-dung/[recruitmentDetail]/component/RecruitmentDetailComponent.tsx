'use client';
import { Grid, ThemeProvider, Typography } from '@mui/material';
import Image from 'next/image';
import emailImg from '../../../../assets/images/icon/emailIcon.png';
import phoneImg from '../../../../assets/images/icon/phoneIcon.png';
import theme from '../../../theme';
import Footer from '@/components/Footer';
import { IJobAds } from '@/types/job-ads/job-ads.interface';
import DOMPurify from 'dompurify';
import { useEffect, useState } from 'react';
import { ApiResponse } from '@/types/utils/api-response.interface';
import axios from '@/api/axios.instance';
import { ApiPathEnum } from '@/api/api.path.enum';
import { usePathname } from 'next/navigation';

export default function RecruitmentDetailComponent() {
    const pathname = usePathname();
    const paramsArray = pathname.split('-');
    const jobAdsId = paramsArray[paramsArray.length - 1];
    const [jobAds, setJobAds] = useState<IJobAds>();

    useEffect(() => {
        axios
            .get<ApiResponse<IJobAds>>(`${ApiPathEnum.JobAds}/${jobAdsId}`)
            .then((res) => {
                if (res.status === 200) {
                    setJobAds(res.data.data);
                }
            });
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <Grid
                xs={12}
                container
                justifyContent={'center'}
                sx={{ backgroundColor: theme.palette.primary.contrastText }}
            >
                <Grid xs={10} item container justifyContent={'center'}>
                    <Typography
                        variant="h4"
                        textAlign={'center'}
                        fontWeight={'bold'}
                        color={theme.palette.primary.main}
                        sx={{ py: 2 }}
                        dangerouslySetInnerHTML={{
                            __html: DOMPurify.sanitize(
                                jobAds?.title as string,
                                {
                                    USE_PROFILES: { html: true },
                                },
                            ),
                        }}
                    ></Typography>
                </Grid>
                <Grid xs={10} item>
                    <Typography
                        variant="h5"
                        fontWeight={'bold'}
                        color={theme.palette.primary.main}
                        sx={{ py: 2 }}
                    >
                        1. Thông tin vị trí:
                    </Typography>
                    <Typography
                        color={theme.palette.primary.main}
                        dangerouslySetInnerHTML={{
                            __html: DOMPurify.sanitize(
                                jobAds?.positionInformation as string,
                                {
                                    USE_PROFILES: { html: true },
                                },
                            ),
                        }}
                    ></Typography>
                </Grid>
                <Grid xs={10} item>
                    <Typography
                        variant="h5"
                        fontWeight={'bold'}
                        color={theme.palette.primary.main}
                        sx={{ py: 2 }}
                    >
                        2. Mô tả công việc:
                    </Typography>
                    <Typography
                        color={theme.palette.primary.main}
                        dangerouslySetInnerHTML={{
                            __html: DOMPurify.sanitize(
                                jobAds?.jobDescription as string,
                                {
                                    USE_PROFILES: { html: true },
                                },
                            ),
                        }}
                    ></Typography>
                </Grid>
                <Grid xs={10} item>
                    <Typography
                        variant="h5"
                        fontWeight={'bold'}
                        color={theme.palette.primary.main}
                        sx={{ py: 2 }}
                    >
                        3. Yêu cầu công việc:
                    </Typography>
                    <Typography
                        color={theme.palette.primary.main}
                        dangerouslySetInnerHTML={{
                            __html: DOMPurify.sanitize(
                                jobAds?.requirement as string,
                                {
                                    USE_PROFILES: { html: true },
                                },
                            ),
                        }}
                    ></Typography>
                </Grid>
                <Grid xs={10} item>
                    <Typography
                        variant="h5"
                        fontWeight={'bold'}
                        color={theme.palette.primary.main}
                        sx={{ py: 2 }}
                    >
                        4. Lương và phúc lợi:
                    </Typography>
                    <Typography
                        color={theme.palette.primary.main}
                        dangerouslySetInnerHTML={{
                            __html: DOMPurify.sanitize(
                                jobAds?.salaryInformation as string,
                                {
                                    USE_PROFILES: { html: true },
                                },
                            ),
                        }}
                    ></Typography>
                </Grid>

                <Grid xs={12} item>
                    <Typography
                        variant="h4"
                        color={theme.palette.primary.main}
                        textAlign={'center'}
                        fontWeight={'bold'}
                        sx={{ py: 2, paddingBottom: 2 }}
                    >
                        NỘP HỒ SƠ NGAY
                    </Typography>
                </Grid>
                <Grid xs={8} item>
                    <Typography
                        variant="h6"
                        color={theme.palette.primary.main}
                        textAlign={'center'}
                        fontWeight={'bold'}
                    >
                        Thư xin việc, CV nêu quá trình học tập và công tác.
                    </Typography>
                    <Typography
                        variant="h6"
                        color={theme.palette.primary.main}
                        textAlign={'center'}
                        fontWeight={'bold'}
                    >
                        Hãy liên hệ với chúng tôi.
                    </Typography>
                </Grid>

                <Grid
                    xs={10}
                    container
                    item
                    justifyContent={'center'}
                    sx={{ py: 2, paddingBottom: 4 }}
                >
                    <Grid
                        md={4}
                        xs={12}
                        item
                        container
                        sx={{ paddingBottom: { xs: 4, md: 0 } }}
                    >
                        <Grid
                            xs={12}
                            item
                            justifyContent={'center'}
                            container
                            sx={{ mb: 2 }}
                        >
                            <Image src={emailImg} alt="icon" />
                        </Grid>
                        <Grid xs={12} item justifyContent={'center'} container>
                            <Typography
                                variant="h5"
                                color={theme.palette.primary.main}
                                textAlign={'center'}
                                fontWeight={'bold'}
                            >
                                Email
                            </Typography>
                        </Grid>
                        <Grid xs={12} item justifyContent={'center'} container>
                            <Typography
                                variant="h6"
                                color={theme.palette.primary.main}
                                textAlign={'center'}
                            >
                                Gửi email cho chúng tôi ngay hôm nay!
                            </Typography>
                        </Grid>
                        <Grid xs={12} item justifyContent={'center'} container>
                            <Typography
                                variant="h6"
                                color={theme.palette.primary.main}
                                textAlign={'center'}
                            >
                                <u>honghac.trading@gmail.com</u>
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
                            <Image src={phoneImg} alt="icon" />
                        </Grid>
                        <Grid xs={12} item justifyContent={'center'} container>
                            <Typography
                                variant="h5"
                                color={theme.palette.primary.main}
                                textAlign={'center'}
                                fontWeight={'bold'}
                            >
                                Phone
                            </Typography>
                        </Grid>
                        <Grid xs={12} item justifyContent={'center'} container>
                            <Typography
                                variant="h6"
                                color={theme.palette.primary.main}
                                textAlign={'center'}
                            >
                                Hãy gọi cho chúng tôi ngay bây giờ!
                            </Typography>
                        </Grid>
                        <Grid xs={12} item justifyContent={'center'} container>
                            <Typography
                                variant="h6"
                                color={theme.palette.primary.main}
                                textAlign={'center'}
                            >
                                <u>0903667510</u>
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>

                <Typography
                    variant="h5"
                    textAlign={'center'}
                    fontWeight={'bold'}
                    color={theme.palette.primary.main}
                    sx={{ py: 2, paddingBottom: 6 }}
                >
                    Công ty nhận hồ sơ qua mail và thông báo phỏng vấn cho những
                    ứng viên đạt yêu cầu.
                </Typography>
            </Grid>
            <Footer />
        </ThemeProvider>
    );
}
