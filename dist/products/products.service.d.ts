import { Product } from "./products.model";
export declare class ProductService {
    private products;
    insertProduct(title: string, desc: string, price: number): string;
    getProducts(): Product[];
    getSingleProduct(productId: string): [Product, number];
    updateProduct(productId: string, title: string, desc: string, price: number): void;
    private findProduct;
}
