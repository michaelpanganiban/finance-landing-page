'use client'

import { useTheme } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { CAROUSEL_IMAGES } from '@/src/enum/constants';
import { CarouselContent } from './carousel-content';
import { useState } from 'react';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

export const Home = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    <Stack>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {CAROUSEL_IMAGES.map((step, index) => (
          <CarouselContent 
            key={index}
            image={step.imagePath} 
            index={index} 
            activeStep={activeStep}            
          />
        ))}
      </AutoPlaySwipeableViews>
    </Stack>
  );
}