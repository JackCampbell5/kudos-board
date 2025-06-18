import React from "react";
import ReactDOM from "react-dom";
import './TopHome.css'
import PropTypes from 'prop-types';
import Search from '../../allPages/Search/Search'

function TopHome({searchTerm,setSearchTerm,search, filterType, setFilterType}) {
  return (
    // JSX code for rendering the component
    <div className="TopHome">
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} search={search} presetText="Search Boards"/>
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
