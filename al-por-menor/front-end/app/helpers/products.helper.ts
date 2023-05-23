import { IProduct } from "@/types/responses";


 /**
  * Helper function to get the packs from a list of products
  *
  * @method getPacks
  * @param {products} list of products(including packs and individual products)
  * @returns {IProduct[]} list of packs
  * @description returns a list of packs
  * @public
  * @version 1.0.0
  * @example
  * getPacks(products);
  */
export const getPacks = (products: IProduct[]): IProduct[] => {
    return products.filter(product => product?.productList?.length > 0);
};


 /**
  * Helper function to get the individual products from a list of products
  *
  * @method getPacks
  * @param {products} list of products(including packs and individual products)
  * @returns {IProduct[]} list of products
  * @description returns a list of individual products
  * @public
  * @version 1.0.0
  * @example
  * getIndividualProducts(products);
  */
export const getIndividualProducts = (products: IProduct[]): IProduct[] => {
    return products.filter(product => product?.productList?.length === 0);
}