import App from "@/App.vue";

type Category = string;

export interface Product {
    id: string;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: Category;

    images: string[];
}