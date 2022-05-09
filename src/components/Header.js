import React from 'react';
import NavList from "./navSection/NavList";
import {navText} from "./navSection/navText";
import Logo from "./Logo";

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <Logo>My Logo</Logo>
                <NavList items={navText} />
            </div>
        </header>
    );
};

export default Header;