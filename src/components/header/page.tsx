'use client'

import * as React from 'react';
import { AppBar, Stack, styled } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { HeaderDetails } from './header-details';


const HeaderBar = styled(AppBar, {
  name: 'HeaderComponent',
  slot: 'Root'
})(({ theme }) => ({
  [theme.breakpoints.down('xs')]: { 
    height: '25%',
  },
  [theme.breakpoints.between('xs', 'sm')]: { 
    height: '15%',
  },

  [theme.breakpoints.between('sm', 'lg')]: { 
      height: '15%',
  },
}))
export default function Header() {
  return (
    <Stack>
      <CssBaseline />
      <HeaderBar>
        <HeaderDetails />
      </HeaderBar>
    </Stack>
  );
}