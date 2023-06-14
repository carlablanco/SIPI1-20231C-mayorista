'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function NewProdPage() {
  const [producto, setProducto] = useState({});
  const [nombre, setNombre] = useState('');
  const [descripcion , setDescripcion] = useState('');
  const [unidad, setUnidad] = useState('');
  const [marca, setMarca] = useState('');
  const [proveedor, setProveedor] = useState('');
  const [category, setCategory] = useState('');
  const [precio, setPrecio] = useState(0);
  const [imgUrl, setImgUrl] = useState('');

  const router = useRouter();

  const handleAgregarProducto = () => {
    let nuevoProducto = {
      id: 50,
      nombre,
      descripcion,
      unidad,
      marca,
      proveedor,
      category,
      priceList: [
        { price: 500, unitsNeeded: 10 },
        { price: 400, unitsNeeded: 50 },
        { price: 350, unitsNeeded: 100 },
      ],
      imgUrl
    };
    setProducto(nuevoProducto)

    router.push('/admin/products');

  };

return (
    <div className='productoNuevo'>
      <h1 className='titulo'>Agregar Producto Nuevo</h1>
      <input className='prodNombre'
        type="text"
        placeholder="Nombre"
        onChange={(e) => setNombre(e.target.value)}
      />
      <input className='prodDesc'
        type="text"
        placeholder="Descripción"
        onChange={(e) => setDescripcion(e.target.value)}
      />
      <input className='prodUnidad'
        type="text"
        placeholder="Unidad de medida"
        onChange={(e) => setUnidad(e.target.value)}
      />
      <input className='prodMarca'
        type="text"
        placeholder="Marca"
        onChange={(e) => setMarca(e.target.value)}
      />
      <input className='prodProv'
        type="text"
        placeholder="Proveedor"
        onChange={(e) => setProveedor(e.target.value)}
      />
      <input className='prodCate'
        type="text"
        placeholder="Categoria"
        onChange={(e) => setCategory(e.target.value)}
      />
      <input className='prodPrecio'
        type="number"
        placeholder="Precio"
        // onChange={(e) => setPrecio(e.target.value)}
      />
      <input className='prodUrl'
        type="text"
        placeholder="Url de la imagen"
        onChange={(e) => setImgUrl(e.target.value)}
      />
      <button className="boton" onClick={handleAgregarProducto}>Agregar Producto</button>
    </div>
  );
}
