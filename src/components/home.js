import './home.css';
import { Link } from 'react-router-dom';
import Timeline from '@mui/lab/Timeline';
import Button from '@mui/material/Button';
import TimelineDot from '@mui/lab/TimelineDot';
import CodeIcon from '@mui/icons-material/Code';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import EngineeringIcon from '@mui/icons-material/Engineering';
import DescriptionIcon from '@mui/icons-material/Description';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';

function Home() {

    const profile = require('./images/profile.webp');
    const picture = require('./images/picture.webp');
    const laptopWhite = require('./images/laptop-white.webp');
    const linkedinWhite = require('./images/linkedin-white.webp');
    const projectDoneWhite = require('./images/project-done-white.webp');
    const projectCurrentWhite = require('./images/current-project-white.webp');

    return (
        <>
            <div className='home-body'>
                <div className='home-1'>
                    <div className='home-1-section'>
                        <div className='home-1-1'>
                            <img
                                alt=''
                                src={profile}
                                className='home-1-img'
                            />
                        </div>

                        <div className='home-1-2'>
                            <div className='home-1-text'>
                                Hi there, and welcome to my portfolio!
                            </div>

                            <div className='home-1-text'>
                                I'm <span className='home-1-text-1'>Yash</span>
                            </div>

                            <div className='home-1-text'>
                                Front-End Web Developer
                            </div>

                            <div className='home-1-text'>
                                Passionate about Creating Responsive and Functional Work
                            </div>

                            <div className='home-1-btn'>
                                <Link
                                    target='_blank'
                                    to='https://drive.google.com/file/d/1PU76cBqbemlkKSxUt4eRqrvYK0udpqOt/view?usp=sharing'
                                >
                                    <Button
                                        id='home-1-link'
                                        variant='contained'
                                        startIcon={<DescriptionIcon />}
                                    >
                                        Resume
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='home-2'>
                    <div className='home-2-section'>
                        <div className='home-2-1'>
                            Let me Introduce Myself
                        </div>

                        <div className='home-2-2'>
                            <div>
                                <img
                                    alt=''
                                    src={picture}
                                    className='home-2-2-img'
                                />
                            </div>

                            <div className='home-2-2-txt'>
                                <p>My name is Yash, and I'm built on a strong foundation of HTML and a fairly good CSS. A Tech Enthusiast and a team player who enjoys working with others to create innovative and user-friendly web experiences.</p>

                                <p>I'm a highly motivated and passionate front-end web developer with a strong foundation in HTML and CSS. I have experience developing web applications using the React JavaScript framework.</p>

                                <p>A true sportsperson, a quick learner and an honest man who is committed to work and always gives 100%. You can scroll down to find out more...</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='home-3'>
                    <div className='home-3-section'>
                        <div className='home-3-1'>
                            <div className='home-3-head'>
                                Profile
                            </div>

                            <div className='home-3-segment'>
                                <div className='home-3-segment-1'>
                                    <div><b>Name :</b> &nbsp; Yash Kumar</div>
                                    <div><b>Age :</b> &nbsp; 22 Years</div>
                                    <div><b>Freelance :</b> &nbsp; Available</div>
                                    <div><b>Phone :</b> &nbsp; +91 8826367476</div>
                                </div>

                                <div className='home-3-segment-2'>
                                    <div><b>Address :</b> &nbsp; Delhi, India</div>
                                    <div><b>Nationality :</b> &nbsp; Indian</div>
                                    <div><b>Language :</b> &nbsp; Hindi, English</div>
                                    <div><b>Email :</b> &nbsp; yashhkumarrrr@gmail.com</div>
                                </div>
                            </div>
                        </div>

                        <div className='home-3-2'>
                            <div className='home-3-head'>
                                Skills
                            </div>

                            <div className='home-3-segment'>
                                <div className='home-3-segment-1'>
                                    <div>Teamwork</div>
                                    <div>Leadership</div>
                                    <div>Humour</div>
                                    <div>Courage</div>
                                    <div>HyperText Markup Language</div>
                                    <div>Cascading Style Sheets</div>
                                    <div>JavaScript Language</div>
                                    <div>TypeScript Language</div>
                                </div>

                                <div className='home-3-segment-2'>
                                    <div>Web Page Optimizations</div>
                                    <div>Front-End Web Development</div>
                                    <div>React.JS Framework</div>
                                    <div>Node.JS Components</div>
                                    <div>Material UI Components</div>
                                    <div>BootStrap Components</div>
                                    <div>Google Analytics</div>
                                    <div>Product Development</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='home-4'>
                    <div className='home-4-section'>
                        <div className='home-4-heading'>
                            <div className='home-4-heading-1'>
                                Experience
                            </div>

                            <div className='home-4-heading-2'>
                                A variety of experiences
                            </div>
                        </div>

                        <div className='home-timeline-1'>
                            <Timeline position='alternate'>

                                <TimelineItem>
                                    <TimelineOppositeContent
                                        variant='body2'
                                        sx={{ m: 'auto 0' }}
                                    >
                                        <div className='home-timeline-1-minor-1'>
                                            Survey Engineer
                                        </div>

                                        <div className='home-timeline-1-minor-2'>
                                            Dec 2021 - Jan 2022
                                        </div>
                                    </TimelineOppositeContent>

                                    <TimelineSeparator>
                                        <TimelineConnector />
                                        <TimelineDot
                                            color='success'
                                        >
                                            <EngineeringIcon id='home-timeline-1-icon-1' />
                                        </TimelineDot>
                                        <TimelineConnector />
                                    </TimelineSeparator>

                                    <TimelineContent sx={{ py: '30px', px: 2 }}>
                                        <div className='home-timeline-1-major-1'>
                                            Delhi Jal Board
                                        </div>

                                        <div className='home-timeline-1-major-2'>
                                            This experience has given me a deeper understanding of the work that the DJB does to provide clean water to the people of Delhi. I am now more confident in my ability to perform well in any circumstances and to deal with different kinds of people.
                                        </div>
                                    </TimelineContent>
                                </TimelineItem>

                                <TimelineItem>
                                    <TimelineOppositeContent
                                        variant='body2'
                                        sx={{ m: 'auto 0' }}
                                    >
                                        <div className='home-timeline-1-minor-1'>
                                            React Developer
                                        </div>

                                        <div className='home-timeline-1-minor-2'>
                                            Jun 2023 - Aug 2023
                                        </div>
                                    </TimelineOppositeContent>

                                    <TimelineSeparator>
                                        <TimelineConnector />
                                        <TimelineDot
                                            color='secondary'
                                        >
                                            <CodeIcon id='home-timeline-1-icon-2' />
                                        </TimelineDot>
                                        <TimelineConnector />
                                    </TimelineSeparator>
                                    <TimelineContent sx={{ py: '30px', px: 2 }}>
                                        <div className='home-timeline-1-major-1'>
                                            Appointy India Ltd.
                                        </div>

                                        <div className='home-timeline-1-major-2' id='home-timeline-1-float'>
                                            This experience has given me a deep understanding of ReactJS development and has helped me to grow as a software engineer. I am now more confident in my ability to design, develop, and maintain React JavaScript web applications.
                                        </div>
                                    </TimelineContent>
                                </TimelineItem>

                            </Timeline>
                        </div>

                        <div className='home-timeline-2'>
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
                                        <TimelineConnector />
                                        <TimelineDot
                                            color='success'
                                        >
                                            <EngineeringIcon id='home-timeline-2-icon-1' />
                                        </TimelineDot>
                                        <TimelineConnector />
                                    </TimelineSeparator>

                                    <TimelineContent>
                                        <div className='home-timeline-2-1'>
                                            Delhi Jal Board
                                        </div>

                                        <div className='home-timeline-2-2'>
                                            Survey Engineer
                                        </div>

                                        <div className='home-timeline-2-3'>
                                            Dec 2021 - Jan 2022
                                        </div>

                                        <div className='home-timeline-2-4'>
                                            This experience has given me a deeper understanding of the work that the DJB does to provide clean water to the people of Delhi. I am now more confident in my ability to perform well in any circumstances and to deal with different kinds of people.
                                        </div>
                                    </TimelineContent>
                                </TimelineItem>

                                <TimelineItem>
                                    <TimelineSeparator>
                                        <TimelineConnector />
                                        <TimelineDot
                                            color='secondary'
                                        >
                                            <CodeIcon id='home-timeline-2-icon-2' />
                                        </TimelineDot>
                                        <TimelineConnector />
                                    </TimelineSeparator>

                                    <TimelineContent>
                                        <div className='home-timeline-2-1'>
                                            Appointy India Ltd.
                                        </div>

                                        <div className='home-timeline-2-2'>
                                            React Developer
                                        </div>

                                        <div className='home-timeline-2-3'>
                                            Jun 2023 - Aug 2023
                                        </div>

                                        <div className='home-timeline-2-4'>
                                            This experience has given me a deep understanding of ReactJS development and has helped me to grow as a software engineer. I am now more confident in my ability to design, develop, and maintain React JavaScript web applications.
                                        </div>
                                    </TimelineContent>
                                </TimelineItem>

                            </Timeline>
                        </div>
                    </div>
                </div>

                <div className='home-5'>

                    <div className='home-5-section'>
                        <div className='home-5-section-1'>
                            <div>
                                <img
                                    alt=''
                                    height='90px'
                                    src={projectDoneWhite}
                                />
                            </div>

                            <div className='home-5-txt'>
                                5+
                            </div>

                            <div>
                                Completed Projects
                            </div>
                        </div>

                        <div className='home-5-section-2'>
                            <div>
                                <img
                                    alt=''
                                    height='90px'
                                    src={laptopWhite}
                                />
                            </div>

                            <div className='home-5-txt'>
                                2
                            </div>

                            <div>
                                Internships
                            </div>
                        </div>
                    </div>

                    <div className='home-5-section'>
                        <div className='home-5-section-3'>
                            <div>
                                <img
                                    alt=''
                                    height='90px'
                                    src={linkedinWhite}
                                />
                            </div>

                            <div className='home-5-txt'>
                                750+
                            </div>

                            <div>
                                Connections
                            </div>
                        </div>

                        <div className='home-5-section-4'>
                            <div>
                                <img
                                    alt=''
                                    height='90px'
                                    src={projectCurrentWhite}
                                />
                            </div>

                            <div className='home-5-txt'>
                                5+
                            </div>

                            <div>
                                Current Projects
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;