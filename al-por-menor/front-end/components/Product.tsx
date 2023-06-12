"use client"

import React, { useEffect, useState } from 'react'
import '../app/(products)/products-list/ProductsStyles.css'
import Link from 'next/link'
import { IProductPromotion } from '@/types/responses'
import ProgressBar from './ProgressBar'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { getDateDifference } from '@/app/helpers/date.helper'
import UnitsSelector from './UnitsSelector'
import InfoIcon from '@mui/icons-material/Info';
import RemainingTime from './RemainingTime'

interface ProductProps {
  product: IProductPromotion
}


export const Product: React.FC<ProductProps> = ({product}) => {

  const originalUnitsSold = product.unitsSold;

  const [selectedUnit, setSelectedUnit] = useState<number>(0);
  const [unitsSold, setUnitsSold] = useState<number>(product.unitsSold);

  const handleUnitChange = (newValue: number) => {
    setSelectedUnit(newValue);
    setUnitsSold(originalUnitsSold + newValue);
  };

  const [price, setPrice] = React.useState<number>(0);
  const [unitsNeeded, setUnitsNeeded] = React.useState<number>(0);
  const [progress, setProgress] = React.useState<number>(0);
  const [remainingTime, setRemainingTime] = React.useState<any>(null);

  const getCurrentPrice = (priceList: any) => {
    let currentPrice = priceList[0].price;
    let currentUnitsNeeded = priceList[0].unitsNeeded;
    let nextUnitsNeeded = 0;

    priceList.forEach((price: any) => {
      if (price.unitsNeeded <= unitsSold) {
        currentPrice = price.price;
      }
    });

    priceList.some((price: any) => {
      if (price.unitsNeeded > unitsSold) {
        currentUnitsNeeded = price.unitsNeeded - unitsSold;
        nextUnitsNeeded = price.unitsNeeded;
        return true;
      }
    });
    setPrice(currentPrice);
    setUnitsNeeded(currentUnitsNeeded);
    if(nextUnitsNeeded === 0) setProgress(100);
    else setProgress((unitsSold / nextUnitsNeeded) * 100);
  }

  useEffect(() => {
    getCurrentPrice(product.priceList);
    setInterval(() => {
      setRemainingTime(getDateDifference(product.promotionEndDate));
    }, 1000);
  }, [unitsSold]);


  const preventDefault = (event: React.SyntheticEvent) => event.preventDefault();

  return (
    <Link href={{
      pathname: `product/${product.productId}`,
      query: { productId: product.productId },
      }} className="group" key={product.productId} data-aos="zoom-y-out">
        <div className='product-info'>
          <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
            <img src={product.imgUrl} alt="" className="h-full w-full object-cover object-center group-hover:opacity-75"/>
          </div>
          <h2 className="mt-4 text-xl font-bold text-gray-700">{product.name}</h2>
          {/* <RemainingTime remainingTime={remainingTime}/> */}

          <p className="mt-1 text-lg font-medium text-gray-900">Precio Actual: ${price}</p>
          <p className='text-1x1  text-gray-500'>precio original: ${product.priceList[0]?.price}</p>
          
          {progress === 100 ? <p className="mt-1 text-lg font-medium text-gray-900">¡Llegaste al precio mínimo!</p> : null}
          <div onClick={preventDefault}>
          <UnitsSelector
            selectedUnit={selectedUnit}
            handleUnitChange={handleUnitChange}
            min={0}
            max={1000 - product.unitsSold}
          />
          </div>
          {progress < 100 ? <h3 className="mt-4 text-medium text-gray-700">¡Quedan {unitsNeeded}u. para que baje el precio!</h3> : null}
          <ProgressBar progress={progress}/>
        </div>
        <button className="group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-blue-600 text-white hover:text-slate-100 hover:bg-blue-500 active:bg-blue-800 active:text-blue-100 focus-visible:outline-blue-600">Añadir al carrito</button>
    </Link>
  )
}
