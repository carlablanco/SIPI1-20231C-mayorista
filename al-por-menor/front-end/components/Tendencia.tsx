'use client'
import React from 'react';

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
  const containerStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '20px',
    overflow: 'hidden',
    position: 'relative',
    width: '80%', // Reducción del tamaño del container en un 20%
    margin: '0 auto', // Centrar el container horizontalmente
  };

  const itemStyle: React.CSSProperties = {
    backgroundColor: '#FFFFFF',
    borderRadius: '10px',
    padding: '20px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    position: 'relative',
    textAlign: 'center',
    width: '23%', // Reducción del tamaño de los productos y añadir un producto más
    marginRight: '10px',
    transition: 'transform 0.3s ease',
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

  const handleMouseEnter = (index: number) => {
    const container = document.getElementById(`item-${index}`);
    if (container) {
      container.style.transform = 'scale(1.05)';
      container.style.zIndex = '1';
    }
  };

  const handleMouseLeave = (index: number) => {
    const container = document.getElementById(`item-${index}`);
    if (container) {
      container.style.transform = 'scale(1)';
      container.style.zIndex = '0';
    }
  };

  return (
    <div>
      <div className="max-w-3xl mx-auto text-center pb-4 md:pb-8 mt-4 md:mt-8">
        <h2 className="h2 mb-4">¡Descubre lo más popular hoy!</h2>
        <h3 style={{ fontSize: '1rem', color: '#555', marginBottom: '1rem' }}>
          Estos productos llegaron al Por Menor, ¡comprá ya!
        </h3>
      </div>

      <div style={containerStyle}>
        {products.map((product, index) => (
          <div
            key={index}
            style={itemStyle}
            id={`item-${index}`}
            onMouseEnter={() => handleMouseEnter(index)} // Pasar el índice como argumento al manejar el evento onMouseEnter
            onMouseLeave={() => handleMouseLeave(index)} // Pasar el índice como argumento al manejar el evento onMouseLeave
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
      </div>
    </div>
  );
};

export default Tendencia;