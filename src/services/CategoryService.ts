import {CategoryRepositoryImpl} from "@/repositories/impl/CategoryRepositoryImpl";
import type {CategoryRepository} from "@/repositories/CategoryRepository";
import type {Category} from "@/entities/Category";

const categoryRepository: CategoryRepository = new CategoryRepositoryImpl();

export const getCategories = async (): Promise<Category[]> => {
    const categories = await categoryRepository.getCategories();
    console.log(categories);
    return categories;
}