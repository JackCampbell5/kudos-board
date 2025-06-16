import React from "react";
import ReactDOM from "react-dom";
import './CardList.css'
import PropTypes from 'prop-types';



function CardList({data}) {
  return (
    // JSX code for rendering the component
    <div className="CardList">
        <h3>CardList</h3>
    </div>
  );
}

CardList.propTypes = {
    // data: PropTypes.array.isRequired,
};


export default CardList;
