'use client'

import { COLORS } from '@/src/enum/colors';
import { Stack, Typography } from '@mui/material';
import { TeamDetails } from './team-details';

export const OurTeam = () => {
    return (
        <Stack>
			<Stack sx={{
				backgroundColor: COLORS.BACKGROUND
				}}
				minHeight={100}
			>
				<Typography 
					fontFamily={'sans-serif'}
					variant='h4'
					fontWeight={'bold'}
					marginTop={3}
					fontSize={{
						xs: 'small',
						sm: 35,
					}}
				>
					<span className="underline-word">Our</span> Team - Company Profile
				</Typography>
			</Stack>
			<Stack>
				<TeamDetails />
			</Stack>
		</Stack>
    );
}