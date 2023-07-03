import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
//import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
//import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { Grid} from '@mui/material';
import img1 from './img1.svg';
import img2 from './img2.svg'
import './styles.scss'


const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    subtitle: 'Melhores ofertas personalizadas',
    title: 'Queima de stoque Nike 🔥',
    description: 'Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.',
    button_name: 'Ver Ofertas',
    imagem: img1,
    imagem2: img2,
    label: '',
   },
  {
    subtitle: 'Melhores ofertas personalizadas',
    title: 'Promoção 2 🔥',
    description: 'Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.',
    button_name: 'Ver Ofertas',
    imagem: img1,
    imagem2: img2,
    label: '',
  },
  {
    subtitle: 'Melhores ofertas personalizadas',
    title: 'Promoção 3 🔥',
    description: 'Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.',
    button_name: 'Ver Ofertas',
    imagem: img1,
    imagem2: img2,
    label: '',
   },
   {
    subtitle: 'Melhores ofertas personalizadas',
    title: 'Promoção 4 🔥',
    description: 'Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.',
    button_name: 'Ver Ofertas',
    imagem: img1,
    imagem2: img2,
    label: '',
   }
];

function SwipeableTextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  // const handleNext = () => {
  //   setActiveStep((prevActiveStep) => prevActiveStep + 1);
  // };

  // const handleBack = () => {
  //   setActiveStep((prevActiveStep) => prevActiveStep - 1);
  // };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <div className="box_carousel">
      <Box sx={{ maxWidth: '100%', flexGrow: 1 }}>
        <Paper 
          square
          elevation={0}
          sx={{
            display: 'flex',
            alignItems: 'center',
            height: 50,
            pl: 2,
            bgcolor: 'background.default',
          }}
        >
          <Typography>{images[activeStep].label}</Typography>
        </Paper>
        <AutoPlaySwipeableViews className='bg_slide' 
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
          
        >
          {images.map((step, index) => (
            <div key={step.label}>
              {Math.abs(activeStep - index) <= 2 ? (
                <Grid container className='carousel_slide'>
                  <Grid item className='slide_left'>
                    <div>
                        <h5 className='slide_subtitle'>{step.subtitle}</h5>
                        <h1 className='slide_title'>{step.title}</h1>
                        <p className='slide_description'>{step.description}</p>
                        <Button variant='contained'>{step.button_name}</Button>
                      </div> 
                  </Grid>
                  <Grid item className='slide_right'>
                    <div>
                      <img className='img1' src={step.imagem} alt="imagem_produto"/>
                      <img className='img2' src={step.imagem2} alt="imagem_bg"/>
                    </div>
                  </Grid>
                </Grid>
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>
        <MobileStepper
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          variant="dots"
          nextButton={<div></div>}
          backButton={<div></div>}
        />
      </Box>
    </div>
  );
}

export default SwipeableTextMobileStepper;
