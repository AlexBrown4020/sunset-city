import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

import './footer.css';
import React from 'react';

export const Footer = () => {
    return (
        <div id='footer-container'>
            <div className='footer-content-block'>
                <h5>Page Information</h5>
                <p className='footer-p'>© All rights reserved</p>
                <p className='footer-p'>21st February 2023, Alex Brown</p>
                <p className='footer-p'>Powered by React</p>
            </div>
            <div className='footer-content-block'>
                <h5>Contact</h5>
                <p className='footer-p'>Email: ....</p>
                <p className='footer-p'>Phone Number: ....</p>
                <p className='footer-p'>Office: ...</p>
            </div>
            <div className='footer-content-block'>
                <h5>Social Media</h5>
                <div id='footer-media-block'>
                    <IconButton href=''>
                        <LinkedInIcon sx={{color:'white'}}/>
                    </IconButton>
                    <IconButton href=''>
                        <GitHubIcon sx={{color:'white'}}/>
                    </IconButton>
                    <IconButton href=''>
                        <FacebookIcon sx={{color:'white'}}/>
                    </IconButton>
                    <IconButton>
                        <TwitterIcon sx={{color:'white'}}/>
                    </IconButton>
                </div>
            </div>
        </div>
    )
};

export default Footer;