import type ProductRepository from "@/repositories/ProductRepository";
import type {ProductResponse} from "@/model/responses/ProductResponse";
import type {Product} from "@/entities/Product";
import {axiosHttp} from "@/http/AxiosHttp";

export class ProductRepositoryImpl implements ProductRepository {
    public async getProducts(): Promise<Product[]> {
        try {
            const response = await axiosHttp<ProductResponse>({
                method: "GET",
                url: "/products"
            });
            return response.data.products;
        } catch (error) {
            throw(error);
        }
    }

}