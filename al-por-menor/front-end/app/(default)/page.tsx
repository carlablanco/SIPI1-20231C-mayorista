export const metadata = {
  title: 'Al Por Menor',
  description: 'Page description',
}

import Hero from '@/components/hero';
import Features from '@/components/features';
import FeaturesBlocks from '@/components/features-blocks';
import Tendencia from '@/components/Tendencia';
import Testimonials from '@/components/testimonials';
import Sub from '@/components/sub';

export default function Home() {
  const products = [
    {
      name: 'Producto 1',
      supplier: 'Proveedor A',
      oldPrice: 20.0,
      newPrice: 15.0,
      imageUrl: 'https://dinopack.com.ar/wp-content/uploads/2020/09/1-a-16.jpg',
    },
    {
      name: 'Producto 2',
      supplier: 'Proveedor B',
      oldPrice: 30.0,
      newPrice: 25.0,
      imageUrl: 'https://dinopack.com.ar/wp-content/uploads/2020/09/1-a-16.jpg',
    },
    {
      name: 'Producto 3',
      supplier: 'Proveedor C',
      oldPrice: 25.0,
      newPrice: 19.99,
      imageUrl: 'https://dinopack.com.ar/wp-content/uploads/2020/09/1-a-16.jpg',
    },
    {
      name: 'Producto 4',
      supplier: 'Proveedor D',
      oldPrice: 25.0,
      newPrice: 19.99,
      imageUrl: 'https://dinopack.com.ar/wp-content/uploads/2020/09/1-a-16.jpg',
    },
    {
      name: 'Producto 5',
      supplier: 'Proveedor E',
      oldPrice: 25.0,
      newPrice: 19.99,
      imageUrl: 'https://dinopack.com.ar/wp-content/uploads/2020/09/1-a-16.jpg',
    },
    {
      name: 'Producto 6',
      supplier: 'Proveedor F',
      oldPrice: 25.0,
      newPrice: 19.99,
      imageUrl: 'https://dinopack.com.ar/wp-content/uploads/2020/09/1-a-16.jpg',
    },
  ];
  
  return (
    <>
      <Hero />
      <Features />
      <Tendencia products={products} />
      <Testimonials />
    </>
  );
}
