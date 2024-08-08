'use client'

import { Stack, Typography } from '@mui/material'
import ServicesList from './services-list'

export const Services = () => {
	return (
		<Stack>
			<Typography 
				fontFamily={'sans-serif'}
				variant='h4'
				fontWeight={'bold'}
			>
				<span className="underline-word">Our</span> Services
			</Typography>
			<ServicesList />
		</Stack>
	)
}
