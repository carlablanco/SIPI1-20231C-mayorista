import React from 'react'

export default function NewProdPage() {
  return (
    <div>
        <input type="text" placeholder='Producto'/>
        <input type="text" placeholder='Descripcion'/>
        <select name="unidad" id="">
            <option value="1">Gr</option>
            <option value="2">Kg</option>
            <option value="3">Litros</option>
        </select>
        <input type="text" placeholder='Precio'/>
        <input type="text" placeholder='Categoria'/>
        <input type="text" placeholder='Marca'/>
        <div>
            <input type="number" placeholder='Precio' />
            <input type="number" placeholder='Unidades necesarias' />
        </div>
    </div>
  )
}
