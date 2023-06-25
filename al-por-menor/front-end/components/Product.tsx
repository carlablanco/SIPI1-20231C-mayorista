"use client"

import React, { useContext, useEffect, useState } from 'react'
import '../app/(products)/products-list/ProductsStyles.css'
import Link from 'next/link'
import { IProductPromotion } from '@/types/responses'
import ProgressBar from './ProgressBar'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { getDateDifference } from '@/app/helpers/date.helper'
import UnitsSelector from './UnitsSelector'
import InfoIcon from '@mui/icons-material/Info';
import RemainingTime from './RemainingTime'
import swal from 'sweetalert'
import { Context } from '@/app/context/Context'

interface ProductProps {
  product: IProductPromotion
}


export const Product: React.FC<ProductProps> = ({product}) => {

  const { addItemToCart } = useContext(Context);

  const originalUnitsSold = product.unitsSold;

  const [selectedUnit, setSelectedUnit] = useState<number>(0);
  const [unitsSold, setUnitsSold] = useState<number>(product.unitsSold);
  const [currentPriceIndex, setCurrentPriceIndex] = useState<number>(0);

  const handleUnitChange = (newValue: number) => {
    setSelectedUnit(newValue);
    setUnitsSold(originalUnitsSold + newValue);
  };

  const [price, setPrice] = React.useState<number>(0);
  const [unitsNeeded, setUnitsNeeded] = React.useState<number>(0);
  const [progress, setProgress] = React.useState<number>(0);

  const getCurrentPrice = (priceList: any) => {
    let currentPrice = priceList[0].price;
    let currentUnitsNeeded = priceList[0].unitsNeeded;
    let nextUnitsNeeded = 0;
    let previousUnitsNeeded = 0;

    priceList.forEach((price: any) => {
      if (price.unitsNeeded <= unitsSold) {
        currentPrice = price.price;
      }
    });

    priceList.some((price: any, index: any) => {
      if (price.unitsNeeded > unitsSold) {
        currentUnitsNeeded = price.unitsNeeded - unitsSold;
        nextUnitsNeeded = price.unitsNeeded;
        previousUnitsNeeded = priceList[index - 1]?.unitsNeeded || 0;
        setCurrentPriceIndex(index);
        return true;
      }
    });
    setPrice(currentPrice);
    setUnitsNeeded(currentUnitsNeeded);
    if(nextUnitsNeeded === 0) setProgress(100);
    else if((price !== product.priceList[product.priceList?.length - 1].price) && (price != product?.priceList[0]?.price || ((price === product?.priceList[0]?.price && unitsSold === previousUnitsNeeded)) )) {
      setProgress(((unitsSold - previousUnitsNeeded)  / (nextUnitsNeeded - previousUnitsNeeded)) * 100);
    }
    else setProgress(((unitsSold)  / nextUnitsNeeded) * 100);
  }

  useEffect(() => {
    getCurrentPrice(product.priceList);
  }, [unitsSold]);


  const preventDefault = (event: React.SyntheticEvent) => event.preventDefault();


  function handleAddItemToCart(product:any) {
    if (selectedUnit === 0) {
      swal("Debes seleccionar al menos una unidad","","warning")
      return
    }
    else {
      addItemToCart(product, selectedUnit)
    }
  }
  

  return (
    <div className="group product-info-container" key={product.productId} data-aos="zoom-y-out">
        <Link href={{
          pathname: `product/${product.productId}`,
          query: { productId: product.productId },
          }} className='product-info'>
          <div className="prod-img-container overflow-hidden rounded-lg">
            <img src={product.imgUrl} alt="" className="group-hover:opacity-75"/>
          </div>
          <div className='product-data'>
            <h2 className="mt-4 text-xl font-bold text-gray-700">{product.name}</h2>
            {/* <RemainingTime remainingTime={remainingTime}/> */}
  
            
            {price != product.priceList[0]?.price && price !== product.priceList[product.priceList?.length - 1].price ? 
            <div>
              <p className="mt-1 text-lg font-medium text-gray-900">Precio Actual: ${price}</p>
              <p className='mt-1 text-lg font-medium text-green-900'>Precio Minimo Alcancable: ${ product.priceList[product.priceList?.length - 1].price} </p>
              { product.priceList?.length - currentPriceIndex > 1 ? 
              <p className="mt-1 text-lg font-medium text-green-900">¡Quedan {product.priceList?.length - currentPriceIndex} pasos para llegar al precio minimo!</p> : 
              <p className="mt-1 text-lg font-medium text-green-900">¡Solo queda {product.priceList?.length - currentPriceIndex} paso para llegar al precio minimo!</p>
              }
              <p className='text-1x1  text-gray-500 precio-original'>precio original: ${product.priceList[0]?.price}</p>
            </div> 
            : 
            progress === 100 ?
            <div>
              <p className='mt-1 text-lg font-medium text-green-900'>Precio Actual: ${price}</p>
              <p className="mt-1 text-lg font-medium text-green-900">¡Precio minimo obtenido!</p>
            </div>
            :
            <div>
              <p className='mt-1 text-lg font-medium text-gray-900'>Precio Actual: ${product.priceList[0]?.price}</p>
              <p className='mt-1 text-lg font-medium text-green-900'>Precio Minimo Alcancable: ${ product.priceList[product.priceList?.length - 1].price} </p>
              { product.priceList?.length - currentPriceIndex > 1 ? 
              <p className="mt-1 text-lg font-medium text-green-900">¡Quedan {product.priceList?.length - currentPriceIndex} pasos para llegar al precio minimo!</p> : 
              <p className="mt-1 text-lg font-medium text-green-900">¡Solo queda {product.priceList?.length - currentPriceIndex} paso para llegar al precio minimo!</p>
              }
            </div>
            }
            </div>

        </Link>
        <div onClick={preventDefault}>
        {progress < 100 ? <h3 className="mb-3 text-medium text-gray-700">¡Quedan {unitsNeeded}u. para que baje el precio!</h3> : null}
              <UnitsSelector
                selectedUnit={selectedUnit}
                handleUnitChange={handleUnitChange}
                min={0}
                max={1000 - product.unitsSold}
              />
              <ProgressBar progress={progress}/>
          <button onClick={() => handleAddItemToCart(product)} className="group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-blue-600 text-white hover:text-slate-100 hover:bg-blue-500 active:bg-blue-800 active:text-blue-100 focus-visible:outline-blue-600">Añadir al carrito</button>
        </div>

    </div>
  )
}
