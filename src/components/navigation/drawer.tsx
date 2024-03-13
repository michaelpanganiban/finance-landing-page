'use client'

import { Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemText, Typography } from "@mui/material";
import { constants } from "../../../theme/enum/constants";
import React from "react";

interface Props {
	mobileOpen: boolean,
	handleDrawerToggle: () => void,
	navItems: string [],
}
	
export const NavDrawer = (props: Props) => {
	const drawer = (
		<Box onClick={props.handleDrawerToggle} sx={{ textAlign: 'center' }}>
			<Typography variant="h6" sx={{ my: 2 }}>
				{constants.TITLE}
			</Typography>
			<Divider />
			<List>
				{props.navItems.map((item) => (
					<ListItem key={item} disablePadding>
						<ListItemButton sx={{ textAlign: 'center' }}>
							<ListItemText primary={item} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</Box>
	);
	
	return (
		<nav>
				<Drawer
					variant="temporary"
					open={props.mobileOpen}
					onClose={props.handleDrawerToggle}
					ModalProps={{
							keepMounted: true, // Better open performance on mobile.
					}}
					sx={{
							display: { xs: 'block', sm: 'none' },
							'& .MuiDrawer-paper': { boxSizing: 'border-box', width: constants.DRAWER_WIDTH },
					}}
				>
					{drawer}
				</Drawer>
		</nav>
	);
}