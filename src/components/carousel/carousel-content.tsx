'use client'

import { Stack } from '@mui/material'

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
				<Stack
					component='img'
					sx={{
							maxHeight: '740px',
							display: 'block',
							overflow: 'hidden',
							width: '100%',
					}}
					src={props.image}
				/>
			) : null
		}
    </Stack>
	)
}