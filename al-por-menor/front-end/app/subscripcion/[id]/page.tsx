import React from 'react'
import Sub from '@/components/sub'
import Footer from '@/components/ui/footer'


export default function Subscripcion({params}: any) {

    const product = params.id
  
    const producto =
      {
        id: {product},
        nombre: `Pack ${product}`,
        img: "https://previews.123rf.com/images/prettyvectors/prettyvectors1605/prettyvectors160500174/56975107-alimentos-en-paquete-entrega-de-comida-vector-ilustraci%C3%B3n-de-dibujos-animados-plana.jpg",
        descripcion: [
          "- Arroz",
          "- Fideos",
          "- Azúcar",
          "- Yerba",
          "- Harina",
          "- Polenta",
          "- Lentejas",
          "- Porotos",
        ],
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
