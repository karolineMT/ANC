import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const AppBarSample = () => {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
          ANTENATAL CARE MANAGEMENT SYSTEM
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default AppBarSample;
