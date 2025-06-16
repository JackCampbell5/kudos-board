import React from "react";
import ReactDOM from "react-dom";
import './TopBar.css'
import PropTypes from 'prop-types';



function TopBar({data}) {
  return (
    // JSX code for rendering the component
    <div className="TopBar">
        <h3>TopBar</h3>
    </div>
  );
}

TopBar.propTypes = {
    // data: PropTypes.array.isRequired,
};


export default TopBar;
