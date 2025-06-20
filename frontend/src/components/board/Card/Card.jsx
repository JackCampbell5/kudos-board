import React from "react";
import ReactDOM from "react-dom";
import './Card.css'
import PropTypes, { func } from 'prop-types';
import { FaRegTrashAlt,FaMapPin } from "react-icons/fa";
import { CiMapPin } from "react-icons/ci";





function Card({data,deleteCard,upvoteCards,pinned}) {
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
function pinnedHelp(e){
  pinned(data)
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
        <div className="cardBackground" id="delete" onClick={deleteCardHelp}><FaRegTrashAlt /></div>
        <div className="cardBackground" id="pinned" onClick={pinnedHelp}>{data.pinned?<FaMapPin />:<CiMapPin />}</div>
      </div>
  </div>
  );
}

Card.propTypes = {
    // data: PropTypes.array.isRequired,
};


export default Card;
