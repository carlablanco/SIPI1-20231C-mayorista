import React from 'react'
import { Subscription } from './Subscription'
import '../app/(subscriptions)/subscription-list/SubscriptionStyles.css'
import { ISubscription } from '@/types/responses'
import { Cadence } from '@/enums/enums'


export function SubscriptionList() {

  let subscriptions: Array<ISubscription> = [
    {
        subscriptionId: '1',
        name: "Pack 1",
        cadence: Cadence.MONTHLY,
        price: 100,
        productList:[],
        numberOfPeople: 1,
        imgUrl: "https://images.unsplash.com/photo-1612837017391-4b6b7b0b0b0b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydGZvbGlvfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
    },
    {
      subscriptionId: '2',
      name: "Pack 2",
      cadence: Cadence.MONTHLY,
      price: 100,
      productList:[],
      numberOfPeople: 1,
      imgUrl: "https://images.unsplash.com/photo-1612837017391-4b6b7b0b0b0b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydGZvbGlvfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
    },
    {
      subscriptionId: '3',
      name: "Pack 3",
      cadence: Cadence.MONTHLY,
      price: 100,
      productList:[],
      numberOfPeople: 1,
      imgUrl: "https://images.unsplash.com/photo-1612837017391-4b6b7b0b0b0b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydGZvbGlvfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
    },
    {
      subscriptionId: '4',
      name: "Pack 4",
      cadence: Cadence.MONTHLY,
      price: 100,
      productList:[],
      numberOfPeople: 1,
      imgUrl: "https://images.unsplash.com/photo-1612837017391-4b6b7b0b0b0b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydGZvbGlvfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
    },
    {
      subscriptionId: '5',
      name: "Pack 5",
      cadence: Cadence.MONTHLY,
      price: 100,
      productList:[],
      numberOfPeople: 1,
      imgUrl: "https://images.unsplash.com/photo-1612837017391-4b6b7b0b0b0b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydGZvbGlvfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
    },
  ]

  return (
    <div className='product-list'>
        <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>

          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {
            subscriptions.map((subscription: ISubscription, index) => {
              return (
                <Subscription key={index} subscription={subscription}/>
              )
            })
          }
          </div>
        </div>
      </div>
    </div>
  )
}
