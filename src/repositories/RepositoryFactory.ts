import {ProductRepositoryImpl} from "@/repositories/impl/ProductRepositoryImpl";
import {CategoryRepositoryImpl} from "@/repositories/impl/CategoryRepositoryImpl";

const repositories: object = {
    productRepository: new ProductRepositoryImpl(),
    categoryRepository: new CategoryRepositoryImpl(),
}

export class RepositoryFactory {
    static get(name: string) {
        return repositories[name as keyof typeof repositories];
    }
}