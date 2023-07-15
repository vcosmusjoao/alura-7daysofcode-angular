export interface ApiReturn<T> {
    count: number;
    next: null;
    previous: null;
    results: T[];
}