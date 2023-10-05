export interface HttpRequest<T> {
    method: string,
    url: string,
    data?: T
}
