import React from "react";
import ReactDOM from "react-dom";
import './AddCard.css'
import PropTypes from 'prop-types';
import { useState } from "react";
import {convertToTitleCase} from '../../../utils/category_utils.js'
import Giphy from "../../allPages/Giphy/Giphy";



function AddCard({addNewCard}) {
    const [gif, setGif] = useState("");

  const [newActive, setNewActive] = useState(false);
  function swapActive() {
      setNewActive(!newActive)
  }
  const defaultCard = {
      title: "",
      message: "",
      author: "",
  }
  //TODO Make icon use the giphy component I will be creating

  const [newCard, setNewCard] = useState(defaultCard);
  function submit() {
    let newHelper = ({...newCard, icon: gif})
      for (const key in newHelper) {
      if(newHelper[key] === "") {
          alert("Please fill out all fields");
          //TODO make all felids red when they are not filled out and submit is clicked
          return;
      }
      }
      swapActive();
      addNewCard(newHelper);
      setNewCard(defaultCard);
  }

return (
  // JSX code for rendering the component
  <div className="NewCard">
      <button className="createNewCard" onClick={swapActive}>{newActive ? "Hide":"New Card"}</button>
      {newActive ? (
          <div className="newCardMaker">
              {Object.keys(newCard).map(key =>  { const obj = newCard[key];
              return(
              <div className="addCardDiv" key={key}>
                  <p className="addCardLabel">{convertToTitleCase(key)}:</p>
                  <input type="text" className="addCardInput" name={key} onChange={(e)=> setNewCard({...newCard, [e.target.name]: e.target.value})} />
              </div>
              )})}
                <Giphy gif={gif} setGifHelper={setGif} />
              <button className="submitButton"onClick={submit}>Submit</button>
          </div>
      ) : null}

  </div>
);
}

AddCard.propTypes = {
    addNewCard: PropTypes.func.isRequired,
};


export default AddCard;
