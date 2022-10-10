import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { bookSearch } from '../../../../store/actions/booksSearchAction';
import { randomBooks1, randomBooks2, randomBooks3 } from '../../../../helpers/randomBooks';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const Slider = ({ category, images }) => {

        // Код ниже - зашлушка для слайдера на главной
        const helperBooks = [...randomBooks1, ...randomBooks2, ...randomBooks3];
        console.log(helperBooks);
        const dispatch = useDispatch();
        dispatch(bookSearch(helperBooks));
        //

    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = images.length;

    const id = images[activeStep].id;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step) => {
        setActiveStep(step);
    };

    return (
        <section className='slider'>
            <h3 className='slider__heading'>
                Категория:{category}
            </h3>
            <Box sx={{
                maxWidth: 375,
                flexGrow: 1,
                borderRadius: "8px",
                overflow: "hidden",
                border: "3px solid #FFCA42",
            }}>
                <Paper
                    square
                    elevation={0}
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        height: 50,
                        pl: 2,
                        bgcolor: '#FFFFFF',
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: "18px",
                            fontWeight: "500",
                            color: "#1B3764"
                        }}
                    ><Link className="book__link" to={`/book/${id}`}>{images[activeStep].label}</Link></Typography>
                </Paper>
                <AutoPlaySwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={activeStep}
                    onChangeIndex={handleStepChange}
                    enableMouseEvents
                >
                    {images.map((step, index) => (
                        <Link className="book__link" to={`/book/${id}`}>
                        <div key={step.label}>
                            {Math.abs(activeStep - index) <= 2 ? (
                                <Box
                                    component="img"
                                    sx={{
                                        height: 400,
                                        display: 'block',
                                        maxWidth: 375,
                                        overflow: 'hidden',
                                        width: '100%',
                                    }}
                                    src={step.imgPath}
                                    alt={step.label}
                                />
                            ) : null}
                        </div>
                        </Link>
                    ))}
                </AutoPlaySwipeableViews>
                <MobileStepper
                    steps={maxSteps}
                    position="static"
                    activeStep={activeStep}
                    nextButton={
                        <Button
                            size="small"
                            onClick={handleNext}
                            sx={{
                                fontSize: "14px",
                                fontWeight: "500",
                                color: "#1B3764"
                            }}
                            disabled={activeStep === maxSteps - 1}
                        >
                            Следующая
                            {theme.direction === 'rtl' ? (
                                <KeyboardArrowLeft />
                            ) : (
                                <KeyboardArrowRight />
                            )}
                        </Button>
                    }
                    backButton={
                        <Button size="small"
                            onClick={handleBack}
                            disabled={activeStep === 0}
                            sx={{
                                fontSize: "14px",
                                fontWeight: "500",
                                color: "#1B3764"
                            }}>
                            {theme.direction === 'rtl' ? (
                                <KeyboardArrowRight />
                            ) : (
                                <KeyboardArrowLeft />
                            )}
                            Предыдущая
                        </Button>
                    }
                />
            </Box>
        </section>

    );
}

export default Slider;
