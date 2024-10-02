import { Metadata, ResolvingMetadata } from 'next';
import ActivityDetailComponent from './component/ActivityDetailComponent';
import { activities } from '@/app/static';

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

    const activity = activities.find(
        (activity) => activity.id.toString() === activityId,
    );

    return {
        title: activity?.title,
        description: activity?.subtitle,
    };
}

export default function ActivityDetail({ params, searchParams }: Props) {
    return <ActivityDetailComponent />;
}
