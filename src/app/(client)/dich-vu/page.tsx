import ServiceComponent from "./component/ServiceComponent";
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Dịch vụ',
    description: 'Dịch vụ ePioneer',
}

const Service = () => {
    return <ServiceComponent />;
};

export default Service;
