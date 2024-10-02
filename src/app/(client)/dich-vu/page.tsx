import ServiceComponent from "./component/ServiceComponent";
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Service',
    description: 'EPIONEER Service',
}

const Service = () => {
    return <ServiceComponent />;
};

export default Service;
