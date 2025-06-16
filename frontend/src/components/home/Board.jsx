import React from "react";
import ReactDOM from "react-dom";
import './Board.css'
import PropTypes, { func } from 'prop-types';
import {catTranslate} from './../../utils/utils'



function Board({data,clickBoard,deleteBoard}) {
    let id = data.id;
    let title = data.title;
    let category = data.category;
    let author = data.author;
    let icon = data.icon;
    let description = data.description;
    function deleteBoardHelp(e){
        e.stopPropagation();
        deleteBoard(id);
    }
    function clickBoardHelp(e){
      clickBoard(id);
    }
  return (
    // JSX code for rendering the component
    <div className="Board" onClick={clickBoardHelp}>
        <img className="icon" src={icon} alt={"Playlist Icon for" + title}/>
        <p className="title">{title}</p>
        <p className="category">{catTranslate(category)}</p>
        {author!==""?<p className="author">By: {author}</p>:null}
        <p className="description">{description}</p>
        <button className="delete" onClick={deleteBoardHelp}>Delete</button>
    </div>
  );
}

Board.propTypes = {
    // data: PropTypes.array.isRequired,
};


export default Board;
