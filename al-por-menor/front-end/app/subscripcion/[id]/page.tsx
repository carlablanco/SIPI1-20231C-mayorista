'use client'
import React from 'react'
import { useParams } from 'react-router-dom'
import { IndividualProduct } from '@/components/IndividualProduct'
import Footer from '@/components/ui/footer'
import { products } from '../../../mock/mockdata'

export const Subscripcion: React.FC = () => {
  const { id } = useParams<{ id: string }>()

  const product = products.find(product => product.productId === id)

  if (!product) {
    return <div>Product not found.</div>
  }

  return (
    <div>
      <IndividualProduct id={product.productId} product={product}/>
      <Footer/>
    </div>
  )
}

export default Subscripcion;
