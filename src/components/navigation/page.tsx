'use client'

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { NavDrawer } from './drawer';
import { Grid, Stack, styled } from '@mui/material';
import { COLORS } from '@/src/enum/colors';
import { useState } from 'react';

const navItems = ['Home', 'Services', 'Portfolio', 'Blogs', 'About', 'Contact'];

export default function NavBar () {
	const [mobileOpen, setMobileOpen] = useState(false);
	const handleDrawerToggle = () => {
		setMobileOpen((prevState) => !prevState);
	};

  const NavBar = styled(AppBar, {
    name: 'NavBarComponent',
    slot: 'Root'
  })({})

  return (
    <Stack sx={{ display: 'flex' }}>
      <CssBaseline />
      <NavBar>
        <Toolbar sx={{ height: '100px' }}>
          <Grid container columns={12}>
            <Grid item xs={12} sm={6}>
              <Stack alignItems={{ xs: 'start', sm: 'center' }} >
                <Stack
                  component="img"
                  alt="Company logo"
                  src='logo.png'
                  width={{ xs: '100%', sm: 'inherit' }}
                />
              </Stack>
            </Grid>
            <Grid item xs={6} order={{ xs: 3, md: 2 }}>
              <Stack alignItems={{ xs: 'end', sm: 'center' }}>
                <Stack sx={{ display: { xs: 'none', md: 'inline' } }}>
                  {navItems.map((item) => (
                    <Button key={item} 
                      sx={{ 
                        color: COLORS.BLACK,
                        '&:hover': { color: COLORS.SECONDARY, fontWeight: 'bold' } 
                      }}  
                      >
                      {item}
                    </Button>
                  ))}
                </Stack>
              </Stack>
            </Grid>
            <Grid item xs={6} order={{ xs: 2, md: 3 }}>
              <Stack alignItems={'end'}>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  sx={{ mr: 2, display: { xs: 'flex', md: 'none' } }}
                >
                  <MenuIcon />
                </IconButton>
              </Stack>
            </Grid>
          </Grid>
        </Toolbar>
      </NavBar>
      {/* navbar drawer component */}
      <NavDrawer 
        mobileOpen={mobileOpen} 
        handleDrawerToggle={handleDrawerToggle}
        navItems={navItems}
      />
    </Stack>
  );
}