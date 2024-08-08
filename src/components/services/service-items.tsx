import { Grid, Stack, Typography } from '@mui/material';
import * as Icon from '@mui/icons-material';
import { servicesItems } from './types';
import { COLORS } from '@/src/enum/colors';

interface ServiceItemProps {
  obj: servicesItems;
}

// eslint-disable-next-line no-undef
export const ServiceItems: React.FC<ServiceItemProps> = ({ obj }) => {
		const IconComponent = Icon[obj.icon as keyof typeof Icon];
    return (
			<>
				<Grid item>
					<Stack alignItems={{ xs: 'center', md: 'start' }}>
						<IconComponent
							sx={{
								color: COLORS.SECONDARY,
								fontSize: {
									xs: 'medium',
									sm: 25,
									md: 50,
									lg: 100
								}
							}} />
					</Stack>
				</Grid><Grid item xs={2}>
					<Stack alignItems={{ xs: 'center', md: 'start' }}>
						<Typography
							variant='h5'
							fontWeight='bold'
							fontSize={{
								xs: 10,
								sm: 'medium'
							}}
						>
							{obj.title}
						</Typography>
						<Typography
							fontWeight='light'
							alignItems={{ xs: 'center', md: 'start' }}
							fontSize={{
								xs: 10,
								sm: 'medium'
							}}
						>
							{obj.description}
						</Typography>
					</Stack>
				</Grid>
			</>
    );
}