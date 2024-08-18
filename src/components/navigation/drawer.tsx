'use client'

import { DRAWER_WIDTH } from '@/src/enum/constants';
import { Divider, Drawer, List, ListItem, ListItemButton, ListItemText, Stack } from '@mui/material';
import React from 'react';

interface NavigationInterface {
	name: string,
	id: string
}

interface Props {
	mobileOpen: boolean,
	handleDrawerToggle: () => void,
	navItems: NavigationInterface [],
}
	
export const NavDrawer = (props: Props) => {
	const drawer = (
		<Stack onClick={props.handleDrawerToggle} sx={{ textAlign: 'center'}} alignItems={'center'} padding={2}>
			<Stack
				component="img"
				alt="Company logo"
				src='logo.png'
				width='fit-content'
			/>
			<Divider sx={{width:'100%', marginTop: 2}} />
			<List>
				{props.navItems.map((navItem) => (
					<Stack key={navItem.id}>
						<ListItem disablePadding>
							<ListItemButton sx={{ textAlign: 'center' }} component='a' href={`${navItem.id}`}>
								<ListItemText primary={navItem.name}/>
							</ListItemButton>
						</ListItem>
					</Stack>
				))}
			</List>
		</Stack>
	);
	
	return (
		<nav>
				<Drawer
					variant="temporary"
					open={props.mobileOpen}
					onClose={props.handleDrawerToggle}
					anchor='right'
					ModalProps={{
							keepMounted: true, // Better open performance on mobile.
					}}
					sx={{
							display: { xs: 'block', md: 'none' },
							'& .MuiDrawer-paper': { boxSizing: 'border-box', width: DRAWER_WIDTH },
					}}
				>
					{drawer}
				</Drawer>
		</nav>
	);
}