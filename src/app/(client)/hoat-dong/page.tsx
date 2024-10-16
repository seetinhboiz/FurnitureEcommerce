import ActivityComponent from "./component/ActivityComponent";
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Hoạt động',
    description: 'Hoạt động ePioneer',
}

const Activity = () => {
    return <ActivityComponent />;
};

export default Activity;
