import {axiosHttp} from "@/http/AxiosHttp";
import type {CategoryResponse} from "@/model/responses/CategoryResponse";
import type {CategoryRepository} from "@/repositories/CategoryRepository";
import type {Category} from "@/entities/Category";

export class CategoryRepositoryImpl implements CategoryRepository {
    private readonly endpoint: string = "/products/categories";

    public async getCategories(): Promise<Category[]> {
        try {
            const { data } = await axiosHttp<CategoryResponse>({
                method: "GET",
                url: this.endpoint
            });
            return <Category[]> <unknown> data;
        } catch (error) {
            throw(error);
        }
    }

}