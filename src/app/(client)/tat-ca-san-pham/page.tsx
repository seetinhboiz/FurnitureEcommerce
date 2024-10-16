import { Metadata } from 'next';
import AllProductComponent from './component/AllProductComponent';

export const metadata: Metadata = {
    title: 'Tất cả sản phẩm',
    description: 'Tất cả sản phẩm ePioneer',
};

const AllProduct = () => {
    return <AllProductComponent />;
};

export default AllProduct;
