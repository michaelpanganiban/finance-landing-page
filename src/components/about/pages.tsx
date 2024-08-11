'use strict'

import { COLORS } from '@/src/enum/colors'
import { Stack, Typography } from '@mui/material'
import { AboutUsList } from './about-us-list';

export const AboutUs = () => {
    return (
		<Stack sx={{
			backgroundColor: COLORS.WHITE
		}}
		minHeight={500}
		>
			<Typography 
				fontFamily={'sans-serif'}
				variant='h4'
				fontWeight={'bold'}
				marginTop={5}
				fontSize={{
					xs: 'small',
					sm: 35,
				}}
			>
				<span className="underline-word">About</span> Us
			</Typography>
            <AboutUsList />
		</Stack>
    );
}