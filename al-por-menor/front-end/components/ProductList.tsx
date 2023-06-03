import React from 'react'
import { Product } from './Product'
import '../app/(subscriptions)/subscription-list/SubscriptionStyles.css'
import { IProductPromotion, ISubscription } from '@/types/responses'


export function ProductList(this: any) {

  const addDays = (days: any) => {
    var date = new Date();
    date.setDate(date.getDate() + days);
    return new Date(date);
  }
  

  let products: Array<IProductPromotion> = [
    {
      productId: "1",
      name: "Tomate",
      priceList: [
        {
          price: 100,
          unitsNeeded: 0,
        },
        {
          price: 90,
          unitsNeeded: 5,
        },
        {
          price: 80,
          unitsNeeded: 10,
        },
      ],
      imgUrl: "https://images.unsplash.com/photo-1612837017391-4b6b7b0b0b0b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydGZvbGlvfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
      publishDate: new Date(),
      endDate: addDays(3),
      description: "Tomate de la huerta",
      brand: "La huerta de Juan",
      category: "Verduras",
      supplier: "La huerta de Juan",
      unitsSold: 2,
    },
    {
      productId: "2",
      name: "Lechuga",
      priceList: [
        {
          price: 100,
          unitsNeeded: 0,
        },
        {
          price: 90,
          unitsNeeded: 5,
        },
        {
          price: 80,
          unitsNeeded: 10,
        },
      ],
      imgUrl: "https://images.unsplash.com/photo-1612837017391-4b6b7b0b0b0b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydGZvbGlvfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
      publishDate: new Date(),
      endDate: addDays(5),
      description: "Lechuga de la huerta",
      brand: "La huerta de Juan",
      category: "Verduras",
      supplier: "La huerta de Juan",
      unitsSold: 8,
    },
    {
      productId: "3",
      name: "Papa",
      priceList: [
        {
          price: 100,
          unitsNeeded: 0,
        },
        {
          price: 90,
          unitsNeeded: 5,
        },
        {
          price: 80,
          unitsNeeded: 10,
        },
      ],
      imgUrl: "https://images.unsplash.com/photo-1612837017391-4b6b7b0b0b0b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydGZvbGlvfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
      publishDate: new Date(),
      endDate: addDays(10),
      description: "Papa de la huerta",
      brand: "La huerta de Juan",
      category: "Verduras",
      supplier: "La huerta de Juan",
      unitsSold: 1,
    },

  ]

  return (
    <div className='product-list'>
        <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>

          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {
            products.map((product: IProductPromotion, index: any) => {
              return (
                <Product key={index} product={product}/>
              )
            })
          }
          </div>
        </div>
      </div>
    </div>
  )
}
