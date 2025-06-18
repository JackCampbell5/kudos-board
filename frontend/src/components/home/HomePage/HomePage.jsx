import React from "react";
import ReactDOM from "react-dom";
import './HomePage.css'
import PropTypes, { func } from 'prop-types';
import { useState } from "react";
import TopHome from "../TopHome/TopHome.jsx";
import BoardList from "../BoardList/BoardList";
import NewBoard from "../NewBoard/NewBoard.jsx";
import {fetchBoards,createBoardAPI} from '../../../utils/utils.js'
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
  useEffect(()=>{fetchBoards(setListData)},[]);
  function addBoard(board){
    setListData(listData => [...listData, board]);
  }

  function addNewBoard(newBoard){
    createBoardAPI(newBoard, addBoard)
  }

  return (
    // JSX code for rendering the component
    <div className="HomePage">
        <h1>Home</h1>
        <TopHome searchTerm={searchTerm} setSearchTerm={setSearchTerm} search={search} filterType={filterType} setFilterType={setFilterType}/>
        <NewBoard addNewBoard={addNewBoard}/>
        <BoardList listData={listData} setListData={setListData} searchTerm={searchGo} filterType={filterType} setActivePage={setActivePage} />
    </div>
  );
}

HomePage.propTypes = {
    // data: PropTypes.array.isRequired,
};


export default HomePage;
