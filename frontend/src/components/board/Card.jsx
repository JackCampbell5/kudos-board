import React from "react";
import ReactDOM from "react-dom";
import './Card.css'
import PropTypes from 'prop-types';



function Card({data}) {
  return (
    // JSX code for rendering the component
    <div className="Card">
        <h3>Card</h3>
    </div>
  );
}

Card.propTypes = {
    // data: PropTypes.array.isRequired,
};


export default Card;
