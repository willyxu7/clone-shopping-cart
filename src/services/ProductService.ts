import {ProductRepositoryImpl} from "@/repositories/impl/ProductRepositoryImpl";
import type {Product} from "@/entities/Product";
import type ProductRepository from "@/repositories/ProductRepository";

const productRepository: ProductRepository = new ProductRepositoryImpl();

const getProducts =  async(): Promise<Product[]> => {
    return await productRepository.getProducts();
}

export {
    getProducts
}