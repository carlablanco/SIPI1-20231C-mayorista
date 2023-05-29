import { Cadence } from "@/enums/enums";

 /**
  * Response of the getProducts request
  *
  * @interface IGetProductsResponse
  * @field {products} list of products
  */
export interface IGetProductsResponse {
    products: IProduct[];
}

 /**
  * Product Interface
  *
  * @interface IProduct
  * @field {productId} id of the product
  * @field {name} user friendly name of the product
  * @field {description} description of the product
  * @field {category} category of the product
  * @field {price} price of the product
  * @field {brand} brand of the product
  * @field {imgUrl} image url of the product
  * @field {measurementUnit } unit of measure of the product
  * @field {supplier} supplier of the product
  * @field {productList} list of products, apply only to product packs
  * 
  */
export interface IProduct {
    productId: string;
    name?: string;
    description?: string;
    category?: string;
    price?: number;
    brand?: string;
    imgUrl?: string;
    measurementUnit ?: string;
    supplier?: string;
    productList: IProduct[];
}

 /**
  * Response of the getSubscriptions request
  *
  * @interface IGetSubscriptionsResponse
  * @field {subscriptions} list of subscriptions
  */
export interface IGetSubscriptionsResponse {
    subscriptions: ISubscription[];
}

 /**
  * Inter\face for the subscription
  *
  * @interface ISubscription
  * @field {subscriptionId} id of the subscription
  * @field {userId} id of the user subscribed
  * @field {productName} name of the product
  * @field {cadence} cadence of the subscription
  * @field {numberOfPeople} number of people for the subscription
  * @field {price} price of the subscription
  * @field {imgUrl} image url of the subscription
  */

export interface ISubscription {
    subscriptionId: string;
    userId: string;
    name:string,
    cadence: Cadence;
    numberOfPeople: number;
    price: number;
    imgUrl: string;
}