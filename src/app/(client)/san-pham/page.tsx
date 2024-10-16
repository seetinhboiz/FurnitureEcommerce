import ProductComponent from "./components/ProductComponent";
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Sản phẩm',
    description: 'Sản phẩm ePioneer',
}

const Products = () => {
    return <ProductComponent />;
};

export default Products;
