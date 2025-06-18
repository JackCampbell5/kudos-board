import React from "react";
import ReactDOM from "react-dom";
import './Board.css'
import PropTypes, { func } from 'prop-types';
import {catTranslate} from '../../../utils/utils'
import { FaRegTrashAlt } from "react-icons/fa";



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
      clickBoard([id,title]);
    }
  return (
    // JSX code for rendering the component
    <div className="Board" onClick={clickBoardHelp}>
        <div className="imgDiv">
          <img className="icon" src={icon} alt={"Playlist Icon for" + title}/>
        </div>
        <p className="title">{title}</p>
        <div className="authorDiv">
        {author!==""?<p className="author">By: {author}</p>:null}
        </div>
        <p className="category">{catTranslate(category)}</p>
        <div className="boardBottom">
          <p className="description">{description}</p>
        <div className="delete" onClick={deleteBoardHelp}><FaRegTrashAlt /></div>
        </div>
    </div>
  );
}

Board.propTypes = {
    // data: PropTypes.array.isRequired,
};


export default Board;
