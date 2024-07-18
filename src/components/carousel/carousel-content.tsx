'use client'

import { Stack, Typography } from '@mui/material'

interface Props {
	image: string,
	index: number,
	activeStep: number,
}

export const CarouselContent = (props: Props) => {
  return (
		<Stack>
    {
			Math.abs(props.activeStep - props.index) <= 2 ? 
			(
				<Stack sx={{ position: 'relative', width: '100%', maxHeight: '740px' }}>
					<Stack
						component='img'
						sx={{
								display: 'block',
								overflow: 'hidden',
								width: '100%',
						}}
						src={props.image}
					/>
					  
				</Stack>
			) : null
		}
    </Stack>
	)
}