
'use client'
import React, { useContext, useState } from 'react';
import {  Drawer, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import MenuIcon from '@mui/icons-material/Menu';
import StoreIcon from '@mui/icons-material/Store';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import LogoutIcon from '@mui/icons-material/Logout';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import HomeIcon from '@mui/icons-material/Home';
import Link from 'next/link';
import { Context } from '@/app/context/Context';

const AdminSidebar = () => {

  const {logout} = useContext(Context)
  
  const [selectedOption, setSelectedOption] = useState('Mis datos');

  const handleOptionClick = (option: any) => {
    if (option == 'Logout') {
      logout()
    }
    setSelectedOption(option);
  };

  const MenuOptions = [
    {
      name: 'Productos',
      icon: <StoreIcon />,
      route: '/admin/products'
    },
    {
      name: 'Ordenes',
      icon: <ProductionQuantityLimitsIcon />,
      route: '/admin/orders'
    },
    {
      name: 'Usuarios',
      icon: <ManageAccountsIcon />,
      route: '/admin/users'
    },
    {
      name: 'Volver al inicio',
      icon: <HomeIcon />,
      route: '/'
    },
    {
      name: 'Logout',
      icon: <LogoutIcon />,
      route: '/'
    },
  ];

  return (
    <div className='admin-sidebar-container'>
        
      {/* Sidebar */}
      <Drawer variant="permanent" anchor="left" >
          <List className='admin-sidebar' >

            {MenuOptions.map((option) => (
                <Link href={`${option.route}`}>
                  <ListItem
                    button
                    key={option.name}
                    selected={selectedOption === option.name}
                    onClick={() => handleOptionClick(option.name)}
                    className='admin-sidebar-item'
                  >
                    <ListItemIcon>{option.icon}</ListItemIcon>
                    <ListItemText primary={option.name} />
                    <ArrowForwardIosIcon/>
                  </ListItem>
                </Link>
            ))}
          </List>
        </Drawer>
    </div>
  );
};

export default AdminSidebar;
