import React from "react";
import ReactDOM from "react-dom";
import './CardList.css'
import PropTypes, { func } from 'prop-types';
import Card from "../Card/Card.jsx";
import {deleteCardAPI,addVoteCardAPI} from '../../../utils/utils.js'



function CardList({cardList,setCardList,id,pinned}) {

  let num =0;
  function openComments(cardID){
    console.log("Comments",cardID);
  }
  function upvoteCards(cardID){
    addVoteCardAPI(id,cardID,updateCard)
  }
  function deleteCard(cardID){
    deleteCardAPI(id, cardID,()=>setCardList(cardList.filter(card => card.id !== cardID)) );
  }
  function updateCard(cardID, cardData){
    if(cardData){
      let result = cardList.map(card => card.id===cardID?cardData:card);
      setCardList(result);
    }

  }

  return (
    // JSX code for rendering the component
    <div className="CardList">
        <div id="Cards">
        {cardList.map(obj =>  {
           num++;
            return(<Card key={obj.id} data={obj} upvoteCards={upvoteCards} clickCard={openComments}  deleteCard={(deleteCard)} pinned={pinned}/>)
       })}
        </div>
        <div id="CardTotal">
          <p id="CardTotalNum">{num} </p>
          <p id="CardTotalLabel"> Cards Displayed</p>
        </div>
    </div>
  );
}

CardList.propTypes = {
    // data: PropTypes.array.isRequired,
};


export default CardList;
