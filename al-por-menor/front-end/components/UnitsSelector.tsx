import React, { ChangeEvent, useContext, useEffect, useState } from 'react';
import { FormControl, InputLabel, Input, IconButton } from '@mui/material';
import { Add, Remove } from '@mui/icons-material';
import { Context } from '@/app/context/Context';
import { MAX_ITEMS_IN_CART } from '@/app/constants';

interface UnitsSelectorProps {
  selectedUnit: number;
  handleUnitChange: (newValue: number) => void;
  min?: number;
  max?: number;
}

const UnitsSelector: React.FC<UnitsSelectorProps> = ({ selectedUnit, handleUnitChange, min, max }) => {

  const { cartItems, calculateTotalItems } = useContext(Context);

  const handleIncrement = () => {
    if (typeof max === 'undefined' || selectedUnit < max) {
      handleUnitChange(selectedUnit + 1);
    }
  };

  const handleDecrement = () => {
    if (typeof min === 'undefined' || selectedUnit > min) {
      handleUnitChange(selectedUnit - 1);
    }
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const newValue = parseInt(event.target.value, 10);
    if (!isNaN(newValue)) {
      if(newValue > MAX_ITEMS_IN_CART) {
        return;
      }
      handleUnitChange(newValue);
    } else {
      handleUnitChange(0);
    }
  };

  useEffect(() => {
  }, [cartItems]);



  return (
    <div className="w-full flex items-center mb-3">
    <div className="flex flex-grow">
      <IconButton
        disabled={calculateTotalItems() >= MAX_ITEMS_IN_CART || selectedUnit <= 0 }
        aria-label="decrement"
        onClick={handleDecrement}
        className="p-8 rounded"
        style={{ minWidth: 0 }}
      >
        <Remove fontSize="small" />
      </IconButton>
      <Input
        disabled={calculateTotalItems() >= MAX_ITEMS_IN_CART || selectedUnit >= MAX_ITEMS_IN_CART}
        id="unit-input"
        type="number"
        value={selectedUnit}
        onChange={handleInputChange}
        className="w-full text-center"
      />
      <IconButton
        disabled={calculateTotalItems() >= MAX_ITEMS_IN_CART  || selectedUnit >= MAX_ITEMS_IN_CART}
        aria-label="increment"
        onClick={handleIncrement}
        className="p-8 rounded"
        style={{ minWidth: 0 }}
      >
        <Add fontSize="small" />
      </IconButton>
    </div>
  </div>
  );
};

export default UnitsSelector;