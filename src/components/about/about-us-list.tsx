/* eslint-disable @next/next/no-img-element */
'use strict'

import { Box, Grid, IconButton, ImageListItem, ImageListItemBar, Typography } from '@mui/material';
import { ABOUT_US } from '@/src/enum/about-us';
import { AboutUsImagesInterface } from './types';
import UnfoldMore from '@mui/icons-material/UnfoldMore';
import { COLORS } from '@/src/enum/colors';

export const AboutUsList = () => {

    const aboutUsDetails = ABOUT_US.map((item: AboutUsImagesInterface, index) => {
        return (
            <Grid item xs={1} key={index}>
                <ImageListItem className='image-list-item'>
                    <img
                        style={{
                            width: '100%',
                            height: 'auto',
                            position: 'relative',
                            transition: 'opacity 0.3s ease-in-out',
                          }}
                        srcSet={item.link}
                        src={item.link}
                        alt={item.imageName}
                        loading="eager"
                    />
                    <ImageListItemBar
                        title=''
                        position="below"
                        sx={{
                            height: 200,
                            backgroundColor: '#cccccc24'
                        }}
                        actionIcon={
                            <Box
                                sx={{
                                    position: 'absolute',
                                    margin: 3,
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    color: 'black',
                                    overflow: 'hidden', // Hide any overflow
                                }} 
                            >
                            <Grid container columns={6} spacing={2}>
                                <Grid item xs={5}>
                                    <Typography
                                        sx={{
                                                alignItems: 'center',
                                                overflow: 'hidden',
                                                fontWeight: 'bold',
                                                whiteSpace: 'normal',
                                                display: '-webkit-box',
                                                WebkitBoxOrient: 'vertical',
                                                WebkitLineClamp: 3, // Limit to 3 lines, adjust as needed
                                                marginBottom: 2,
                                                fontSize: 20,
                                                color: COLORS.SECONDARY
                                            }} 
                                        >
                                        {item.imageName}
                                    </Typography>
                                </Grid>
                                <Grid item xs={1}>
                                    <IconButton
                                        sx={{ color: COLORS.PRIMARY }}
                                        aria-label={`info about ${item.imageName}`}
                                        title= {item.imageName}
                                        >
                                        <UnfoldMore />
                                    </IconButton>
                                </Grid>
                            </Grid>
                            <Typography
                                sx={{
                                    fontSize: 12,
                                    alignItems: 'center',
                                    overflow: 'hidden',
                                    whiteSpace: 'normal',
                                    display: '-webkit-box',
                                    WebkitBoxOrient: 'vertical',
                                    WebkitLineClamp: 3, // Limit to 3 lines, adjust as needed
                                }} 
                            >
                                {item.details}
                            </Typography>
                            </Box>
                        }
                    />
                </ImageListItem>
            </Grid>
        )
    });

    return (
        <Box className='sub-body sub-body-items'>
            <Grid container columns={3} spacing={2}>
                { aboutUsDetails }
            </Grid>
        </Box>
    );
}