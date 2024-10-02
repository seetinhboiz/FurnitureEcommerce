import ActivityComponent from "./component/ActivityComponent";
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Activity',
    description: 'EPIONEER Activity',
}

const Activity = () => {
    return <ActivityComponent />;
};

export default Activity;
