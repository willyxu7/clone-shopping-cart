import {defineStore} from "pinia";
import type ProductRepository from "@/repositories/ProductRepository";
import {RepositoryFactory} from "@/repositories/RepositoryFactory";
import type {Product} from "@/entities/Product";

const productRepository: ProductRepository = RepositoryFactory.get("productRepository");
export const useProductStore = defineStore("product", {
   state: () => ({
      products: [] as Product[],
   }),
   actions: {
      async getProducts() {
         this.products = await productRepository.getProducts();
      }
   }
});