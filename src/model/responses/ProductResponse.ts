import type {Product} from "@/entities/Product";

export interface ProductResponse {
    products: Array<Product>;
    limit: number;
    skip: number;
    total: number
}