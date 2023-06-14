export const metadata = {
  title: 'Al Por Menor',
  description: 'Page description',
}

import Hero from '@/components/hero';
import Features from '@/components/features';
import Tendencia from '@/components/Tendencia';
import Testimonials from '@/components/testimonials';
import Sub from '@/components/sub';

export default function Home() {
  const products = [
    {
      name: 'Manzanas',
      supplier: 'Apple Farms',
      oldPrice: 20.0,
      newPrice: 15.0,
      imageUrl: 'https://parade.com/.image/t_share/MTkwNTgxNDY1MzcxMTkxMTY0/different-types-of-apples-jpg.jpg',
    },
    {
      name: 'Pan',
      supplier: 'Farm Fresh Dairy B',
      oldPrice: 30.0,
      newPrice: 25.0,
      imageUrl: 'https://i.imgur.com/KUuRtTc.jpeg',
    },
    {
      name: 'Leche Fresca',
      supplier: 'Vacas Inc',
      oldPrice: 25.0,
      newPrice: 19.99,
      imageUrl: 'https://t3.ftcdn.net/jpg/04/91/38/72/360_F_491387258_NDctlpVMBvUNazcVsj8d0xAFe5uP2Idy.jpg',
    },
    {
      name: 'Huevos',
      supplier: 'Egg Farms Inc',
      oldPrice: 25.0,
      newPrice: 19.99,
      imageUrl: 'https://images-prod.healthline.com/hlcmsresource/images/AN_images/health-benefits-of-eggs-1296x728-feature.jpg',
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