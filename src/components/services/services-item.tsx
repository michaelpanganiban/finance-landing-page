import { IconButton, ImageListItem, ImageListItemBar } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import { servicesItems } from './types'

interface Props {
	item: servicesItems
}

export default function ServicesItem(props: Props) {
	return (
		<ImageListItem key={props.item.img}>
			<img
				srcSet={`${props.item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
				src={`${props.item.img}?w=248&fit=crop&auto=format`}
				alt={props.item.title}
				loading="lazy"
			/>
			<ImageListItemBar
				title={props.item.title}
				subtitle={props.item.author}
				actionIcon={
					<IconButton
						sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
						aria-label={`info about ${props.item.title}`}
					>
						<InfoIcon />
					</IconButton>
				}
			/>
		</ImageListItem>
	);
}