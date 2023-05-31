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
  productList:[],
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
