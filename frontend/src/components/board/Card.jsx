import React from "react";
import ReactDOM from "react-dom";
import './Card.css'
import PropTypes from 'prop-types';



function Card({data,deleteCard}) {
  let id = data.id;
  let title = data.title;
  let message = data.message;
  let author = data.author;
  let gif = data.gif;
  let upvoteCount = data.upvoteCount;
  function deleteCardHelp(e){
    e.stopPropagation();
    deleteCard(id);
}
  return (
    // JSX code for rendering the component
    <div className="Card">
        <img className="gif"src={gif}/>
        <p className="title">{title}</p>
        <p className="message">{message}</p>
        <p className="author">{author}</p>
        <button className="upvoteCount">Upvotes: {upvoteCount}</button>
        <button className="delete" onClick={deleteCardHelp}>Delete</button>
    </div>
  );
}

Card.propTypes = {
    // data: PropTypes.array.isRequired,
};


export default Card;
