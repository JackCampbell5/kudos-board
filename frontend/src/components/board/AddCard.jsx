import React from "react";
import ReactDOM from "react-dom";
import './AddCard.css'
import PropTypes from 'prop-types';
import { useState } from "react";
import {convertToTitleCase} from './../../utils/utils.js'



function AddCard({addNewCard}) {
  const [newActive, setNewActive] = useState(false);
  function swapActive() {
      setNewActive(!newActive)
  }
  const defaultCard = {
      title: "",
      message: "",
      author: "",
      icon: "",
  }
  console.log(defaultCard)
  //TODO Make icon use the giphy component I will be creating

  const [newCard, setNewCard] = useState(defaultCard);
  console.log(newCard)
  function submit() {
      console.log(newCard);
      for (const key in newCard) {
      if(newCard[key] === "") {
          alert("Please fill out all fields");
          //TODO make all felids red when they are not filled out and submit is clicked
          return;
      }
      }
      swapActive();
      addNewCard(newCard);
  }

return (
  // JSX code for rendering the component
  <div className="NewCard">
      <button className="createNewCard" onClick={swapActive}>{newActive ? "Hide":"New Card"}</button>
      {newActive ? (
          <div className="newCardMaker">
              {Object.keys(newCard).map(key =>  { const obj = defaultCard[key];
              return(
              <div className="addCardDiv" key={key}>
                  <p className="addCardLabel">{convertToTitleCase(key)}:</p>
                  <input type="text" className="addCardInput" name={key} onChange={(e)=> setNewCard({...newCard, [e.target.name]: e.target.value})} />
              </div>
              )})}
              <button className="submitButton"onClick={submit}>Submit</button>
          </div>
      ) : null}

  </div>
);
}

AddCard.propTypes = {
    // data: PropTypes.array.isRequired,
};


export default AddCard;
