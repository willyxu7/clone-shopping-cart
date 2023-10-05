import type {Product} from "@/entities/Product";

export default interface ProductRepository {
    getProducts(): Promise<Product[]>;
}