"use client"

import React, { useContext } from 'react'
import Sub from '@/components/sub'
import Footer from '@/components/ui/footer'
import { IProductPromotion } from '@/types/responses'
import { NextPage } from 'next'
import { products } from '@/mock/mockdata'
import { useRouter } from 'next/navigation'

const defautProduct: IProductPromotion = {
  productId: '0',
  name: '',
  description: '',
  imgUrl: '',
  unitsSold: 0,
  priceList: [],
  brand: '',
  measurementUnit: '',
  supplyingCompany: '',
  promotionStartDate: new Date(),
  promotionEndDate: new Date(),
}

export default function Product({params}: {params: { id: string }}) {
  return (
    <div>
    <Sub id={params.id}/>
    <Footer/>
  </div>
  );
}

