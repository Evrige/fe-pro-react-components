import React from 'react';
import MainListItem from "./MainListItem";
import PropTypes from "prop-types";


const MainList = ({items}) =>{
    return (
        <ul className="list">
            {items.map(item =>{
                return(
                    <MainListItem key={item.description}
                              title={item.title}
                              description={item.description} />
                )
            })}
        </ul>
    )
}
MainList.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
        }).isRequired
    ).isRequired,
};

export default MainList;