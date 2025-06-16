import React from "react";
import ReactDOM from "react-dom";
import './TopBoard.css'
import PropTypes from 'prop-types';



function TopBoard({data}) {
  return (
    // JSX code for rendering the component
    <div className="TopBoard">
        <h3>TopBoard</h3>
    </div>
  );
}

TopBoard.propTypes = {
    // data: PropTypes.array.isRequired,
};


export default TopBoard;
