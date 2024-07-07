// src/components/SocialAccounts.js
import React from 'react';
import { IconButton, Tooltip } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import CameraAltIcon from '@mui/icons-material/CameraAlt'; // Alternative for Snapchat
import './SocialAccounts.css';

const SocialAccounts = () => {
  return (
    <div className="container">
      <h1>Social Accounts</h1>
      <div className="icon-container">
        <div className="icon-wrapper">
          <Tooltip title="Facebook">
            <IconButton href="https://facebook.com" target="_blank">
              <FacebookIcon fontSize="large" />
            </IconButton>
          </Tooltip>
          <a href="https://www.facebook.com/aakash.gurjar.165" target="_blank" rel="noopener noreferrer" className="link">
            Facebook
          </a>
        </div>
        <div className="icon-wrapper">
          <Tooltip title="Instagram">
            <IconButton href="https://instagram.com" target="_blank">
              <InstagramIcon fontSize="large" />
            </IconButton>
          </Tooltip>
          <a href="https://www.instagram.com/aakash_gurjar1_?igsh=MThqanAyY3d2dmhrbg==" target="_blank" rel="noopener noreferrer" className="link">
            Instagram
          </a>
        </div>
        <div className="icon-wrapper">
          <Tooltip title="Email">
            <IconButton href="mailto:someone@example.com">
              <EmailIcon fontSize="large" />
            </IconButton>
          </Tooltip>
          <a href="mailto:someone@example.com" className="link">
            Email
          </a>
        </div>
        <div className="icon-wrapper">
          <Tooltip title="Snapchat">
            <IconButton href="https://snapchat.com" target="_blank">
              <CameraAltIcon fontSize="large" />
            </IconButton>
          </Tooltip>
          <a href="https://www.snapchat.com/add/akshgurjar70147?share_id=zzyo2YBQYAo&locale=en-US" target="_blank" rel="noopener noreferrer" className="link">
            Snapchat
          </a>
        </div>
      </div>
    </div>
  );
};

export default SocialAccounts;
