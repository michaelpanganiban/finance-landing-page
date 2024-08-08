import { ServiceItems } from './service-items';
import { Grid, Stack } from '@mui/material';
import { SERVICES } from '@/src/enum/services';
import { servicesItems } from './types';


export default function ServicesList () {

	const firstThree = SERVICES.slice(0, 3).map((obj: servicesItems, index) => {
		return (
			<ServiceItems key={index} obj={obj} />
		);
	});

  return (
    <Stack>
			<Grid container columns={9} spacing={1} marginTop='3%'>
				{ firstThree }
			</Grid>
			{/* <Grid container columns={9} spacing={1} marginTop='3%'>
				
			</Grid> */}
		</Stack>
  );
}
