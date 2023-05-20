import React from 'react'
import { Product } from './Product'
import '../app/(productos)/product-list/ProductsStyles.css'
import { IProduct } from '@/types/responses'


export const ProductList = () => {

    let products: Array<IProduct> = [{
        productId: "1",
        imgUrl: "URL producto 1",
        name: "Producto 1",
        description: "Descripción del producto 1",
        unitOfMeasure: "kg",
        brand: "Marca 1",
        provider: "Empresa 1",
        category: "Categoría 1",
        price: 100,
    },
    {
        productId: "2",
        name: "Producto 2",
        description: "Descripción del producto 2",
        unitOfMeasure: "kg",
        brand: "Marca 2",
        provider: "Empresa 2",
        category: "Categoría 2",
        price: 200,
    },
    {
        productId: "3",
        name: "Producto 3",
        description: "Descripción del producto 3",
        unitOfMeasure: "kg",
        brand: "Marca 3",
        provider: "Empresa 3",
        category: "Categoría 3",
        price: 300,
    },
    {
        productId: "4",
        name: "Producto 4",
        description: "Descripción del producto 4",
        unitOfMeasure: "kg",
        brand: "Marca 4",
        provider: "Empresa 4",
        category: "Categoría 4",
        price: 400,
    },
    {
        productId: "5",
        name: "Producto 5",
        description: "Descripción del producto 5",
        unitOfMeasure: "kg",
        brand: "Marca 5",
        provider: "Empresa 5",
        category: "Categoría 5",
        price: 500,
    },
    {
        productId: "6",
        name: "Producto 6",
        description: "Descripción del producto 6",
        unitOfMeasure: "kg",
        brand: "Marca 6",
        provider: "Empresa 6",
        category: "Categoría 6",
        price: 600,
    },
    {
        productId: "7",
        name: "Producto 7",
        description: "Descripción del producto 7",
        unitOfMeasure: "kg",
        brand: "Marca 7",
        provider: "Empresa 7",
        category: "Categoría 7",
        price: 700,
    },
    {
        productId: "8",
        name: "Producto 8",
        description: "Descripción del producto 8",
        unitOfMeasure: "kg",
        brand: "Marca 8",
        provider: "Empresa 8",
        category: "Categoría 8",
        price: 800,
    },
    {
        productId: "9",
        name: "Producto 9",
        description: "Descripción del producto 9",
        unitOfMeasure: "kg",
        brand: "Marca 9",
        provider: "Empresa 9",
        category: "Categoría 9",
        price: 900,
    },
    {
        productId: "10",
        name: "Producto 10",
        description: "Descripción del producto 10",
        unitOfMeasure: "kg",
        brand: "Marca 10",
        provider: "Empresa 10",
        category: "Categoría 10",
        price: 1000,
    },
    {
        productId: "11",
        name: "Producto 11",
        description: "Descripción del producto 11",
        unitOfMeasure: "kg",
        brand: "Marca 11",
        provider: "Empresa 11",
        category: "Categoría 11",
        price: 1100,
    },
    {
        productId: "12",
        name: "Producto 12",
        description: "Descripción del producto 12",
        unitOfMeasure: "kg",
        brand: "Marca 12",
        provider: "Empresa 12",
        category: "Categoría 12",
        price: 1200,
    },
  ]

  return (
    <div className='product-list'>
        <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>

          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {
            products.map((product, index) => {
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
