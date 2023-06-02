
'use client'
import React, { useState } from 'react';
import { Box, Drawer, List, ListItem, ListItemText } from '@mui/material';
import ProfilePage from './Profile';

const Sidebar = () => {
  const [selectedOption, setSelectedOption] = useState('Mis datos');

  const handleOptionClick = (option: any) => {
    setSelectedOption(option);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      {/* Sidebar */}
      <Drawer variant="permanent" anchor="left">
          <List>
            {['Mis datos', 'Mis domicilios', 'Mis tarjetas de pago', 'Mis pedidos'].map((option) => (
              <ListItem
                button
                key={option}
                selected={selectedOption === option}
                onClick={() => handleOptionClick(option)}
              >
                <ListItemText primary={option} />
              </ListItem>
            ))}
          </List>
        </Drawer>

        {/* Component Content */}
        {selectedOption === 'Mis datos' && <ProfilePage/>}
        {selectedOption === 'Mis domicilios' && <h1>Mis domicilios component</h1>}
        {selectedOption === 'Mis tarjetas de pago' && <h1>Mis tarjetas de pago component</h1>}
        {selectedOption === 'Mis pedidos' && <h1>Mis pedidos component</h1>}
    </Box>
  );
};

export default Sidebar;
