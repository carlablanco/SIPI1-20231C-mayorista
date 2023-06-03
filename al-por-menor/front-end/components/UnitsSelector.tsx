import React, { ChangeEvent, useState } from 'react';
import { FormControl, InputLabel, Input, IconButton } from '@mui/material';
import { Add, Remove } from '@mui/icons-material';

interface UnitsSelectorProps {
  selectedUnit: number;
  handleUnitChange: (newValue: number) => void;
  min?: number;
  max?: number;
}

const UnitsSelector: React.FC<UnitsSelectorProps> = ({ selectedUnit, handleUnitChange, min, max }) => {
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
      handleUnitChange(newValue);
    }
  };

  return (
    <FormControl>
      <Input
        id="unit-input"
        type="number"
        value={selectedUnit}
        onChange={handleInputChange}
      />
      <IconButton aria-label="decrement" onClick={handleDecrement}>
        <Remove />
      </IconButton>
      <IconButton aria-label="increment" onClick={handleIncrement}>
        <Add />
      </IconButton>
    </FormControl>
  );
};

export default UnitsSelector;