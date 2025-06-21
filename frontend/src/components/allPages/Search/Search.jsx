import React from "react";
import ReactDOM from "react-dom";
import './Search.css'
import PropTypes from 'prop-types';



function Search({searchTerm,setSearchTerm,search,presetText}) {
    function submitSearch(newData){
        setSearchTerm(newData.target.value);
    }
  return (
    // JSX code for rendering the component
    <div className="Search">
        <div className="search">
          <form onSubmit={search}>
              <input id="search-box" name="dataInput" value={searchTerm} onChange={submitSearch} placeholder={presetText}/>
              <button type="submit" id="submit-button">Search</button>
              <button className="search-button" id="clear-button" onClick={()=>setSearchTerm("")}>Clear</button>
          </form>
        </div>
    </div>
  );
}

Search.propTypes = {
    searchTerm: PropTypes.string.isRequired,
    setSearchTerm: PropTypes.func.isRequired,
    search: PropTypes.func.isRequired,
    presetText: PropTypes.string.isRequired,
};


export default Search;
