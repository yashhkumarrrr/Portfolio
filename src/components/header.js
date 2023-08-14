import './header.css';
import { Link } from 'react-router-dom';
import { Button, Tooltip } from '@mui/material';

function Header() {

    const logo = require('./images/logo.webp');

    return (
        <>
            <div className='header-body'>
                <Link to='/'>
                    <Tooltip title='Yash Kumar' arrow>
                        <img
                            alt=''
                            src={logo}
                            className='header-img'
                        />
                    </Tooltip>
                </Link>

                <div className='header-buttons'>
                    <Link to='/'>
                        <Tooltip title='Home' arrow>
                            <Button
                                id='header-btn-1'
                            >
                                Home
                            </Button>
                        </Tooltip>
                    </Link>

                    <Link to='/contact'>
                        <Tooltip title='Contact' arrow>
                            <Button id='header-btn-2'>
                                Contact
                            </Button>
                        </Tooltip>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default Header;