'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { IPriceList, IProductPromotion } from '@/types/responses';
import { addDays } from '@/app/helpers/date.helper';
import { IconButton } from '@mui/material';
import { Add, Remove } from '@mui/icons-material';

export default function NewProdPage() {
  const [producto, setProducto] = useState<IProductPromotion | null>(null);
  const [name, setName] = useState('');
  const [description , setDescription] = useState('');
  const [measurementUnit, setMeasurementUnit] = useState('');
  const [brand, setBrand] = useState('');
  const [supplyingCompany, setSupplyingCompany] = useState('');
  const [category, setCategory] = useState('');
  const [priceList, setPriceList] = useState<Array<IPriceList>>([]);
  const [imgUrl, setImgUrl] = useState('');

  const addToPriceList = () => {
    setPriceList([...priceList, {
      ...newPrice,
      id: priceList.length + 1 + '',
    }]);
  };

  const deleteFromPriceList = (priceToDelete: IPriceList) => {
    const newPriceList = priceList.filter((price) => price !== priceToDelete);
    setPriceList(newPriceList);
  };

  let priceId = priceList.length + 1;

  const newPrice: IPriceList = {
    id: priceId.toString(),
    price: 0,
    unitsNeeded: 0,
  };



  const router = useRouter();

  const handleAgregarProducto = () => {
    let nuevoProducto: IProductPromotion = {
      productId: "50",
      name,
      description,
      measurementUnit,
      brand,
      supplyingCompany,
      category,
      priceList,
      imgUrl,
      unitsSold: 0,
      promotionStartDate: new Date(),
      promotionEndDate: addDays(3) ,
    };
    setProducto(nuevoProducto)
    router.push('/admin/products');

  };


  const inputChange = (e: any, index: number, key: string) => {
    const priceListHelper: any = [...priceList];
    priceListHelper[index][key] = e.target.value;
    setPriceList(priceListHelper);
  }

return (
    <div className='productoNuevo'>
      <h1 className='titulo'>Agregar Producto Nuevo</h1>
      <input className='prodNombre'
        type="text"
        placeholder="Nombre"
        onChange={(e) => setName(e.target.value)}
      />
      <input className='prodDesc'
        type="text"
        placeholder="Descripción"
        onChange={(e) => setDescription(e.target.value)}
      />
      <input className='prodUnidad'
        type="text"
        placeholder="Unidad de medida"
        onChange={(e) => setMeasurementUnit(e.target.value)}
      />
      <input className='prodMarca'
        type="text"
        placeholder="Marca"
        onChange={(e) => setBrand(e.target.value)}
      />
      <input className='prodProv'
        type="text"
        placeholder="Proveedor"
        onChange={(e) => setSupplyingCompany(e.target.value)}
      />
      <input className='prodCate'
        type="text"
        placeholder="Categoria"
        onChange={(e) => setCategory(e.target.value)}
      />
      <p>Añadir precio</p>
      <IconButton onClick={addToPriceList}><Add fontSize="small" /></IconButton>
      {
        priceList.map((price, index) => (
          <div key={index}>
            <input
              type="number"
              value={price.price}
              onChange={(e) => {
                inputChange(e, index, 'price')
              }}
            />
            <input
              type="number"
              value={price.unitsNeeded}
              onChange={(e) => {
                inputChange(e, index, 'unitsNeeded')
              }}
            />
            <IconButton onClick={() => deleteFromPriceList(price)}><Remove fontSize="small" /></IconButton>
          </div>
        ))
      }
      
      <input className='prodUrl'
        type="text"
        placeholder="Url de la imagen"
        onChange={(e) => setImgUrl(e.target.value)}
      />
      <button className="boton" onClick={handleAgregarProducto}>Agregar Producto</button>
    </div>
  );
}
