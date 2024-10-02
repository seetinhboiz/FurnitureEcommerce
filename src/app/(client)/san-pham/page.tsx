import ProductComponent from "./components/ProductComponent";
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Product',
    description: 'EPIONEER Product',
}

const Products = () => {
    return <ProductComponent />;
};

export default Products;
