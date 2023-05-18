import { Frecuency } from "@/enum/enums";

export interface IGetProductsResponse {
    products: IProduct[];
}

export interface IProduct {
    productId: string;
    name?: string;
    description?: string;
    category?: string;
    price?: number;
    brand?: string;
    imgUrl?: string;
    unitOfMeasure?: string;
}

export interface IGetSubscriptionsResponse {
    subscriptions: ISubscription[];
}

export interface ISubscription {
    subscriptionId: string;
    productName?: string;
    frecuency?: Frecuency;
    quantity?: number;
    price?: number;
    imgUrl?: string;
}