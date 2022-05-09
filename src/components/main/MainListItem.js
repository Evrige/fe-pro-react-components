import React from 'react';
import PropTypes from "prop-types";

const MainListItem = ({title, description}) =>{
    return (
        <li className="list__item">
            <h2>{title}</h2>
            <p>
                {description}
            </p>
        </li>
    )
}
MainListItem.proptypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};
export default MainListItem;