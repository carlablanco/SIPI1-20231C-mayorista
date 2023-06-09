import {useEffect, useState} from "react";
import '../styles.css'


export default function OrdersPage() {
  const orders = [
    {
      _id: 1,
      name: "Juan Perez",
      email: "juan@example.com",
      country: "Argentina",
      streetAddress: "Independencia 123",
      city: "Buenos Aires",
      state: "Bs As",
      postalCode: "10001",
      phone: "123-456-7890",
      createdAt: "2021-06-01",
      paid: true,
      items: [
        {
        price_data: {
          currency_code: "$",
          product_data: {
            name: "Manzana",
            images: [
              {
                url:
                  "",
              },
            ],
          },
        quantity: 2

    }
  }],
    },
    {
      _id: 2,
      name: "Jose Diaz",
      email: "jose@example.com",
      country: "Argentina",
      streetAddress: "Independencia 123",
      city: "Buenos Aires",
      state: "Bs As",
      postalCode: "10001",
      phone: "123-456-7890",
      createdAt: "2021-06-01",
      paid: false,
      items: [
        {
        price_data: {
          currency_code: "$",
          product_data: {
            name: "Shampoo",
            images: [
              {
                url:
                  "",
              },
            ],
          },
        quantity: 2
          }
        },
        {
        price_data: {
          currency_code: "$",
          product_data: {
            name: "Fideo",
            images: [
              {
                url:
                  "",
              },
            ],
          },
        quantity: 2

    }
  },
],
    },
  ]
  return (
    <div>
      <h1 className="order_title">Orders</h1>
      <table className="basic">
        <thead>
          <tr>
            <th className="order_id prd-tr">#</th>
            <th className="order_date prd-tr">Fecha</th>
            <th className="order_paid prd-tr">Pago</th>
            <th className="order_buyer prd-tr">Comprador</th>
            <th className="order_prod prd-tr">Producto</th>
          </tr>
        </thead>
        <tbody>
        {orders.length > 0 && orders.map(order => (
          <tr key={order._id} className="orders-list" data-aos="fade-down">
            <td className="order_id">#{order._id}</td>
            <td className="order_date">{(new Date(order.createdAt)).toLocaleString()}
            </td>
            <td  className={order.paid ? 'text-green-600 order_paid' : 'text-red-600 order_paid'}>
              {order.paid ? 'YES' : 'NO'}
            </td>
            <td className="order_buyer">
              {order.name} {order.email}<br />
              {order.city} {order.postalCode} {order.country}<br />
              {order.streetAddress}
            </td>
            <td className="order_prod">
              {order.items.map(l => (
                <>
                  {l.price_data?.product_data.name} x
                  {l.price_data.quantity}<br />
                </>
              ))}
            </td>
          </tr>
        ))}
        </tbody>
      </table>

    </div>
  );
}
