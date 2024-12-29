import { Metadata, ResolvingMetadata } from 'next';
import ActivityDetailComponent from './component/ActivityDetailComponent';
import { ApiPathEnum } from '@/api/api.path.enum';
import { ApiResponse } from '@/types/utils/api-response.interface';
import { IActivity } from '@/types/activities/activities.interface';
import axios from '@/api/axios.instance';

type Props = {
    params: { activityDetail: string };
    searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
    { params, searchParams }: Props,
    parent: ResolvingMetadata,
): Promise<Metadata> {
    const pathSplit = params.activityDetail?.split('-');
    const activityId = pathSplit[pathSplit.length - 1];

    const res = await axios.get<ApiResponse<IActivity>>(
        `${ApiPathEnum.Activity}/${activityId}`,
    );

    return {
        title: res.data?.data?.name,
        description: res.data?.data?.description,
    };
}

export default function ActivityDetail({ params, searchParams }: Props) {
    return <ActivityDetailComponent />;
}
