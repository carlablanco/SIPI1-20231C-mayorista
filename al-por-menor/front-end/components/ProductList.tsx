'use client'
import React, { useState } from 'react';
import { Product } from './Product';
import '../app/(products)/products-list/ProductsStyles.css';
import { IProductPromotion } from '@/types/responses';
import { products } from '../mock/mockdata';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import SortIcon from '@mui/icons-material/Sort';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export function ProductList(this: any) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('bestoffer');

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const categories = Array.from(new Set(products.map((product) => product.category)));

  const [selectedCategory, setSelectedCategory] = useState('');

  const handleCategoryChange = (event: React.ChangeEvent<{ value: string }>) => {
    setSelectedCategory(event.target.value);
  };

  function getPublicPrice(product: any) {
    let currentPrice = product.priceList[0].price;

    product.priceList.forEach((price: any) => {
      if (price.unitsNeeded <= product.unitsSold) {
        currentPrice = price.price;
      }
    });

    return currentPrice;
  }

  const handleFilter = (event: SelectChangeEvent) => {
    setFilter(event.target.value);

    switch (event.target.value) {
      case 'bestoffer':
        products.sort((a, b) => a.unitsSold - b.unitsSold);
        break;

      case 'bestseller':
        products.sort((a, b) => a.unitsSold - b.unitsSold);
        break;

      case 'alpha':
        products.sort((a, b) => a.name.localeCompare(b.name));
        break;

      case 'pricelow':
        products.sort((a, b) => getPublicPrice(a) - getPublicPrice(b));
        break;

      case 'pricehigh':
        products.sort((a, b) => getPublicPrice(b) - getPublicPrice(a));
        break;
    }
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

          <div className="order-bar">
            <IconButton>
              <SortIcon />
            </IconButton>

            <Select
              value={filter}
              onChange={handleFilter}
            >
              <MenuItem value={'bestoffer'}>Mejores ofertas</MenuItem>
              <MenuItem value={'bestseller'}>Más vendidos</MenuItem>
              <MenuItem value={'alpha'}>Alfabeticamente</MenuItem>
              <MenuItem value={'pricelow'}>Precio de menor a mayor</MenuItem>
              <MenuItem value={'pricehigh'}>Precio de mayor a menor</MenuItem>
            </Select>
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
