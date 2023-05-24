import React from 'react'
import { Product } from './Product'
import '../app/(productos)/product-list/ProductsStyles.css'


export function ProductList() {

  console.log('test change');

  let products = [
    {
        id: 1,
        nombre: "Producto 1",
        descripción: "Descripción del producto 1",
        unidad_de_medicion: "kg",
        marca: "Marca 1",
        empresa_proveedora: "Empresa 1",
        categoría: "Categoría 1",
        precio: 100,
    },
    {
        id: 2,
        nombre: "Producto 2",
        descripción: "Descripción del producto 2",
        unidad_de_medicion: "kg",
        marca: "Marca 2",
        empresa_proveedora: "Empresa 2",
        categoría: "Categoría 2",
        precio: 200,
    },
    {
        id: 3,
        nombre: "Producto 3",
        descripción: "Descripción del producto 3",
        unidad_de_medicion: "kg",
        marca: "Marca 3",
        empresa_proveedora: "Empresa 3",
        categoría: "Categoría 3",
        precio: 300,
    },
    {
        id: 4,
        nombre: "Producto 4",
        descripción: "Descripción del producto 4",
        unidad_de_medicion: "kg",
        marca: "Marca 4",
        empresa_proveedora: "Empresa 4",
        categoría: "Categoría 4",
        precio: 400,
    },
    {
        id: 5,
        nombre: "Producto 5",
        descripción: "Descripción del producto 5",
        unidad_de_medicion: "kg",
        marca: "Marca 5",
        empresa_proveedora: "Empresa 5",
        categoría: "Categoría 5",
        precio: 500,
    },
    {
        id: 6,
        nombre: "Producto 6",
        descripción: "Descripción del producto 6",
        unidad_de_medicion: "kg",
        marca: "Marca 6",
        empresa_proveedora: "Empresa 6",
        categoría: "Categoría 6",
        precio: 600,
    },
    {
        id: 7,
        nombre: "Producto 7",
        descripción: "Descripción del producto 7",
        unidad_de_medicion: "kg",
        marca: "Marca 7",
        empresa_proveedora: "Empresa 7",
        categoría: "Categoría 7",
        precio: 700,
    },
    {
        id: 8,
        nombre: "Producto 8",
        descripción: "Descripción del producto 8",
        unidad_de_medicion: "kg",
        marca: "Marca 8",
        empresa_proveedora: "Empresa 8",
        categoría: "Categoría 8",
        precio: 800,
    },
    {
        id: 9,
        nombre: "Producto 9",
        descripción: "Descripción del producto 9",
        unidad_de_medicion: "kg",
        marca: "Marca 9",
        empresa_proveedora: "Empresa 9",
        categoría: "Categoría 9",
        precio: 900,
    },
    {
        id: 10,
        nombre: "Producto 10",
        descripción: "Descripción del producto 10",
        unidad_de_medicion: "kg",
        marca: "Marca 10",
        empresa_proveedora: "Empresa 10",
        categoría: "Categoría 10",
        precio: 1000,
    },
    {
        id: 11,
        nombre: "Producto 11",
        descripción: "Descripción del producto 11",
        unidad_de_medicion: "kg",
        marca: "Marca 11",
        empresa_proveedora: "Empresa 11",
        categoría: "Categoría 11",
        precio: 1100,
    },
    {
        id: 12,
        nombre: "Producto 12",
        descripción: "Descripción del producto 12",
        unidad_de_medicion: "kg",
        marca: "Marca 12",
        empresa_proveedora: "Empresa 12",
        categoría: "Categoría 12",
        precio: 1200,
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
                <Product key={index} id={product.id} nombre={product.nombre} precio={product.precio}/>
              )
            })
          }
          </div>
        </div>
      </div>
    </div>
  )
}
