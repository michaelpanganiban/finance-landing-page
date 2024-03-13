'use client'

import * as React from 'react';
import { AppBar, Stack, styled } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { HeaderDetails } from './header-details';


const HeaderBar = styled(AppBar, {
  name: 'HeaderComponent',
  slot: 'Root'
})(() => ({}))
export default function Header() {
  return (
    <Stack>
      <CssBaseline />
      <HeaderBar sx={{ height: {xs: '25%', sm: '13%', md: '10%', lg: 'inherit'} }}>
        <HeaderDetails />
      </HeaderBar>
    </Stack>
  );
}