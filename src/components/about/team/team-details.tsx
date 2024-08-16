'use client'

import { Box, Stack, Typography } from '@mui/material'
import { TeamMembers } from './team-members'

export const TeamDetails = () => {
    return (
        <Stack>
            <Box
                sx={{
                    display: 'flex',           // Enable flexbox
                    textAlign: 'center',
                    marginLeft: 50,
                    marginRight: 50,
                }}
            >
                <Typography
                    sx={{
                            overflow: 'hidden',
                            fontWeight: 'bold',
                            whiteSpace: 'normal',
                            marginBottom: 2,
                            marginTop: 5,
                            fontSize: {
                                xs: 10,
                                lg: 15
                            },
                            color: '#746a6a'
                        }} 
                    >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.
                </Typography>
            </Box>
            <Box>
                <TeamMembers />
            </Box>
        </Stack>
    )
}