import React from 'react'
import { Product } from './Product'
import '../app/(productos)/product-list/ProductsStyles.css'
import { IProduct } from '@/types/responses'


export function ProductList() {

  let products: Array<IProduct> = [
    {
        productId: '1',
        name: "Pack 1",
        description: "Descripción del producto 1",
        unitOfMeasure: "kg",
        brand: "Marca 1",
        provider: "Empresa 1",
        category: "Categoría 1",
        price: 100,
        productList:[]
    },
    {
        productId: "2",
        name: "Pack 2",
        description: "Descripción del producto 2",
        unitOfMeasure: "kg",
        brand: "Marca 2",
        provider: "Empresa 2",
        category: "Categoría 2",
        price: 200,
        productList:[]
    },
    {
        productId: '3',
        name: "Pack 3",
        description: "Descripción del producto 3",
        unitOfMeasure: "kg",
        brand: "Marca 3",
        provider: "Empresa 3",
        category: "Categoría 3",
        price: 300,
        productList:[]
    },
    {
        productId: '4',
        name: "Pack 4",
        description: "Descripción del producto 4",
        unitOfMeasure: "kg",
        brand: "Marca 4",
        provider: "Empresa 4",
        category: "Categoría 4",
        price: 400,
        productList:[]
    },
    {
        productId: '5',
        name: "Pack 5",
        description: "Descripción del producto 5",
        unitOfMeasure: "kg",
        brand: "Marca 5",
        provider: "Empresa 5",
        category: "Categoría 5",
        price: 500,
        productList:[]
    },
    {
        productId: '6',
        name: "Pack 6",
        description: "Descripción del producto 6",
        unitOfMeasure: "kg",
        brand: "Marca 6",
        provider: "Empresa 6",
        category: "Categoría 6",
        price: 600,
        productList:[]
    },
    {
        productId: '7',
        name: "Pack 7",
        description: "Descripción del producto 7",
        unitOfMeasure: "kg",
        brand: "Marca 7",
        provider: "Empresa 7",
        category: "Categoría 7",
        price: 700,
        productList:[]
    },
    {
        productId: '8',
        name: "Pack 8",
        description: "Descripción del producto 8",
        unitOfMeasure: "kg",
        brand: "Marca 8",
        provider: "Empresa 8",
        category: "Categoría 8",
        price: 800,
        productList:[]
    },
    {
        productId: '9',
        name: "Pack 9",
        description: "Descripción del producto 9",
        unitOfMeasure: "kg",
        brand: "Marca 9",
        provider: "Empresa 9",
        category: "Categoría 9",
        price: 900,
        productList:[]
    },
    {
        productId: '10',
        name: "Pack 10",
        description: "Descripción del producto 10",
        unitOfMeasure: "kg",
        brand: "Marca 10",
        provider: "Empresa 10",
        category: "Categoría 10",
        price: 1000,
        productList:[]
    },
    {
        productId: '11',
        name: "Pack 11",
        description: "Descripción del producto 11",
        unitOfMeasure: "kg",
        brand: "Marca 11",
        provider: "Empresa 11",
        category: "Categoría 11",
        price: 1100,
        productList:[]
    },
    {
        productId: '12',
        name: "Pack 12",
        description: "Descripción del producto 12",
        unitOfMeasure: "kg",
        brand: "Marca 12",
        provider: "Empresa 12",
        category: "Categoría 12",
        price: 1200,
        productList:[]
    },
  ]

  return (
    <div className='product-list'>
        <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>

          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {
            products.map((product: IProduct, index) => {
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
