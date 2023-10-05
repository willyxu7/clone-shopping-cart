import {defineStore} from "pinia";
import type {CategoryRepository} from "@/repositories/CategoryRepository";
import {RepositoryFactory} from "@/repositories/RepositoryFactory";
import {getCategories} from "@/services/CategoryService";
import type {Category} from "@/entities/Category";

const categoryRepository: CategoryRepository = RepositoryFactory.get("categoryRepository")

export const useCategoryStore = defineStore("category", {
    state: () => ({
        categories: [] as Category[]
    }),
    actions: {
        async getCategories() {
            this.categories = await categoryRepository.getCategories();
        }
    }
})