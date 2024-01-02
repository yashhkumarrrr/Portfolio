import './home.css';
import axios from 'axios';
import * as yup from 'yup';
import * as React from 'react';
import { useFormik } from 'formik';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import Timeline from '@mui/lab/Timeline';
import Drawer from '@mui/material/Drawer';
import MuiAlert from '@mui/material/Alert';
import { useState, forwardRef } from 'react';
import Snackbar from '@mui/material/Snackbar';
import TimelineDot from '@mui/lab/TimelineDot';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';

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

function Home() {

    const [open, setOpen] = useState(false);

    const openSnackbar = () => {
        setOpen(true);
    };

    const closeSnackbar = (reason) => {
        if (reason === 'clickAway') {
            return;
        }
        setOpen(false);
    };

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
            openSnackbar();
            formik.resetForm();
        },
    });

    const resume = require('./resume.pdf');
    const djb = require('./images/djb.webp');
    const gmail = require('./images/gmail.webp');
    const photo1 = require('./images/photo1.webp');
    const photo2 = require('./images/photo2.webp');
    const github = require('./images/github.webp');
    const IdCard = require('./images/id-card.webp');
    const appointy = require('./images/appointy.webp');
    const whatsapp = require('./images/whatsapp.webp');
    const logoDark = require('./images/logo-dark.webp');
    const linkedin2 = require('./images/linkedin.webp');
    const linkedin1 = require('./images/linkedin-2.webp');
    const projectDone = require('./images/project-done.webp');
    const projectCurrent = require('./images/current-project.webp');

    const [box, setBox] = React.useState({
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setBox({ ...box, [anchor]: open });
    };

    return (
        <>
            <div className='WebApp'>
                {/* Home Page */}

                <div className='homepage'>
                    <div className='header'>
                        <div className='header-img'>
                            <a href='#home' aria-label="Home">
                                <img className='header-logo' alt='Logo' src={logoDark} />
                            </a>
                        </div>

                        <div id='header-links-tray'>
                            <a
                                href='#home'
                                className='header-links'
                            >
                                Home
                            </a>

                            <a
                                href='#about'
                                className='header-links'
                            >
                                About
                            </a>

                            <a
                                href='#exp'
                                className='header-links'
                            >
                                Experiences
                            </a>

                            <a
                                href='#contact'
                                className='header-links'
                            >
                                Contact
                            </a>
                        </div>

                        <div className='header-menu-tray'>
                            {['right'].map((anchor) => (
                                <React.Fragment key={anchor}>
                                    <div className='header-menu-icon'>
                                        <IconButton
                                            aria-label="Menu"
                                            id='header-menu-btn'
                                            onClick={toggleDrawer(anchor, true)}
                                        >
                                            <MenuIcon id='header-menu-icon-btn' />
                                        </IconButton>
                                    </div>

                                    <Drawer
                                        anchor={anchor}
                                        open={box[anchor]}
                                        onClose={toggleDrawer(anchor, false)}
                                    >
                                        <Box
                                            id='header-tray-box'
                                            onClick={toggleDrawer(anchor, false)}
                                            onKeyDown={toggleDrawer(anchor, false)}
                                            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 200 }}
                                        >
                                            <div>
                                                <div className='home-tray-links'>
                                                    <a
                                                        href='#home'
                                                        id='home-tray-link'
                                                    >
                                                        Home
                                                    </a>
                                                </div>

                                                <div className='home-tray-links'>
                                                    <a
                                                        href='#about'
                                                        id='home-tray-link'
                                                    >
                                                        About
                                                    </a>
                                                </div>

                                                <div className='home-tray-links'>
                                                    <a
                                                        href='#exp'
                                                        id='home-tray-link'
                                                    >
                                                        Experiences
                                                    </a>
                                                </div>

                                                <div className='home-tray-links'>
                                                    <a
                                                        href='#contact'
                                                        id='home-tray-link'
                                                    >
                                                        Contact
                                                    </a>
                                                </div>
                                            </div>
                                        </Box>
                                    </Drawer>
                                </React.Fragment>
                            ))}
                        </div>
                    </div>

                    <div id='home'>
                        <div className='home-div-1'>
                            <div
                                id='home-div-1-1'
                            >
                                Hello, my name is
                            </div>

                            <div
                                id='home-div-1-2'
                            >
                                Yash Kumar
                            </div>

                            <div
                                id='home-div-1-3'
                            >
                                A Creative Web Developer and an Electronics Engineer
                            </div>

                            <div
                                id='home-div-1-4'
                            >
                                <a
                                    id='home-div-1-4-link'
                                    href='#about'
                                >
                                    Know More
                                </a>
                            </div>
                        </div>

                        <div className='home-div-2'>
                            <img src={photo1} id='home-img' alt='YashPhoto' />
                        </div>
                    </div>
                </div>

                {/* About */}

                <div id='about'>
                    <div className='about-head'>
                        <span className='about-head-txt-1'>ABOUT</span>
                        &nbsp;
                        <span className='about-head-txt-2'>ME</span>
                    </div>

                    <div className='about-body'>
                        <div className='about-body-div'>
                            <div className='about-body-1'>
                                <img src={photo2} id='about-body-img' alt='YashPhoto' />
                            </div>

                            <div className='about-body-2'>
                                <div className='about-body-2-1'>
                                    <span className='about-body-2-1-red'>
                                        Greetings
                                    </span>
                                    &nbsp;for you
                                    <span className='about-body-2-1-red'>
                                        !!
                                    </span>
                                </div>

                                <div className='about-body-2-2'>
                                    I'm currently a 4th year B.Tech student at Netaji Subhas University of Technology, Dwarka, Delhi in the field of Electronics and Communication Engineering. A web developer with strong focus on quality of content and perfection.
                                </div>

                                <div className='about-body-2-3'>
                                    <div className='about-body-2-3-1'>
                                        <div>
                                            Birthday
                                        </div>

                                        <div>
                                            Phone
                                        </div>

                                        <div>
                                            Gmail
                                        </div>

                                        <div>
                                            From
                                        </div>

                                        <div>
                                            Language
                                        </div>

                                        <div>
                                            Freelance
                                        </div>
                                    </div>

                                    <div className='about-body-2-3-2'>
                                        <div>
                                            : &nbsp;12th April
                                        </div>

                                        <div>
                                            : &nbsp;8826367476
                                        </div>

                                        <div>
                                            : &nbsp;yashhkumarrrr
                                        </div>

                                        <div>
                                            : &nbsp;Delhi, India
                                        </div>

                                        <div>
                                            : &nbsp;English, Hindi
                                        </div>

                                        <div>
                                            : &nbsp;Available
                                        </div>
                                    </div>
                                </div>

                                <div className='about-body-2-4'>
                                    <div>
                                        <a
                                            href={resume}
                                            target='_blank'
                                            rel="noreferrer"
                                            className='about-resume-btn'

                                        >
                                            Download CV
                                        </a>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div >

                {/* Experience */}

                < div id='exp' >
                    <div className='exp-head'>
                        <span className='exp-head-txt-1'>EXPERI</span>
                        <span className='exp-head-txt-2'>ENCE</span>
                    </div>

                    <div className='timeline-1'>
                        <Timeline position='alternate'>
                            <TimelineItem>
                                <TimelineOppositeContent
                                    sx={{ m: 'auto 0' }}
                                >
                                    <div className='timeline-1-minor-1'>
                                        Product Development
                                    </div>

                                    <div className='timeline-1-minor-2'>
                                        5<sup>th</sup> Jun 23 - 5<sup>th</sup> Aug 23
                                    </div>
                                </TimelineOppositeContent>

                                <TimelineSeparator>
                                    <TimelineConnector />
                                    <TimelineDot sx={{ backgroundColor: '#0095c6' }}>
                                        <img src={appointy} alt='' id='timeline-1-icon-1' />
                                    </TimelineDot>
                                    <TimelineConnector />
                                </TimelineSeparator>

                                <TimelineContent sx={{ py: '20px', px: 2 }}>
                                    <div className='timeline-1-major-1'>
                                        Appointy India Ltd.
                                    </div>

                                    <div className='timeline-1-major-2'>
                                        Worked as a Product Developer using React.JS for developing functional and responsive webpages so that the existing or new clients of the company can schedule an Appointment for a meeting with our executives to get Financial or Technical Assistance as per their requirements
                                    </div>
                                </TimelineContent>
                            </TimelineItem>

                            <TimelineItem>
                                <TimelineOppositeContent
                                    sx={{ m: 'auto 0' }}
                                >
                                    <div className='timeline-1-minor-1'>
                                        Analyst
                                    </div>

                                    <div className='timeline-1-minor-2'>
                                        31<sup>st</sup> Dec 21 - 14<sup>th</sup> Jan 22
                                    </div>
                                </TimelineOppositeContent>

                                <TimelineSeparator>
                                    <TimelineConnector />
                                    <TimelineDot sx={{ backgroundColor: '#9e00dc' }}>
                                        <img src={djb} alt='' id='timeline-1-icon-2' />
                                    </TimelineDot>
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent sx={{ py: '30px', px: 2 }}>
                                    <div className='timeline-1-major-1'>
                                        Delhi Jal board
                                    </div>

                                    <div className='timeline-1-major-2' id='timeline-1-float'>
                                        Worked as an Analyst and went through the data stored on the Government Servers and to check for any discrepancies. Also, get a chance to contact the consumers and listen to the issues and problems faced by them related to our services, so that the authorities can provide a better experience for consumers
                                    </div>
                                </TimelineContent>
                            </TimelineItem>
                        </Timeline>
                    </div>

                    <div className='timeline-2'>
                        <Timeline
                            sx={{
                                [`& .${timelineItemClasses.root}:before`]: {
                                    flex: 0,
                                    padding: 0,
                                },
                            }}
                        >
                            <TimelineItem>
                                <TimelineSeparator>
                                    <TimelineDot sx={{ backgroundColor: '#0095c6' }}>
                                        <img src={appointy} alt='' id='timeline-2-icon-1' />
                                    </TimelineDot>
                                    <TimelineConnector />
                                </TimelineSeparator>

                                <TimelineContent sx={{ py: '20px', px: 2 }}>
                                    <div className='timeline-2-major-1'>
                                        Appointy India Ltd.
                                    </div>

                                    <div className='timeline-2-minor-1'>
                                        Product Developement
                                    </div>

                                    <div className='timeline-2-minor-2'>
                                        5<sup>th</sup> Jun 23 - 5<sup>th</sup> Aug 23
                                    </div>

                                    <div className='timeline-2-major-2'>
                                        Worked as a Product Developer using React.JS for developing functional and responsive webpages so that the existing or new clients of the company can schedule an Appointment for a meeting with our executives to get Financial or Technical Assistance as per their requirements
                                    </div>
                                </TimelineContent>
                            </TimelineItem>

                            <TimelineItem>
                                <TimelineSeparator>
                                    <TimelineDot sx={{ backgroundColor: '#9e00dc' }}>
                                        <img src={djb} alt='' id='timeline-2-icon-2' />
                                    </TimelineDot>
                                    <TimelineConnector />
                                </TimelineSeparator>

                                <TimelineContent sx={{ py: '20px', px: 2 }}>
                                    <div className='timeline-2-major-1'>
                                        Delhi Jal Board
                                    </div>

                                    <div className='timeline-2-minor-1'>
                                        Analyst
                                    </div>

                                    <div className='timeline-2-minor-2'>
                                        31<sup>st</sup> Dec 21 - 14<sup>th</sup> Jan 22
                                    </div>

                                    <div className='timeline-2-major-2'>
                                        Worked as an Analyst and went through the data stored on the Government Servers and to check for any discrepancies. Also, get a chance to contact the consumers and listen to the issues and problems faced by them related to our services, so that the authorities can provide a better experience for consumers
                                    </div>
                                </TimelineContent>
                            </TimelineItem>
                        </Timeline>
                    </div>
                </div >

                <div className='exp-info'>
                    <div className='exp-info-section'>
                        <div className='exp-info-section-1'>
                            <div>
                                <img
                                    alt=''
                                    src={projectDone}
                                    className='exp-info-img'
                                />
                            </div>

                            <div className='exp-info-txt'>
                                10+
                            </div>

                            <div>
                                Completed Projects
                            </div>
                        </div>

                        <div className='exp-info-section-2'>
                            <div>
                                <img
                                    alt=''
                                    src={IdCard}
                                    className='exp-info-img'
                                />
                            </div>

                            <div className='exp-info-txt'>
                                2
                            </div>

                            <div>
                                Internships
                            </div>
                        </div>
                    </div>

                    <div className='exp-info-section'>
                        <div className='exp-info-section-3'>
                            <div>
                                <img
                                    alt=''
                                    src={linkedin1}
                                    className='exp-info-img'
                                />
                            </div>

                            <div className='exp-info-txt'>
                                950+
                            </div>

                            <div>
                                Connections
                            </div>
                        </div>

                        <div className='exp-info-section-4'>
                            <div>
                                <img
                                    alt=''
                                    src={projectCurrent}
                                    className='exp-info-img'
                                />
                            </div>

                            <div className='exp-info-txt'>
                                5+
                            </div>

                            <div>
                                Current Projects
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact */}

                <div id='contact'>
                    <div className='contact-head'>
                        <span className='contact-head-txt-1'>GET IN</span>
                        &nbsp;
                        <span className='contact-head-txt-2'>TOUCH</span>
                    </div>

                    <div className='contact-1-2'>
                        <div className='contact-text'>
                            <div className='contact-text-head'>
                                DON'T BE SHY!
                            </div>

                            <div className='contact-text-content'>
                                <p>Want to build a Responsive and Functional Personal Portfolio Website or a Business Website for your work? Just let me know, I'm here to help</p>

                                <p>Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or oppurtunities to be part of your vision</p>

                                <p>Got any suggestions or feedback about anything that I provide? Your valuable suggestions will help me a lot to improve my skills and experience</p>
                            </div>
                        </div>

                        <form onSubmit={formik.handleSubmit} className='contact-form'>
                            <div>
                                <div className='contact-form-input-div'>
                                    <input
                                        name='name'
                                        autoComplete='off'
                                        value={formik.values.name}
                                        onBlur={formik.handleBlur}
                                        className='contact-form-input'
                                        onChange={formik.handleChange}
                                        placeholder='Enter Your Name *'
                                    />
                                    {formik.touched.name &&
                                        <div className='contact-form-error'>{formik.errors.name}</div>
                                    }
                                </div>

                                <div className='contact-form-input-div'>
                                    <input
                                        name='number'
                                        type='number'
                                        autoComplete='off'
                                        onBlur={formik.handleBlur}
                                        value={formik.values.number}
                                        className='contact-form-input'
                                        onChange={formik.handleChange}
                                        placeholder='Enter Contact Number *'
                                    />
                                    {formik.touched.number &&
                                        <div className='contact-form-error'>{formik.errors.number}</div>
                                    }
                                </div>

                                <div className='contact-form-input-div'>
                                    <textarea
                                        rows={6}
                                        name='message'
                                        autoComplete='off'
                                        onBlur={formik.handleBlur}
                                        value={formik.values.message}
                                        className='contact-form-input'
                                        onChange={formik.handleChange}
                                        placeholder='Type your Message *'
                                    />
                                    {formik.touched.message &&
                                        <div className='contact-form-error'>{formik.errors.message}</div>
                                    }
                                </div>
                            </div>

                            <div>
                                <button
                                    type='submit'
                                    className='contact-form-btn'
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>

                    <div className='contact-info'>
                        <div className='contact-info-1'>
                            <Link
                                target='_blank'
                                id='contact-info-section-1'
                                className='contact-info-section'
                                to='mailto:yashhkumarrrr@gmail.com'
                            >
                                <div>
                                    <img
                                        src={gmail}
                                        alt='GmailLogo'
                                        className='contact-info-link-img'
                                    />
                                </div>
                                <div className='contact-info-link-txt'>
                                    Reach me on Email
                                </div>
                            </Link>

                            <Link
                                target='_blank'
                                id='contact-info-section-2'
                                className='contact-info-section'
                                to={`https://api.whatsapp.com/send?phone=${+918826367476}`}
                            >
                                <div>
                                    <img
                                        src={whatsapp}
                                        alt='WhatsAppLogo'
                                        className='contact-info-link-img'
                                    />
                                </div>
                                <div className='contact-info-link-txt'>
                                    Contact me on WhatsApp
                                </div>
                            </Link>
                        </div>

                        <div className='contact-info-1'>
                            <Link
                                target='_blank'
                                id='contact-info-section-3'
                                className='contact-info-section'
                                to='https://www.linkedin.com/in/yashhkumarrrr'
                            >
                                <div>
                                    <img
                                        src={linkedin2}
                                        alt='LinkedInLogo'
                                        className='contact-info-link-img'
                                    />
                                </div>

                                <div className='contact-info-link-txt'>
                                    Make me your Connection
                                </div>
                            </Link>

                            <Link
                                target='_blank'
                                id='contact-info-section-4'
                                className='contact-info-section'
                                to='https://www.github.com/yashhkumarrrr'
                            >
                                <div>
                                    <img
                                        src={github}
                                        alt='GitHubLogo'
                                        className='contact-info-link-img'
                                    />
                                </div>
                                <div className='contact-info-link-txt'>
                                    Follow me on Github
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className='footer'>
                    Developed by -&nbsp;
                    <Link
                        target='_blank'
                        id='footer-link'
                        to='https://yashhkumarrrr.netlify.app'
                    >
                        Yash
                    </Link>
                </div>

                <Snackbar open={open} autoHideDuration={3000} onClose={closeSnackbar}>
                    <Alert onClose={closeSnackbar} severity="success" sx={{ width: '100%', fontFamily: 'Poppins', fontSize: '14px', fontWeight: '300' }}>
                        Your message is successfully delivered!
                    </Alert>
                </Snackbar>
            </div>
        </>
    )
}

export default Home;