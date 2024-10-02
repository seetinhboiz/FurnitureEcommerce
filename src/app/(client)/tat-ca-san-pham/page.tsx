import { Metadata } from 'next';
import AllProductComponent from './component/AllProductComponent';

export const metadata: Metadata = {
    title: 'All Product',
    description: ' EPIONEER All Product',
};

const AllProduct = () => {
    return <AllProductComponent />;
};

export default AllProduct;
