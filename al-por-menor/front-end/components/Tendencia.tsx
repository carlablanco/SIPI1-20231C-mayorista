'use client'
import React, { useState } from 'react';

interface Product {
  name: string;
  supplier: string;
  oldPrice: number;
  newPrice: number;
  imageUrl: string;
}

interface TendenciaProps {
  products: Product[];
}

const Tendencia: React.FC<TendenciaProps> = ({ products }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesToShow = 3;

  const handlePrev = () => {
    setCurrentSlide((prevSlide) => prevSlide - 1);
  };

  const handleNext = () => {
    setCurrentSlide((prevSlide) => prevSlide + 1);
  };

  const currentProducts = products.slice(currentSlide, currentSlide + slidesToShow);

  const containerStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '20px',
    overflow: 'hidden',
    position: 'relative',
  };

  const itemStyle: React.CSSProperties = {
    backgroundColor: '#FFFFFF',
    borderRadius: '10px',
    padding: '20px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    position: 'relative',
    textAlign: 'center',
    width: '30%',
    marginRight: '20px',
  };

  const firstItemStyle: React.CSSProperties = {
    ...itemStyle,
    borderTopLeftRadius: '0',
    borderBottomLeftRadius: '0',
    marginLeft: '20px',
  };

  const lastItemStyle: React.CSSProperties = {
    ...itemStyle,
    borderTopRightRadius: '0',
    borderBottomRightRadius: '0',
    marginRight: '20px',
  };

  const imageContainerStyle: React.CSSProperties = {
    width: '156px',
    height: '156px',
    margin: '0 auto',
    marginBottom: '10px',
    borderRadius: '50%',
    overflow: 'hidden',
  };

  const imageStyle: React.CSSProperties = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  };

  const nameStyle: React.CSSProperties = {
    fontWeight: 'bold',
    fontSize: '1.32rem',
    marginBottom: '5px',
    color: '#283349',
  };

  const supplierStyle: React.CSSProperties = {
    color: '#888',
    marginBottom: '10px',
  };

  const priceStyle: React.CSSProperties = {
    marginBottom: '10px',
    textDecoration: 'line-through',
    color: '#888',
  };

  const newPriceContainerStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginTop: '10px',
  };

  const newPriceSvgStyle: React.CSSProperties = {
    width: '22.4px',
    height: '22.4px',
    padding: '1px',
    marginTop: '-1px',
    marginBottom: '2px',
    marginRight: '8px',
  };

  const newPriceStyle: React.CSSProperties = {
    fontWeight: 'bold',
    fontSize: '1.5rem',
    color: '#283349',
  };

  const trendingStyle: React.CSSProperties = {
    position: 'absolute',
    top: '10px',
    right: '10px',
    backgroundColor: '#4e86e4',
    color: '#fff',
    padding: '4px 8px',
    borderRadius: '5px',
    fontSize: '1rem',
    display: 'flex',
    alignItems: 'center',
    fontWeight: 'bold',
  };

  const arrowStyle: React.CSSProperties = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    color: '#4e86e4',
    cursor: 'pointer',
    justifyContent:'space-between',
    fontSize: 'rem',
    zIndex: 1,
    display:'flex'
  };

  const subtitle = {
    fontSize: '1rem',
    color: '#555',
    marginBottom: '1rem',
  };

  const isPrevDisabled = currentSlide === 0;
  const isNextDisabled = currentSlide + slidesToShow >= products.length;

  return (
    <div>
    <div className="max-w-3xl mx-auto text-center pb-4 md:pb-8 mt-4 md:mt-8">
    <h2 className="h2 mb-4">¡Descubre lo más popular hoy!</h2>
    <h3 style={subtitle}>Estos productos llegaron al Por Menor, ¡comprá ya!</h3>
    </div>
    
      <div style={containerStyle}>
        {!isPrevDisabled && (
          <svg
            width='100'
            className="left-arrow"
            style={arrowStyle}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            onClick={handlePrev}
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        )}
        {currentProducts.map((product, index) => (
          <div
            key={index}
            style={index === 0 ? firstItemStyle : index === currentProducts.length - 1 ? lastItemStyle : itemStyle}
          >
            <div style={imageContainerStyle}>
              <img src={product.imageUrl} alt={product.name} style={imageStyle} />
            </div>
            <div style={nameStyle}>{product.name}</div>
            <div style={supplierStyle}>{product.supplier}</div>
            <div style={priceStyle}>Precio anterior: ${product.oldPrice.toFixed(2)}</div>
            <div style={newPriceContainerStyle}>
              <span style={newPriceStyle}>${product.newPrice.toFixed(2)}</span>
            </div>
            <div style={trendingStyle}>Trending</div>
          </div>
        ))}
        {!isNextDisabled && (
          <svg
            className="right-arrow"
            style={arrowStyle}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            onClick={handleNext}
            width='100'
            display='flex'
          >
            <path d="M9 6l6 6-6 6" />
          </svg>
        )}
      </div>
    </div>
  );
};

export default Tendencia;
