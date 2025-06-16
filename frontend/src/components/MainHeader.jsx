import React from "react";
import ReactDOM from "react-dom";
import './MainHeader.css'
import PropTypes from 'prop-types';



function MainHeader({data}) {
  return (
    // JSX code for rendering the component
    <div className="MainHeader">
        <h3>MainHeader</h3>
    </div>
  );
}

MainHeader.propTypes = {
    // data: PropTypes.array.isRequired,
};


export default MainHeader;
