import { Metadata, ResolvingMetadata } from 'next';
import RecruitmentDetailComponent from './component/RecruitmentDetailComponent';
import axios from '@/api/axios.instance';
import { ApiResponse } from '@/types/utils/api-response.interface';
import { IJobAds } from '@/types/job-ads/job-ads.interface';
import { ApiPathEnum } from '@/api/api.path.enum';

type Props = {
    params: { recruitmentDetail: string };
    searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
    { params, searchParams }: Props,
    parent: ResolvingMetadata,
): Promise<Metadata> {
    const pathSplit = params.recruitmentDetail.split('-');
    const jobAdsId = pathSplit[pathSplit.length - 1];

    // fetch data
    const res = await axios.get<ApiResponse<IJobAds>>(
        `${ApiPathEnum.JobAds}/${jobAdsId}`,
    );

    return {
        title: res.data.data?.title,
        description: res.data.data?.name,
    };
}

export default function RecruitmentDetail() {
    return <RecruitmentDetailComponent />;
}
