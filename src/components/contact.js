import './contact.css';
import axios from 'axios';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { Tooltip } from '@mui/material';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import MuiAlert from '@mui/material/Alert';
import { useState, forwardRef } from 'react';
import Snackbar from '@mui/material/Snackbar';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const validationSchema = yup.object({
    name: yup
        .string('Enter your Name')
        .required('Name is Required'),
    number: yup
        .number('Enter Contact Number')
        .required('Contact Number is Required'),
    message: yup
        .string('Enter your Message')
        .required('Message is Required'),
});

function Contact() {

    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickAway') {
            return;
        }
        setOpen(false);
    };

    const gmail = require('./images/gmail.webp');
    const github = require('./images/github.webp');
    const profile = require('./images/profile.webp');
    const linkedin = require('./images/linkedin.webp');

    const formik = useFormik({
        initialValues: {
            name: '',
            number: '',
            message: '',
        },
        validationSchema: validationSchema,
        onSubmit: () => {
            axios.post('https://64869defbeba6297278ef763.mockapi.io/PortfolioFeedback', {
                Name: formik.values.name,
                Number: formik.values.number,
                Message: formik.values.message,
            });
            handleClick();
            formik.resetForm();
        },
    });

    const theme = createTheme({
        typography: {
            body1: {
                fontFamily: 'Poppins',
                fontSize: '1.1rem',
                '@media (max-width: 950px)': {
                    fontSize: '1rem',
                },
                '@media (max-width: 550px)': {
                    fontSize: '0.9rem',
                },
                '@media (max-width: 450px)': {
                    fontSize: '0.8rem',
                },
            }
        },
    });

    return (
        <>
            <div className='contact-body'>
                <div className='contact-section'>
                    <div className='contact-1'>
                        <div className='contact-1-1'>
                            Connect with Me
                        </div>

                        <div className='contact-1-2'>
                            Contact me if you have any question
                        </div>
                    </div>

                    <div className='contact-2'>
                        <div className='contact-2-1'>
                            <div className='contact-2-1-1'>
                                Contact Me
                            </div>

                            <div className='contact-2-1-2'>
                                <p>Want to build a Responsive and Functional Personal Portfolio Website or a Business Website for your work? Just let me know, I'm here to help.</p>

                                <p>Feel free to talk to me about something that bothers you or just want to get information about anything on my webpage. You can contact me anytime.</p>

                                <p>Got suggestions or feedback about anything that I provide? Your ideas will be helpful for me and appreciated as well.</p>
                            </div>
                        </div>

                        <form onSubmit={formik.handleSubmit} className='contact-2-2'>
                            <div className='contact-2-2-1'>
                                Drop a Message or Feedback
                            </div>

                            <div className='contact-2-2-2'>
                                <div className='contact-2-2-2-section-1'>
                                    <ThemeProvider theme={theme}>
                                        <Typography variant='body1'>
                                            <TextField
                                                fullWidth
                                                name='name'
                                                variant='standard'
                                                id='contact-msg-1'
                                                label='Enter Your Name *'
                                                value={formik.values.name}
                                                onBlur={formik.handleBlur}
                                                onChange={formik.handleChange}
                                                helperText={formik.touched.name && formik.errors.name}
                                                error={formik.touched.name && Boolean(formik.errors.name)}
                                            />
                                        </Typography>
                                    </ThemeProvider>
                                </div>

                                <div className='contact-2-2-2-section-2'>
                                    <ThemeProvider theme={theme}>
                                        <Typography variant='body1'>
                                            <TextField
                                                fullWidth
                                                name='number'
                                                type='number'
                                                variant='standard'
                                                id='contact-msg-2'
                                                onBlur={formik.handleBlur}
                                                value={formik.values.number}
                                                onChange={formik.handleChange}
                                                label='Enter Contact Number *'
                                                helperText={formik.touched.number && formik.errors.number}
                                                error={formik.touched.number && Boolean(formik.errors.number)}
                                            />
                                        </Typography>
                                    </ThemeProvider>
                                </div>
                            </div>

                            <div className='contact-2-2-3'>
                                <ThemeProvider theme={theme}>
                                    <Typography variant='body1'>
                                        <TextField
                                            rows={6}
                                            multiline
                                            fullWidth
                                            name='message'
                                            variant='standard'
                                            id='contact-msg-3'
                                            label='Type your Message *'
                                            onBlur={formik.handleBlur}
                                            onChange={formik.handleChange}
                                            value={formik.values.message}
                                            helperText={formik.touched.message && formik.errors.message}
                                            error={formik.touched.message && Boolean(formik.errors.message)}
                                        />
                                    </Typography>
                                </ThemeProvider>
                            </div>

                            <div>
                                <Button
                                    type='submit'
                                    id='contact-submit'
                                    variant='contained'
                                >
                                    Submit
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>


                <div className='contact-3'>
                    <div className='contact-3-1'>
                        <Tooltip title='PortFolio' arrow >
                            <Link
                                target='_blank'
                                id='contact-3-section-1'
                                className='contact-3-section'
                                to='https://yashhkumarrrr.netlify.app'
                            >
                                <div className='contact-link-img'>
                                    <img
                                        alt=''
                                        className='contact-link-img'
                                        src={profile}
                                    />
                                </div>
                                <div className='contact-link-txt'>
                                    Visit my Portfolio
                                </div>
                            </Link>
                        </Tooltip>

                        <Tooltip title='Gmail' arrow >
                            <Link
                                target='_blank'
                                id='contact-3-section-2'
                                className='contact-3-section'
                                to='mailto:yashhkumarrrr@gmail.com'
                            >
                                <div className='contact-link-img'>
                                    <img
                                        alt=''
                                        className='contact-link-img'
                                        src={gmail}
                                    />
                                </div>
                                <div className='contact-link-txt'>
                                    Contact me on Gmail
                                </div>
                            </Link>
                        </Tooltip>
                    </div>

                    <div className='contact-3-1'>
                        <Tooltip title='LinkedIn' arrow >
                            <Link
                                target='_blank'
                                id='contact-3-section-3'
                                className='contact-3-section'
                                to='https://www.linkedin.com/in/yashhkumarrrr'
                            >
                                <div className='contact-link-img'>
                                    <img
                                        alt=''
                                        className='contact-link-img'
                                        src={linkedin}
                                    />
                                </div>
                                <div className='contact-link-txt'>
                                    Make me your Connection
                                </div>
                            </Link>
                        </Tooltip>

                        <Tooltip title='GitHub' arrow >
                            <Link
                                target='_blank'
                                id='contact-3-section-4'
                                className='contact-3-section'
                                to='https://www.github.com/yashhkumarrrr'
                            >
                                <div className='contact-link-img'>
                                    <img
                                        alt=''
                                        className='contact-link-img'
                                        src={github}
                                    />
                                </div>
                                <div className='contact-link-txt'>
                                    Follow me on Github
                                </div>
                            </Link>
                        </Tooltip>
                    </div>

                </div>

                <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                        Your message is successfully delivered!
                    </Alert>
                </Snackbar>

            </div>
        </>
    );
}

export default Contact;