"use client"

import React, { useEffect, useState } from 'react'
import '../app/product/[id]/styles.css'
import {IProductPromotion } from '@/types/responses'
import Link from 'next/link'
import UnitsSelector from './UnitsSelector'
import ProgressBar from './ProgressBar'
import { getDateDifference } from '@/app/helpers/date.helper'
import { products } from '@/mock/mockdata'


interface ProductProps {
    id: string
}

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



export const Sub: React.FC<ProductProps> = ({id}) => {

    const product = products.find((product) => product.productId === id) || defautProduct;
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
        let currentPrice = priceList[0]?.price;
        let currentUnitsNeeded = priceList[0]?.unitsNeeded;
        let nextUnitsNeeded = 0;

        priceList.forEach((price: any) => {
            if (price.unitsNeeded <= unitsSold) {
                currentPrice = price.price;
            }
        });

        priceList.some((price: any) => {
            if (price?.unitsNeeded > unitsSold) {
                currentUnitsNeeded = price?.unitsNeeded - unitsSold;
                nextUnitsNeeded = price?.unitsNeeded;
                return true;
            }
        });
        setPrice(currentPrice);
        setUnitsNeeded(currentUnitsNeeded);
        if (nextUnitsNeeded === 0) setProgress(100);
        else setProgress((unitsSold / nextUnitsNeeded) * 100);
    }

    const preventDefault = (event: React.SyntheticEvent) => event.preventDefault();
    useEffect(() => {
        getCurrentPrice(product.priceList);
    }, [unitsSold]);

    return (
        <div className='sub-container'>
            <div className='sub'>
                <div className="flex w-full transform text-left text-base transition ">
                    <div className="relative flex w-full items-center overflow-hidden bg-white px-4 pb-8 pt-14 sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                        <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
                            <div className="aspect-h-3 aspect-w-2 overflow-hidden rounded-lg bg-gray-100 sm:col-span-4 lg:col-span-5">
                                <img src={product.imgUrl} alt="Two each of gray, white, and black shirts arranged on table." className="object-cover object-center" />
                            </div>
                            <div className="sm:col-span-8 lg:col-span-7">
                                <h2 className="text-2xl font-bold text-gray-900 sm:pr-12">{product.name}</h2>

                                <section aria-labelledby="information-heading" className="mt-2">
                                    <h3 id="information-heading" className="sr-only">Product information</h3>

                                    <p className="text-3xl text-gray-900">${price}</p>
                                    <p className='text-1x1  text-gray-500'>precio original: ${product.priceList[0]?.price}</p>

                                    <div className='pack-content'>
                                        <h3 >Descripcion:</h3>
                                        {product.description}
                                    </div>

                                    <div className="mt-6">
                                        <div className="flex items-center">
                                            <div className="flex items-center">

                                                <svg className="text-gray-900 h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                    <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                                                </svg>
                                                <svg className="text-gray-900 h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                    <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                                                </svg>
                                                <svg className="text-gray-900 h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                    <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                                                </svg>
                                                <svg className="text-gray-900 h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                    <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                                                </svg>
                                                <svg className="text-gray-200 h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                    <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                            <p className="sr-only">3.9 out of 5 stars</p>
                                            <a href="#" className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">117 reseñas</a>
                                        </div>
                                    </div>
                                </section>
                                <div onClick={preventDefault}>
                                    <UnitsSelector
                                        selectedUnit={selectedUnit}
                                        handleUnitChange={handleUnitChange}
                                        min={0}
                                        max={100}
                                    />
                                </div>
                                {progress < 100 ? <h3 className="mt-4 text-medium text-gray-700">¡Quedan {unitsNeeded}u. para que baje el precio!</h3> : null}
                                <ProgressBar progress={progress} />
                                <Link href={"/pago-envio"} className="btn-sub mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Agregar al carrito</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sub;
