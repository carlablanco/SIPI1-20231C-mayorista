"use client"
import { useState } from 'react';
import '../styles.css';
import { products } from '../../../mock/mockdata';
import Link from 'next/link';


export default function ProductsPage() {
  const [productList, setProductList] = useState(products);

  const handleDeleteProduct = (productId: String) => {
    const updatedProductList = productList.filter((product) => product.productId !== productId);
    setProductList(updatedProductList);
  };
  
  return (
    <div className="admin-products">
      <h1 className="products_title">Products</h1>
      <Link className="btn-primary" href={'/admin/products/new'}>
        Add new product
      </Link>
      <table className="basic mt-2">
        <thead>
          <tr>
            <th className="product-id-table prd-tr">#</th>
            <th className="product-name-table prd-tr">Producto</th>
            <th className="product-price-table prd-tr">Precio</th>
            <th className=""></th>
          </tr>
        </thead>
        <tbody>
          {productList.map((product) => (
            <tr key={product.productId} className="admin-product-item" data-aos="fade-down">
              <td className="">#{product.productId}</td>
              <td className="product-name">{product.name}</td>
              <td className="">${product.priceList[0].price}</td>
              <td className="btns-container">
              <Link className="btn-default" href={'/admin/products/edit/'+product.productId}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                    </svg>
                    Edit
                  </Link>
                  <button className="btn-red" onClick={()=> handleDeleteProduct(product.productId)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                    </svg>
                    Delete
                  </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
