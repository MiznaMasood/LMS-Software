import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import style from './Navbar.module.css';

const Navbar = () => {
  return (
    <AppBar position="fixed" sx={{ width: 'calc(100% - 240px)', ml: '240px', backgroundColor: 'transparent', boxShadow: 'none' }}>
      <Toolbar className={style.navbar}>  {/* Apply custom class directly here */}
        <SchoolIcon sx={{ mr: 2 }} className={style.icon} />
        <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }} className={style.title}>
          Learning Management System
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;





