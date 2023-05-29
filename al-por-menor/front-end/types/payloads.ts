import { Cadence } from "@/enums/enums";

/**
 * Payload for the login request
 *
 * @interface LoginPayload
 * @property {string} email - Email of the user
 * @property {string} password - Password of the user
 */
export interface LoginPayload {
    email: string;
    password: string;
  }
  
  /**
   * Payload for the register request
   *
   * @interface RegisterPayload
   * @property {string} email - Email of the user
   * @property {string} password - Password of the user
   * @property {string} name - Name of the user
   * @property {string} lastName - Last name of the user
   * @property {string} address - Address of the user
   * @property {string} city - City of the user
   */
  export interface RegisterPayload {
    email: string;
    password: string;
    name: string;
    lastName: string;
    address: string;
    city: string;
  }
  
  /**
   * Payload for the change password request
   *
   * @interface ChangePasswordPayload
   * @property {string} oldPassword - Old password of the user
   * @property {string} newPassword - New password of the user
   */
  export interface ChangePasswordPayload {
    oldPassword: string;
    newPassword: string;
  }
  
  /**
   * Payload for creating a user subscription
   *
   * @interface UserSubscriptionPayload
   * @property {string} [subscriptionId] - ID of the subscription (optional if it's a new subscription)
   * @property {string} cadence - Cadence of the subscription
   * @property {number} numberOfPeople - Number of people for the subscription
   */
  export interface UserSubscriptionPayload {
    subscriptionId?: string;
    cadence: Cadence;
    numberOfPeople: number;
  }
  
  /**
   * Payload for getting products
   *
   * @interface GetProductsPayload
   * @property {string} name - Name of the product
   * @property {string} brand - Brand of the product
   * @property {string} category - Category of the product
   * @property {string} price - Price of the product
   * @property {boolean} [showHiddenProducts] - Whether to show hidden products (default: false)
   */
  export interface GetProductsPayload {
    name: string;
    brand: string;
    category: string;
    price: string;
    showHiddenProducts?: boolean;
  }
  
  /**
   * Payload for creating a product
   *
   * @interface CreateProductPayload
   * @property {string} name - Name of the product
   * @property {string} description - Description of the product
   * @property {string} measurementUnit - Measurement unit of the product
   * @property {string} brand - Brand of the product
   * @property {string} category - Category of the product
   * @property {number} price - Price of the product
   * @property {string} image - Image of the product (replace with appropriate type, e.g., string or File)
   */
  export interface CreateProductPayload {
    name: string;
    description: string;
    measurementUnit: string;
    brand: string;
    category: string;
    price: number;
    image: string; // Replace with the appropriate type for the image (e.g., string or File)
  }
  
  /**
   * Payload for updating a product
   *
   * @interface UpdateProductPayload
   * @property {string} name - Name of the product
   * @property {string} description - Description of the product
   * @property {string} measurementUnit - Measurement unit of the product
   * @property {string} brand - Brand of the product
   * @property {string} category - Category of the product
   * @property {number} price - Price of the product
   * @property {string} image - Image of the product (replace with appropriate type, e.g., string or File)
   */
  export interface UpdateProductPayload {
    name: string;
    description: string;
    measurementUnit: string;
    brand: string;
    category: string;
    price: number;
    image: string; // Replace with the appropriate type for the image (e.g., string or File)
  }
  
  /**
   * Payload for adding a product to a subscription
   *
   * @interface AddProductToSubscriptionPayload
   * @property {string} productId - ID of the product
   * @property {number} quantity - Quantity of the product
   */
  export interface AddProductToSubscriptionPayload {
    productId: string;
    quantity: number;
  }
  
  /**
   * Payload for updating a subscription
   *
   * @interface UpdateSubscriptionPayload
   * @property {string} cadence - Cadence of the subscription
   * @property {number} numberOfPeople - Number of people for the subscription
   */
  export interface UpdateSubscriptionPayload {
    cadence: Cadence;
    numberOfPeople: number;
  }
  