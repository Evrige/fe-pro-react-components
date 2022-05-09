import React from 'react';
import NavItem from "./NavItem";
import PropTypes from "prop-types";

const NavList = ({ items }) =>{
    return (
        <nav>
            <ul className="nav-list">
                {items.map((item) => {
                    return(
                    <NavItem href={item.href} key={item.title}>
                        {item.title}
                    </NavItem>
                )})}
            </ul>
        </nav>
    )
}

NavList.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            href: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
        }).isRequired
    ).isRequired,
};

export default NavList;