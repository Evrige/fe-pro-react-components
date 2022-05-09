import React from 'react';
import Logo from "./Logo";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <Logo>Logo</Logo>
                <p className="copyright">Small static blog @ 2022</p>
            </div>
        </footer>
    );
};

export default Footer;
