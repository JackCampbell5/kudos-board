import React from "react";
import ReactDOM from "react-dom";
import './Card.css'
import PropTypes, { func } from 'prop-types';
import { FaRegTrashAlt } from "react-icons/fa";



function Card({data,deleteCard,upvoteCards}) {
  let id = data.id;
  let title = data.title;
  let message = data.message;
  let author = data.author;
  let icon = data.icon;
  let upvoteCount = data.upvoteCount;
  function deleteCardHelp(e){
    e.stopPropagation();
    deleteCard(id);
}
function upvoteCardsHelp(e){
  upvoteCards(id)
}
  return (
    // JSX code for rendering the component
    <div className="Card">
      <div className="imgDiv">
        <img className="icon"src={icon}/>
      </div>
      <p className="title">{title}</p>
      <p className="message">{message}</p>
      <p className="author">{author}</p>
      <div className="cardButton">
        <div className="upVoteDiv">
        <button className="upvoteCount" onClick={upvoteCardsHelp}>Upvotes: {upvoteCount}</button>
        </div>
        <div className="delete" onClick={deleteCardHelp}><FaRegTrashAlt /></div>
      </div>
  </div>
  );
}

Card.propTypes = {
    // data: PropTypes.array.isRequired,
};


export default Card;
