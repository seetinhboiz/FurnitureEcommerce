import { Metadata } from 'next';
import ServiceAfterExhibitionComponent from './component/ServiceAfterExhibitionComponent';

export const metadata: Metadata = {
    title: 'Dịch vụ sau triển lãm',
    description: 'Dịch vụ sau triển lãm',
};

const ServiceAfterExhibition = () => {
    return <ServiceAfterExhibitionComponent />;
};

export default ServiceAfterExhibition;
