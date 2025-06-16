import React from "react";
import ReactDOM from "react-dom";
import './TopHome.css'
import PropTypes from 'prop-types';



function TopHome({data,searchTerm,setSearchTerm,search, filterType, setFilterType}) {
  function submitSearch(newData){
    setSearchTerm(newData.target.value);
  }
  return (
    // JSX code for rendering the component
    <div className="TopHome">
        <div className="search">
          <form onSubmit={search}>
              <input id="search-box" name="dataInput" value={searchTerm} onChange={submitSearch} placeholder="Search Boards"/>
              <button type="submit" id="submit-button">Search</button>
              <button className="search-button" id="clear-button" onClick={()=>setSearchTerm("")}>Clear</button>
          </form>
        </div>
        <div className="filter">
        <button className={filterType === "all"?"selected":"unselected"} onClick={()=>setFilterType("all")}>Home</button>
        <button className={filterType === "recent"?"selected":"unselected"} onClick={()=>setFilterType("recent")}>Recent</button>
        <button className={filterType === "celebration"?"selected":"unselected"} onClick={()=>setFilterType("celebration")}>Celebration</button>
        <button className={filterType === "thanks"?"selected":"unselected"} onClick={()=>setFilterType("thanks")}>Thank You</button>
        <button className={filterType === "inspo"?"selected":"unselected"} onClick={()=>setFilterType("inspo")}>Inspiration</button>
      </div>
    </div>
  );
}

TopHome.propTypes = {
    // data: PropTypes.array.isRequired,
};


export default TopHome;
