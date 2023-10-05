import axios, {type AxiosInstance, type AxiosRequestConfig, type AxiosResponse} from "axios";
import type {HttpRequest} from "@/http/HttpConfig";

const config: AxiosRequestConfig = {
    baseURL: 'https://dummyjson.com',
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
    }
}

export const axiosInstance: AxiosInstance = axios.create(config)

export const axiosHttp = <TRes, TReq = any> (config: HttpRequest<TReq>) => {
    return axiosInstance.request<any, AxiosResponse<TRes>>(config);
}

