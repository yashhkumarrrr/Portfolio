import './header.css';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';

const CustomTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        fontSize: 12,
        borderRadius: 8,
        letterSpacing: 1,
        fontFamily: 'Poppins',
        backgroundColor: '#000000',
    },
}));

function Header() {

    const logo = require('./images/logo.webp');

    return (
        <>
            <div className='header-body'>
                <Link to='/'>
                    <CustomTooltip title='Yash Kumar' >
                        <img
                            alt=''
                            src={logo}
                            className='header-img'
                        />
                    </CustomTooltip>
                </Link>

                <div className='header-buttons'>
                    <Link to='/'>
                        <CustomTooltip title='Home' >
                            <Button
                                id='header-btn-1'
                            >
                                Home
                            </Button>
                        </CustomTooltip>
                    </Link>

                    <Link to='/contact'>
                        <CustomTooltip title='Contact' >
                            <Button id='header-btn-2'>
                                Contact
                            </Button>
                        </CustomTooltip>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default Header;