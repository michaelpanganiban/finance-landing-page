'use client'

import { COLORS } from '@/src/enum/colors';
import { Stack, Typography } from '@mui/material';
import { SpecializationList } from './specialization-list';

export const Speacilization = () => {
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
						sm: 20,
						md: 25,
						lg: 30
					}}
				>
					<span className="underline-word">Expertise</span> - What we can offer you
				</Typography>
			</Stack>
			<Stack>
                <SpecializationList />
			</Stack>
		</Stack>
    );
}