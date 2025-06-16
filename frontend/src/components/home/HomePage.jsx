import React from "react";
import ReactDOM from "react-dom";
import './HomePage.css'
import PropTypes, { func } from 'prop-types';
import { useState } from "react";
import TopHome from "./TopHome";
import BoardList from "./BoardList";
import {fetchBoards} from './../../utils/utils.js'
import { useEffect } from "react";



function HomePage({data,setActivePage}) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchGo, setSearchGo] = useState("");
  function search(e){
    e.preventDefault(); // Prevents the default form submission
    setSearchGo(searchTerm.toLowerCase()); // Sets the searchGo state to the searchTerm state
  }
  const [filterType, setFilterType] = useState("all");

  const [listData, setListData] = useState([]);
  useEffect((()=>{fetchBoards(setListData)}),[]);


  return (
    // JSX code for rendering the component
    <div className="HomePage">
        <h1>Home</h1>
        <TopHome searchTerm={searchTerm} setSearchTerm={setSearchTerm} search={search} filterType={filterType} setFilterType={setFilterType}/>
        <BoardList listData={listData} searchTerm={searchGo} filterType={filterType} setActivePage={setActivePage} />
    </div>
  );
}

HomePage.propTypes = {
    // data: PropTypes.array.isRequired,
};


export default HomePage;
