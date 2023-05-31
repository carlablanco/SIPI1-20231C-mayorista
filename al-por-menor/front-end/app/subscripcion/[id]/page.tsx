import React from 'react'
import Sub from '@/components/sub'
import Footer from '@/components/ui/footer'
import { ISubscription } from '@/types/responses'
import { Cadence } from '@/enums/enums'

interface SubscripcionProps {
  subscriptionId: string
}


export const Subscripcion: React.FC<SubscripcionProps> = ({subscriptionId}) => {
  
  ``
const subscription: ISubscription = {
  subscriptionId: subscriptionId,
  name: "Pack 1",
  cadence: Cadence.MONTHLY,
  price: 100,
  productList:
  [
      {
        productId: "1",
        name: "- Tomate",
        price: 100,
        imgUrl: "https://images.unsplash.com/photo-1612837017391-4b6b7b0b0b0b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydGZvbGlvfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
      },
      {
        productId: "2",
        name: "- Lechuga",
        price: 100,
        imgUrl: "https://images.unsplash.com/photo-1612837017391-4b6b7b0b0b0b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydGZvbGlvfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
      },
      {
        productId: "3",
        name: "- Papa",
        price: 100,
        imgUrl: "https://images.unsplash.com/photo-1612837017391-4b6b7b0b0b0b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydGZvbGlvfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
      },
  ],
  numberOfPeople: 1,
  imgUrl: "https://previews.123rf.com/images/prettyvectors/prettyvectors1605/prettyvectors160500174/56975107-alimentos-en-paquete-entrega-de-comida-vector-ilustraci%C3%B3n-de-dibujos-animados-plana.jpg"
}

  return (
    <div>
        <Sub id={subscription.subscriptionId} subscription={subscription}/>
        <Footer/>
    </div>
  )
}

export default Subscripcion;
