
'use client'
import React, { useState } from 'react';
import { Box, Drawer, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import ProfilePage from './Profile';
import AddressMenu from './AddressMenu';
import PaymentMethodMenu from './UserPaymentMethods';
import BadgeIcon from '@mui/icons-material/Badge';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Sidebar = () => {
  const [selectedOption, setSelectedOption] = useState('Mis datos');

  const handleOptionClick = (option: any) => {
    setSelectedOption(option);
  };

  const MenuOptions = [
    {
      name: 'Mis datos',
      icon: <BadgeIcon />,
    },
    {
      name: 'Mis domicilios',
      icon: <LocationOnIcon />,
    },
    {
      name: 'Mis tarjetas de pago',
      icon: <CreditCardIcon />,
    },
    {
      name: 'Mis pedidos',
      icon: <ShoppingBagIcon />,
    },
  ];

  return (
    <Box sx={{ display: 'flex' }}>
      {/* Sidebar */}
      <Drawer variant="permanent" anchor="left">
          <List>
            {MenuOptions.map((option) => (
              <ListItem
                button
                key={option.name}
                selected={selectedOption === option.name}
                onClick={() => handleOptionClick(option.name)}
              >
                <ListItemIcon>{option.icon}</ListItemIcon>
                <ListItemText primary={option.name} />
                <ArrowForwardIosIcon/>
              </ListItem>
            ))}
          </List>
        </Drawer>

        {/* Component Content */}
        {selectedOption === 'Mis datos' && <ProfilePage/>}
        {selectedOption === 'Mis domicilios' && <AddressMenu/>}
        {selectedOption === 'Mis tarjetas de pago' && <PaymentMethodMenu/>}
        {selectedOption === 'Mis pedidos' && <h1>Mis pedidos component</h1>}
    </Box>
  );
};

export default Sidebar;
