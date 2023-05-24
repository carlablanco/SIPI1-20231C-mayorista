import React from 'react'
import Sub from '@/components/sub'
import Footer from '@/components/ui/footer'


export default function Subscripcion({params}: any) {

    const product = params.id
  
    const producto =
      {
        id: {product},
        nombre: `Producto ${product}`,
        img: "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",
        descripción: "Descripción del producto",
        unidad_de_medicion: "kg",
        marca: "Marca 1",
        empresa_proveedora: "Empresa 1",
        categoría: "Categoría 1",
        precio: 100,
    }
    

  return (
    <div>
        <Sub id={producto.id} product={producto}/>
        <Footer/>
    </div>
  )
}
