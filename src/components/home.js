import './home.css';
import axios from 'axios';
import * as yup from 'yup';
import * as React from 'react';
import { useFormik } from 'formik';
import Box from '@mui/material/Box';
import Zoom from '@mui/material/Zoom';
import { Link } from 'react-router-dom';
import Timeline from '@mui/lab/Timeline';
import Drawer from '@mui/material/Drawer';
import Switch from '@mui/material/Switch';
import MuiAlert from '@mui/material/Alert';
import Tooltip from '@mui/material/Tooltip';
import { useState, forwardRef } from 'react';
import Snackbar from '@mui/material/Snackbar';
import TimelineDot from '@mui/lab/TimelineDot';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import FormControlLabel from '@mui/material/FormControlLabel';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

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

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    width: 61,
    height: 34,
    padding: 7,
    '& .MuiSwitch-switchBase': {
        margin: 1,
        padding: 0,
        transform: 'translateX(6px)',
        '&.Mui-checked': {
            color: '#fff',
            transform: 'translateX(22px)',
            '& .MuiSwitch-thumb:before': {
                backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
                    '#fff',
                )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
            },
            '& + .MuiSwitch-track': {
                opacity: 1,
                backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#E0E0E0',
            },
        },
    },
    '& .MuiSwitch-thumb': {
        backgroundColor: theme.palette.mode === 'dark' ? '#77589B' : '#ff2c2c',
        width: 32,
        height: 32,
        '&::before': {
            content: "''",
            position: 'absolute',
            width: '100%',
            height: '100%',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
                '#fff',
            )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
        },
    },
    '& .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#ff0000' : '#616161',
        borderRadius: 20 / 2,
    },
}));

function Home(props) {

    const [isSnackbarOpen, setIsSnackbarOpen] = useState(false)
    const [successSnackbar, setSuccessSnackbar] = useState(true)

    const openSnackbar = () => {
        setIsSnackbarOpen(true)
    };

    const closeSnackbar = (reason) => {
        if (reason === 'clickAway') {
            return;
        }
        setIsSnackbarOpen(false)
    };

    const formik = useFormik({
        initialValues: {
            name: '',
            number: '',
            message: '',
        },
        validationSchema: validationSchema,
        onSubmit: () => {
            try {
                axios.post('https://66177575ed6b8fa43482b125.mockapi.io/yashhkumarrrr/api/contact', {
                    Name: formik.values.name,
                    Number: formik.values.number,
                    Message: formik.values.message,
                });
                setSuccessSnackbar(true);
                openSnackbar();
                formik.resetForm();
            }
            catch (e) {
                setSuccessSnackbar(false);
                openSnackbar();
            }
        },
    });

    const resume = require('./resume.pdf');
    const djb = require('./images/djb.webp');
    const logo = require('./images/logo.webp');
    const mail = require('./images/mail.webp');
    const photo1 = require('./images/photo1.webp');
    const photo2 = require('./images/photo2.webp');
    const github = require('./images/github.webp');
    const appointy = require('./images/appointy.webp');
    const magictap = require('./images/magictap.webp');
    const whatsapp = require('./images/whatsapp.webp');
    const linkedin = require('./images/linkedin.webp');
    const internships = require('./images/internships.webp');
    const connections = require('./images/connections.webp');
    const currentProjects = require('./images/currentProjects.webp');
    const completedProjects = require('./images/completedProjects.webp');

    const [drawerBox, setDrawerBox] = React.useState({
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setDrawerBox({ ...drawerBox, [anchor]: open });
    };

    const theme = createTheme({
        typography: {
            fontSize: 14,
            fontFamily: 'Poppins'
        },
    });

    return (
        <>
            <div className={`body-${props.isDark ? 'dark' : 'light'}`}>

                {/* Home Page */}

                <div className='homepage'>
                    <div className={`header-${props.isDark ? 'dark' : 'light'}`}>
                        <div className='header-img'>
                            <a
                                href='#home'
                                aria-label="Home"
                            >
                                <img
                                    alt='Logo'
                                    src={logo}
                                    className='header-logo'
                                />
                            </a>
                        </div>

                        <div id='header-links-tray'>
                            <a
                                href='#home'
                                className={`header-links-${props.isDark ? 'dark' : 'light'}`}
                            >
                                Home
                            </a>

                            <a
                                href='#about'
                                className={`header-links-${props.isDark ? 'dark' : 'light'}`}
                            >
                                About
                            </a>

                            <a
                                href='#exp'
                                className={`header-links-${props.isDark ? 'dark' : 'light'}`}
                            >
                                Experiences
                            </a>

                            <a
                                href='#contact'
                                className={`header-links-${props.isDark ? 'dark' : 'light'}`}
                            >
                                Contact
                            </a>
                        </div>

                        <div id='header-toggle-mode-1'>
                            <FormControlLabel
                                id='header-toggle-mode-btn'
                                control={<MaterialUISwitch
                                    checked={props.isDark}
                                    aria-label='Toggle Mode'
                                    onChange={props.toggleTheme}
                                />}
                            />
                        </div>

                        <div className='header-menu-tray'>
                            {['right'].map((anchor) => (
                                <React.Fragment key={anchor}>
                                    <div id='header-toggle-mode-2'>
                                        <FormControlLabel
                                            id='header-toggle-mode-btn'
                                            control={<MaterialUISwitch
                                                checked={props.isDark}
                                                aria-label='Toggle Mode'
                                                onChange={props.toggleTheme}
                                            />}
                                        />
                                    </div>

                                    <div>
                                        <IconButton
                                            aria-label="Menu"
                                            onClick={toggleDrawer(anchor, true)}
                                        >
                                            <MenuIcon id={`header-menu-icon-btn-${props.isDark ? 'dark' : 'light'}`} />
                                        </IconButton>
                                    </div>

                                    <Drawer
                                        anchor={anchor}
                                        open={drawerBox[anchor]}
                                        onClose={toggleDrawer(anchor, false)}
                                    >
                                        <Box
                                            id={`header-tray-box-${props.isDark ? 'dark' : 'light'}`}
                                            onClick={toggleDrawer(anchor, false)}
                                            onKeyDown={toggleDrawer(anchor, false)}
                                            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 200 }}
                                        >
                                            <div>
                                                <div className='header-tray-links'>
                                                    <a
                                                        href='#home'
                                                        className={`header-tray-link-${props.isDark ? 'dark' : 'light'}`}
                                                    >
                                                        Home
                                                    </a>
                                                </div>

                                                <div className='header-tray-links'>
                                                    <a
                                                        href='#about'
                                                        className={`header-tray-link-${props.isDark ? 'dark' : 'light'}`}
                                                    >
                                                        About
                                                    </a>
                                                </div>

                                                <div className='header-tray-links'>
                                                    <a
                                                        href='#exp'
                                                        className={`header-tray-link-${props.isDark ? 'dark' : 'light'}`}
                                                    >
                                                        Experiences
                                                    </a>
                                                </div>

                                                <div className='header-tray-links'>
                                                    <a
                                                        href='#contact'
                                                        className={`header-tray-link-${props.isDark ? 'dark' : 'light'}`}
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
                                id={`home-div-1-1-${props.isDark ? 'dark' : 'light'}`}
                            >
                                Hello, my name is
                            </div>

                            <div
                                id='home-div-1-2'
                            >
                                Yash Kumar
                            </div>

                            <div
                                id={`home-div-1-3-${props.isDark ? 'dark' : 'light'}`}
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
                                    Currently employed as an Operations Executive at Magictap Solutions Pvt. Ltd., I specialize in staying abreast of emerging technologies within AR, VR, Electronics, Robotics, and AI. Possessing a strong ability to collaborate effectively within teams, I can also take the lead in project management or work independently as required.
                                </div>

                                <table className='about-body-2-3'>
                                    <tbody>
                                        <tr>
                                            <td className='about-body-2-3-1'>
                                                Name
                                            </td>

                                            <td className='about-body-2-3-2'>
                                                : Yash Kumar
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className='about-body-2-3-1'>
                                                Phone
                                            </td>

                                            <td className='about-body-2-3-2'>
                                                <Link
                                                    target='_blank'
                                                    to='tel:8826367476'
                                                    className={`about-body-2-3-2-link-${props.isDark ? 'dark' : 'light'}`}
                                                >
                                                    : 8826367476
                                                </Link>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className='about-body-2-3-1'>
                                                Gmail
                                            </td>

                                            <td className='about-body-2-3-2'>
                                                <Link
                                                    target='_blank'
                                                    to='mailto:yashhkumarrrr'
                                                    className={`about-body-2-3-2-link-${props.isDark ? 'dark' : 'light'}`}
                                                >
                                                    : yashhkumarrrr
                                                </Link>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className='about-body-2-3-1'>
                                                From
                                            </td>

                                            <td className='about-body-2-3-2'>
                                                : Delhi, India
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className='about-body-2-3-1'>
                                                Language
                                            </td>

                                            <td className='about-body-2-3-2'>
                                                : English, Hindi
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className='about-body-2-3-1'>
                                                Freelance
                                            </td>

                                            <td className='about-body-2-3-2'>
                                                : Available
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>

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

                <div id='exp' >
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
                                        Analyst
                                    </div>

                                    <div className={`timeline-1-minor-2-${props.isDark ? 'dark' : 'light'}`}>
                                        31<sup>st</sup> Dec 21 - 14<sup>th</sup> Jan 22
                                    </div>
                                </TimelineOppositeContent>

                                <TimelineSeparator>
                                    <TimelineConnector />
                                    <TimelineDot sx={{ backgroundColor: '#0095c6' }}>
                                        <img src={djb} alt='' id='timeline-1-icon-2' />
                                    </TimelineDot>
                                    <TimelineConnector />
                                </TimelineSeparator>

                                <TimelineContent sx={{ py: '20px', px: 2 }}>
                                    <div className='timeline-1-major-1'>
                                        Delhi Jal board
                                    </div>

                                    <div className={`timeline-1-major-2-${props.isDark ? 'dark' : 'light'}`}>
                                        As an Analyst, I conducted data integrity checks on government servers. Additionally, I engaged with consumers to gather feedback on service-related issues. These insights informed recommendations for enhancing the consumer experience.
                                    </div>
                                </TimelineContent>
                            </TimelineItem>

                            <TimelineItem>
                                <TimelineOppositeContent
                                    sx={{ m: 'auto 0' }}
                                >
                                    <div className='timeline-1-minor-1'>
                                        React JS Developer
                                    </div>

                                    <div className={`timeline-1-minor-2-${props.isDark ? 'dark' : 'light'}`}>
                                        5<sup>th</sup> Jun 23 - 5<sup>th</sup> Aug 23
                                    </div>
                                </TimelineOppositeContent>

                                <TimelineSeparator>
                                    <TimelineConnector />
                                    <TimelineDot sx={{ backgroundColor: '#9e00dc' }}>
                                        <img src={appointy} alt='' id='timeline-1-icon-1' />
                                    </TimelineDot>
                                    <TimelineConnector />
                                </TimelineSeparator>

                                <TimelineContent sx={{ py: '20px', px: 2 }}>
                                    <div className='timeline-1-major-1'>
                                        Appointy India Ltd.
                                    </div>

                                    <div className={`timeline-1-major-2-${props.isDark ? 'dark' : 'light'}`}
                                        id='timeline-float'>
                                        As a React JS Developer, I developed functional and responsive appointment scheduling webpages tailored to client-specific requirements. These webpages were designed for seamless integration into clients' official websites, enhancing public engagement and accessibility
                                    </div>
                                </TimelineContent>
                            </TimelineItem>

                            <TimelineItem>
                                <TimelineOppositeContent
                                    sx={{ m: 'auto 0' }}
                                >
                                    <div className='timeline-1-minor-1'>
                                        Operations Executive
                                    </div>

                                    <div className={`timeline-1-minor-2-${props.isDark ? 'dark' : 'light'}`}>
                                        27<sup>th</sup> May 24 - Present
                                    </div>
                                </TimelineOppositeContent>

                                <TimelineSeparator>
                                    <TimelineConnector />
                                    <TimelineDot sx={{ backgroundColor: '#0f0d2f' }}>
                                        <img src={magictap} alt='' id='timeline-1-icon-1' />
                                    </TimelineDot>
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent sx={{ py: '30px', px: 2 }}>
                                    <div className='timeline-1-major-1'>
                                        Magictap Solutions Pvt. Ltd.
                                    </div>

                                    <div className={`timeline-1-major-2-${props.isDark ? 'dark' : 'light'}`}>
                                        As an Operations Executive, assuming leadership in diverse areas including frontend development, robotics, AI, AR, and VR training. Gained comprehensive nationwide exposure across various organizational levels. Collaborated closely with the team, providing guidance and support while independently handling tasks as required
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
                                        <img src={djb} alt='' id='timeline-2-icon-1' />
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

                                    <div className={`timeline-2-minor-2-${props.isDark ? 'dark' : 'light'}`}>
                                        31<sup>st</sup> Dec 21 - 14<sup>th</sup> Jan 22
                                    </div>

                                    <div className={`timeline-2-major-2-${props.isDark ? 'dark' : 'light'}`}>
                                        As an Analyst, I conducted data integrity checks on government servers. Additionally, I engaged with consumers to gather feedback on service-related issues. These insights informed recommendations for enhancing the consumer experience.
                                    </div>
                                </TimelineContent>
                            </TimelineItem>

                            <TimelineItem>
                                <TimelineSeparator>
                                    <TimelineDot sx={{ backgroundColor: '#9e00dc' }}>
                                        <img src={appointy} alt='' id='timeline-2-icon-2' />
                                    </TimelineDot>
                                    <TimelineConnector />
                                </TimelineSeparator>

                                <TimelineContent sx={{ py: '20px', px: 2 }}>
                                    <div className='timeline-2-major-1'>
                                        Appointy India Ltd.
                                    </div>

                                    <div className='timeline-2-minor-1'>
                                        React JS Developer
                                    </div>

                                    <div className={`timeline-2-minor-2-${props.isDark ? 'dark' : 'light'}`}>
                                        5<sup>th</sup> Jun 23 - 5<sup>th</sup> Aug 23
                                    </div>

                                    <div className={`timeline-2-major-2-${props.isDark ? 'dark' : 'light'}`}>
                                        As a React JS Developer, I developed functional and responsive appointment scheduling webpages tailored to client-specific requirements. These webpages were designed for seamless integration into clients' official websites, enhancing public engagement and accessibility
                                    </div>
                                </TimelineContent>
                            </TimelineItem>

                            <TimelineItem>
                                <TimelineSeparator>
                                    <TimelineDot sx={{ backgroundColor: '#0f0d2f' }}>
                                        <img src={magictap} alt='' id='timeline-2-icon-3' />
                                    </TimelineDot>
                                    <TimelineConnector />
                                </TimelineSeparator>

                                <TimelineContent sx={{ py: '20px', px: 2 }}>
                                    <div className='timeline-2-major-1'>
                                        Magictap Solutions Pvt. Ltd.
                                    </div>

                                    <div className='timeline-2-minor-1'>
                                        Operations Executive
                                    </div>

                                    <div className={`timeline-2-minor-2-${props.isDark ? 'dark' : 'light'}`}>
                                        27<sup>th</sup> May 24 - Present
                                    </div>

                                    <div className={`timeline-2-major-2-${props.isDark ? 'dark' : 'light'}`}>
                                        As an Operations Executive, assuming leadership in diverse areas including frontend development, robotics, AI, AR, and VR training. Gained comprehensive nationwide exposure across various organizational levels. Collaborated closely with the team, providing guidance and support while independently handling tasks as required
                                    </div>
                                </TimelineContent>
                            </TimelineItem>
                        </Timeline>
                    </div>

                    <div className='exp-info'>
                        <div className='exp-info-section'>
                            <div className={`exp-info-section-${props.isDark ? 'dark' : 'light'}`}>
                                <div>
                                    <img
                                        alt=''
                                        src={completedProjects}
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

                            <div className={`exp-info-section-${props.isDark ? 'dark' : 'light'}`}>
                                <div>
                                    <img
                                        alt=''
                                        src={internships}
                                        className='exp-info-img'
                                    />
                                </div>

                                <div className='exp-info-txt'>
                                    3
                                </div>

                                <div>
                                    Internships
                                </div>
                            </div>
                        </div>

                        <div className='exp-info-section'>
                            <div className={`exp-info-section-${props.isDark ? 'dark' : 'light'}`}>
                                <div>
                                    <img
                                        alt=''
                                        src={connections}
                                        className='exp-info-img'
                                    />
                                </div>

                                <div className='exp-info-txt'>
                                    1.1k+
                                </div>

                                <div>
                                    Connections
                                </div>
                            </div>

                            <div className={`exp-info-section-${props.isDark ? 'dark' : 'light'}`}>
                                <div>
                                    <img
                                        alt=''
                                        src={currentProjects}
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
                </div >

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
                                        className={`contact-form-input-${props.isDark ? 'dark' : 'light'}`}
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
                                        className={`contact-form-input-${props.isDark ? 'dark' : 'light'}`}
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
                                        className={`contact-form-input-${props.isDark ? 'dark' : 'light'}`}
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
                            <ThemeProvider theme={theme}>
                                <Tooltip TransitionComponent={Zoom} title="Email" disableInteractive>
                                    <Link
                                        target='_blank'
                                        className='contact-info-section'
                                        to='mailto:yashhkumarrrr@gmail.com'
                                        id={`contact-info-section-${props.isDark ? 'dark' : 'light'}`}
                                    >
                                        <div>
                                            <img
                                                src={mail}
                                                alt='GmailLogo'
                                                className='contact-info-link-img'
                                            />
                                        </div>
                                        <div className='contact-info-link-txt'>
                                            Reach me on Email
                                        </div>
                                    </Link>
                                </Tooltip>
                            </ThemeProvider>

                            <ThemeProvider theme={theme}>
                                <Tooltip TransitionComponent={Zoom} title="WhatsApp" disableInteractive>
                                    <Link
                                        target='_blank'
                                        id={`contact-info-section-${props.isDark ? 'dark' : 'light'}`}
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
                                </Tooltip>
                            </ThemeProvider>
                        </div>

                        <div className='contact-info-1'>
                            <ThemeProvider theme={theme}>
                                <Tooltip TransitionComponent={Zoom} title="LinkedIn" disableInteractive>
                                    <Link
                                        target='_blank'
                                        id={`contact-info-section-${props.isDark ? 'dark' : 'light'}`}
                                        className='contact-info-section'
                                        to='https://www.linkedin.com/in/yashhkumarrrr'
                                    >
                                        <div>
                                            <img
                                                src={linkedin}
                                                alt='LinkedInLogo'
                                                className='contact-info-link-img'
                                            />
                                        </div>

                                        <div className='contact-info-link-txt'>
                                            Make me your Connection
                                        </div>
                                    </Link>
                                </Tooltip>
                            </ThemeProvider>

                            <ThemeProvider theme={theme}>
                                <Tooltip TransitionComponent={Zoom} title="GitHub" disableInteractive>
                                    <Link
                                        target='_blank'
                                        id={`contact-info-section-${props.isDark ? 'dark' : 'light'}`}
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
                                </Tooltip>
                            </ThemeProvider>
                        </div>
                    </div>
                </div>

                {/* Footer */}

                <div className='footer'>
                    Developed by -&nbsp;
                    <a
                        id='footer-link'
                        href='#home'
                    >
                        yashhkumarrrr
                    </a>
                </div>

                <Snackbar open={isSnackbarOpen} autoHideDuration={1500} onClose={closeSnackbar}>
                    <Alert onClose={closeSnackbar} severity={(successSnackbar) ? 'success' : 'error'} sx={{ width: '100%', fontFamily: 'Poppins', fontSize: '14px', fontWeight: '300' }}>
                        {(successSnackbar) ?
                            <div>
                                Your message is successfully delivered!
                            </div>
                            :
                            <div>
                                Some Error Occurred!!
                            </div>
                        }
                    </Alert>
                </Snackbar>
            </div>
        </>
    )
}

export default Home;