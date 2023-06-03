import { Cadence } from "@/enums/enums";



interface IResponse{
    status: number;
    message: string;
}

 /**
  * Response of the getProducts request
  *
  * @interface IGetProductsResponse
  * @field {products} list of products
  */
export interface IGetProductsResponse extends IResponse {
    response: {
      products: IProduct[]
    };
}

//TO-DO Mover esto a otro lado, en realidad no son responses

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

export interface IPriceList {
  price: number;
  unitsNeeded: number;
}

export interface IProductPromotion {
  productId: string;
  name?: string;
  description?: string;
  category?: string;
  priceList?: IPriceList[];
  brand?: string;
  imgUrl?: string;
  measurementUnit ?: string;
  supplier?: string;
  publishDate?: Date;
  endDate?: Date;
  unitsSold: number;
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
  * @field {name} name of the susbcription
  * @field {cadence} cadence of the subscription
  * @field {numberOfPeople} number of people for the subscription
  * @field {price} price of the subscription
  * @field {imgUrl} image url of the subscription
  * @field {productList} list of products for the subscription
  */
export interface ISubscription {
    subscriptionId: string;
    userId?: string;
    name: string;
    cadence: Cadence;
    numberOfPeople: number;
    price: number;
    imgUrl: string;
    productList: Array<IProduct>;
}