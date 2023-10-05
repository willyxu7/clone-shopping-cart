import {defineStore} from "pinia";
import type {Product} from "@/entities/Product";
import type {Category} from "@/entities/Category";
import {useProductStore} from "@/store/product";
import {useCategoryStore} from "@/store/category";

export const useHomeStore = defineStore("home", {
    state: () => ({
        products: [] as Product[],
        categories: [] as Category[],
        isLoading: false,
    }),
    actions: {
        async initStateValue() {
            this.isLoading = true;
            const productStore = useProductStore();
            const categoryStore= useCategoryStore();

            this.products = productStore.products;
            this.categories = categoryStore.categories;
            this.isLoading = false;
        }
    }
})