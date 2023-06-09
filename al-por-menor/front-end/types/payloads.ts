import { Cadence } from "@/enums/enums";
import { IProduct } from "./responses";

interface IPayload {
    body: any;
    urlParams: any;
}

interface ILoginPayloadBody {
    email: string;
    password: string;
}

/**
 * Payload for the login request
 *
 * @class LoginPayload
 * @field {email} email of the user
 * @field {password} password of the user
 */
export class LoginPayload implements IPayload {
    body: ILoginPayloadBody = { email: "", password: ""};
    urlParams = null;
    constructor(body: ILoginPayloadBody) {
        body = body;
    }
}



//TO-DO cambiar estas interfaces a clases que usen el IPayload

/**
 * Payload for the register request
 *
 * @interface IRegisterPayload
 * @field {email} email of the user
 * @field {password} password of the user
 * @field {name} name of the user
 * @field {lastName} last name of the user
 * @field {address} address of the user
 * @field {city} city of the user
 */

export interface IRegisterPayload {
    email: string;
    password: string;
    name: string;
    lastName: string;
    address: string;
    city: string;
}

/**
 * Payload for the getProducts request
 *
 * @interface IGetProductsPayload
 * @field {name} user friendly name of the product
 * @field {category} category of the product
 * @field {price} price of the product
 * @field {brand} brand of the product
 * @field {showHiddenProducts} show hidden products flag to hide/show products that you are already subscribed to
 */
export interface IGetProductsPayload {
    name?: string;
    category?: string;
    price?: number;
    brand?: string;
    showHiddenProducts?: boolean;
}

 /**
  * Payload for the getSuscriptions request
  *
  * @interface IGetSuscriptionsPayload
  * @field {userId} id of the user
  * @field {subscriptionIds} ids of the subscriptions
  */
export interface IGetSubscriptionsPayload {
    userId: string;
    subscriptionIds?: Array<string>;
}

 /**
  * Payload for the deleteSuscription request
  *
  * @interface IDeleteSuscriptionPayload
  * @field {subscriptionId} id of the subscription
  */
export interface IDeleteSubscriptionPayload {
    subscriptionId: string;
}

 /**
  * Payload for the subscribe request
  *
  * @interface ISubscribePayload
  * @field {userId} id of the user
  * @field {productId} id of the product
  * @field {cadence} cadence of the subscription
  * @field {quantity} quantity of people for the subscription
  */
export interface ISubscribePayload {
    userId: string;
    productId: string;
    cadence?: Cadence; 
    quantity?: number;
}


 /**
  * Payload for the updateSuscription request
  *
  * @interface IUpdateSuscriptionPayload
  * @field {userId} id of the user
  * @field {subscriptionId} id of the subscription
  * @field {cadence} cadence of the subscription
  * @field {quantity} quantity of people for the subscription
  */
export interface IUpdateSubscriptionPayload {
    userId: string;
    subscriptionId: string;
    cadence?: Cadence;
    quantity?: number;
}

 /**
 * Payload for the modifyProduct request
 *
 * @interface IModifyProductPayload
 * @field {productId} id of the product
 * @field {name} user friendly name of the product
 * @field {description} description of the product
 * @field {category} category of the product
 * @field {price} price of the product
 * @field {brand} brand of the product
 * @field {imgUrl} image url of the product
 * @field {measurementUnit } unit of measure of the product
 * @field {productList} list of products, apply only to prodcut packs
 */
export interface IModifyProductPayload {
    productId: string;
    name?: string;
    description?: string;
    category?: string;
    price?: number;
    brand?: string;
    imgUrl?: string;
    measurementUnit ?: string;
    productList?: Array<IProduct>;
}
