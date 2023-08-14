import './footer.css';
import { Tooltip } from '@mui/material';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <>
            <div className='footer-body'>
                Developed by -&nbsp;
                <Tooltip title='Yash Kumar' arrow>
                    <Link
                        target='_blank'
                        id='footer-link'
                        to='https://yashhkumarrrr.netlify.app'
                    >
                        Yash
                    </Link>
                </Tooltip>
            </div>
        </>
    );
}

export default Footer;