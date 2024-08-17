'use strict'

import { COLORS } from '@/src/enum/colors';
import { Contacts } from './contacts';
import { Divider, Stack, Typography } from '@mui/material';
import { FooterBody } from './body';

export const Footer = () => {
    return (
		<Stack 
            sx={{
                backgroundColor: COLORS.DARK,
                alignItems: 'center', // Horizontally center items
            }}
            minHeight={350}
		>
			<Contacts />
            <Divider 
                sx={{
                    bgcolor: '#686868',
                    marginTop: 2,
                    width: '90%',
                }}
            />
            <FooterBody />
            <Divider 
                sx={{
                    bgcolor: '#686868',
                    marginTop: 2,
                    width: '100%',
                }}
            />
            <Typography
                sx={{
                    color: COLORS.WHITE,
                    fontSize: 13,
                    marginTop: 2,
                    textAlign: 'left',
                    marginLeft: 15,
                    marginBottom: {
                        xs: 3,
                        md: 1
                    },
                    transition: 'color 0.3s ease', 
                    '&:hover': {
                        color: COLORS.SECONDARY,
                        cursor: 'pointer'
                    },
                }}
            >
                Copyright 2024 Finance. All rights reserved
            </Typography>
		</Stack>
	);
}