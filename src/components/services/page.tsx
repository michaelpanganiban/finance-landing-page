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
				fontSize={{
					xs: 'small',
					sm: 20,
					md: 35
				}}
			>
				<span className="underline-word">Our</span> Services
			</Typography>
			<ServicesList />
		</Stack>
	)
}
