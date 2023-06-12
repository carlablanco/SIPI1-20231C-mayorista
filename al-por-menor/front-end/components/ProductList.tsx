'use client'
import React, { useState } from 'react';
import { Product } from './Product';
import '../app/(products)/products-list/ProductsStyles.css';
import { IProductPromotion } from '@/types/responses';
import { products } from '../mock/mockdata';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';

export function ProductList(this: any) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

const categories = Array.from(new Set(products.map((product) => product.category)));

const [selectedCategory, setSelectedCategory] = useState('');

const handleCategoryChange = (event: React.ChangeEvent<{ value: string }>) => {
  setSelectedCategory(event.target.value);
};

const filteredProducts = products.filter((product: IProductPromotion) => {
  const matchesSearchTerm = product.name && product.name.toLowerCase().includes(searchTerm.toLowerCase());

  if (!selectedCategory || selectedCategory === '') {
    // If no category is selected, only apply search filter
    return matchesSearchTerm;
  } else {
    // Apply both category and search filters
    const matchesCategory = product.category === selectedCategory;
    return matchesCategory && matchesSearchTerm;
  }
});


  return (
<div className="bg-white">
  <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
    <h2 className="sr-only">Products</h2>

    <div className="categories-search-container">
      <div className="categorias">
        <select
          id="category"
          value={selectedCategory}
          onChange={handleCategoryChange}
        >
          <option value="">Todas las categorías</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div className="search-bar">
        <IconButton>
          <SearchIcon />
        </IconButton>
        <TextField
          id="search"
          label="Buscar..."
          variant="outlined"
          size="small"
          value={searchTerm}
          onChange={handleSearch}
          className="search-input"
        />
      </div>
    </div>

    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
      {filteredProducts.map((product: IProductPromotion, index: any) => (
        <Product key={index} product={product} />
      ))}
    </div>
  </div>
</div>



  );
}
