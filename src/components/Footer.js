import React from 'react';

const Footer = () => {
    return (
        <footer>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Blockchain</li>
                <li>Wallets</li>
                <li>Exchanges</li>
                <li>Blog</li>
                <button className='btn'>Documentation</button>
            </ul>
            <div>
                <h5 style={{ color: 'aqua' }}>_________________________________________________________________________________________________________________________</h5>
            </div>
            <div className='footer-links'>
                <li>Copyright 2022 NFT3 All Rights Reserved</li>
                <li>Terms Agreements</li>
                <li>Privacy policy</li>
            </div>

        </footer>
    );
};

export default Footer;
