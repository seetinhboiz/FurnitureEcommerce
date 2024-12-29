import { IImage } from '@/types/products/products.interface';

export interface IActivity {
    _id?: string;
    name: string;
    description: string;
    images: IImage[];
}
