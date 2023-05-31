import React from 'react'
import '../app/(subscriptions)/subscription-list/SubscriptionStyles.css'
import Link from 'next/link'


export const Subscription = ({subscription}: any) => {
  return (
    <Link href={`subscripcion/${subscription.subscriptionId}`} className="group" key={subscription.subscriptionId} data-aos="zoom-y-out">
        <div className='product-info'>
          <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
            <img src="https://previews.123rf.com/images/prettyvectors/prettyvectors1605/prettyvectors160500174/56975107-alimentos-en-paquete-entrega-de-comida-vector-ilustraci%C3%B3n-de-dibujos-animados-plana.jpg" alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." className="h-full w-full object-cover object-center group-hover:opacity-75"/>
          </div>
          <h3 className="mt-4 text-medium text-gray-700">{subscription.name}</h3>
          <p className="mt-1 text-lg font-medium text-gray-900">${subscription.price}</p>
        </div>
        <button className="group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-blue-600 text-white hover:text-slate-100 hover:bg-blue-500 active:bg-blue-800 active:text-blue-100 focus-visible:outline-blue-600">Subscribirme</button>
    </Link>
  )
}
