import { Frecuency } from "@/enums/enums";

export interface ILoginPayload {
    email: string;
    password: string;
}

export interface IRegisterPayload {
    email: string;
    password: string;
    name: string;
    lastName: string;
    address: string;
    city: string;
}

export interface IGetProductsPayload {
    name?: string;
    category?: string;
    price?: number;
    brand?: string;
}

export interface IGetSubscriptionsPayload {
    userId: string;
    subscriptionId?: Array<string>;
}

export interface IDeleteSubscriptionPayload {
    userId: string;
    subscriptionId: string;
}

export interface ISubcscriptionPayload {
    userId: string;
    productId: string;
    frecuency?: Frecuency; 
    quantity?: number;
}

export interface IUpdateSubscriptionPayload {
    userId: string;
    subscriptionId: string;
    frecuency?: Frecuency;
    quantity?: number;
}

export interface IModifyProductPayload {
    productId: string;
    name?: string;
    description?: string;
    category?: string;
    price?: number;
    brand?: string;
    imgUrl?: string;
    unitOfMeasure?: string;
}
