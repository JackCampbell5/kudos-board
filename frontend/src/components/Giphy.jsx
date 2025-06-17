import React from "react";
import ReactDOM from "react-dom";
import './Giphy.css'
import PropTypes, { func } from 'prop-types';
import { useEffect, useState } from "react";
import { fetchGifts,searchGifts } from "../utils/gifs";
import Search from "./Search";



function Giphy({gif,setGifHelper}) {

      const [gifList, setGifList] = useState([]);
      useEffect(()=>{fetchGifts(setGifList)},[]);


      const [searchTerm, setSearchTerm] = useState("");
      function search(e){
        e.preventDefault(); // Prevents the default form submission
        if(!searchTerm){
            fetchGifts(setGifList);
        }else{
            searchGifts(searchTerm,setGifList);
        }
      }
      function setGif(e){
        if(e.target){
            setGifHelper(e.target.src)
        }
      }

      let num = 0;
  return (
    // JSX code for rendering the component
    <div className="Giphy">
        <p>Choose a Gif</p>
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} search={search} presetText="Search Gifs"/>
        <div className="gifList">
        {gifList.map(obj =>  {num++;return( <img key={num} className="gifImg" id={gif===obj?"Selected":"Unselected"} src={obj} onClick={setGif}/>)})}
        </div>
    </div>
  );
}

Giphy.propTypes = {
    // data: PropTypes.array.isRequired,
};


export default Giphy;
