import './footer.css';
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

function Footer() {
    return (
        <>
            <div className='footer-body'>
                Developed by -&nbsp;
                <CustomTooltip title='Yash Kumar'>
                    <Link
                        target='_blank'
                        id='footer-link'
                        to='https://yashhkumarrrr.netlify.app'
                    >
                        Yash
                    </Link>
                </CustomTooltip>
            </div>
        </>
    );
}

export default Footer;