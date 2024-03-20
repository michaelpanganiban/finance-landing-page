'use client'

import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { constants } from '@/src/enum/constants';
import { CarouselContent } from './carousel-content';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

export const SwipeableTextMobileStepper = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
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
        {constants.CAROUSEL_IMAGES.map((step, index) => (
          <CarouselContent 
            key={index}
            image={step.imagePath} 
            index={0} 
            activeStep={0}            
          />
        ))}
      </AutoPlaySwipeableViews>
    </Stack>
  );
}