import React from 'react';
import '../app/(productos)/subscriptions-list/ProductsStyles.css';

interface SubscriptionProduct {
  productId: number;
  quantity: number;
}

interface Product {
  id: number;
  name: string;
  description: string;
  measurementUnit: string;
  brand: string;
  supplyingCompany: string;
  category: string;
  price: number;
  imgUrl: string;
}

export function SubscriptionList() {
  let products: Product[] = [
    {
      id: 1,
      name: 'Arroz',
      description: 'Arroz blanco de grano largo',
      measurementUnit: 'kilogramo',
      brand: 'Arcor',
      supplyingCompany: 'Arcor',
      category: 'Alimentos básicos',
      price: 80,
      imgUrl: 'arroz.jpg',
    },
    {
      id: 2,
      name: 'Fideos',
      description: 'Fideos de trigo comunes',
      measurementUnit: 'unidad',
      brand: 'Matarazzo',
      supplyingCompany: 'Molinos Río de la Plata',
      category: 'Alimentos básicos',
      price: 50,
      imgUrl: 'fideos.jpg',
    },
    {
      id: 3,
      name: 'Pan',
      description: 'Pan fresco',
      measurementUnit: 'unidad',
      brand: 'Bimbo',
      supplyingCompany: 'Grupo Bimbo',
      category: 'Alimentos básicos',
      price: 35,
      imgUrl: 'pan.jpg',
    },
    {
      id: 4,
      name: 'Jabón de Baño',
      description: 'Jabón de baño de glicerina',
      measurementUnit: 'unidad',
      brand: 'Dove',
      supplyingCompany: 'Unilever',
      category: 'Higiene personal',
      price: 70,
      imgUrl: 'jabon_baño.jpg',
    },
    {
      id: 5,
      name: 'Pasta Dental',
      description: 'Pasta dental con flúor',
      measurementUnit: 'unidad',
      brand: 'Colgate',
      supplyingCompany: 'Colgate-Palmolive',
      category: 'Higiene personal',
      price: 90,
      imgUrl: 'pasta_dental.jpg',
    },
    // Agregar más productos según sea necesario
  ];

  let subscriptions = [
    {
      name: 'Canasta Básica Familiar',
      description: 'Una selección de productos básicos para la familia',
      imgUrl: 'canasta_basica_familiar.jpg',
      products: [
        {
          productId: 1,
          quantity: 5,
        },
        {
          productId: 2,
          quantity: 3,
        },
        {
          productId: 3,
          quantity: 2,
        },
        {
          productId: 4,
          quantity: 2,
        },
      ] as SubscriptionProduct[],
    },
    {
      name: 'Kit de Alimentos Esenciales',
      description: 'Una combinación de productos esenciales para la despensa',
      imgUrl: 'kit_alimentos_esenciales.jpg',
      products: [
        {
          productId: 1,
          quantity: 3,
        },
        {
          productId: 2,
          quantity: 4,
        },
        {
          productId: 3,
          quantity: 1,
        },
        {
          productId: 5,
          quantity: 1,
        },
      ] as SubscriptionProduct[],
    },
    // Agregar más suscripciones según sea necesario
  ];

  return (
    <div className="subscription-list">
      {subscriptions.map((subscription, index) => (
        <div key={index} className="subscription">
          <h2>{subscription.name}</h2>
          <p>{subscription.description}</p>
          <img src={subscription.imgUrl} alt={subscription.name} />
          <h3>Precio Total: ${calculateTotalPrice(subscription.products, products)}</h3>
          <h3>Productos:</h3>
          <ul>
            {subscription.products.map((subscriptionProduct, index) => {
              const product = products.find((p) => p.id === subscriptionProduct.productId);
              return <li key={index}>{product && product.name}</li>;
            })}
          </ul>
        </div>
      ))}
    </div>
  );
}

function calculateTotalPrice(subscriptionProducts: SubscriptionProduct[], products: Product[]) {
  let totalPrice = 0;

  for (const subscriptionProduct of subscriptionProducts) {
    const product = products.find((p) => p.id === subscriptionProduct.productId);
    if (product) {
      totalPrice += product.price * subscriptionProduct.quantity;
    }
  }

  return totalPrice;
}
