'use client'

import { COLORS } from '@/src/enum/colors'
import { Stack, Typography } from '@mui/material'
import { ProjectList } from './project-lists';
import { PROJECTS } from '@/src/enum/projects';

export const Projects = () => {
	return (
		<Stack sx={{
			backgroundColor: COLORS.BACKGROUND
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
				<span className="underline-word">Our</span> Projects
			</Typography>
			<ProjectList images={PROJECTS}/>
		</Stack>
	);
}