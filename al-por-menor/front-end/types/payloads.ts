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
    price?: string;
    brand?: string;
}

export interface IGetSubscriptionsPayload {
    userId: string;
    subscriptionId?: string;
}

export interface IDeleteSubscriptionPayload {
    userId: string;
    subscriptionId: string;
}

export interface ISubcscriptionPayload {
    userId: string;
    productId: string;
    frecuency: string;
    quantity: number;
}

export interface IUpdateSubscriptionPayload {
    userId: string;
    subscriptionId: string;
    productId: string;
    frecuency: string;
    quantity: number;
}