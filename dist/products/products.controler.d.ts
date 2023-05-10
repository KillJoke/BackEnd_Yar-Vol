import { ProductService } from "./products.service";
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
    addProduct(prodTitle: string, prodDesc: string, prodPrice: number): any;
    getAllProducts(): import("./products.model").Product[];
    getProduct(prodId: string): [import("./products.model").Product, number];
    updateProduct(prodId: string, prodTitle: string, prodDesc: string, prodPrice: number): any;
}
