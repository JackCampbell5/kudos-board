import React from "react";
import ReactDOM from "react-dom";
import './CardList.css'
import PropTypes, { func } from 'prop-types';
import Card from "./Card";
import {deleteCardAPI} from './../../utils/utils.js'



function CardList({cardList,setCardList,id}) {

  let num =0;
  function openComments(id){
    console.log("openComments",id);
  }
  function deleteCard(id){
    deleteCardAPI(id, ()=>setCardList(cardList.filter(card => card.id !== id)) );
  }
  return (
    // JSX code for rendering the component
    <div className="CardList">
        <div id="Cards">
        {cardList.map(obj =>  {
           num++;
            return(<Card key={obj.id} data={obj} clickCard={openComments}  deleteCard={(deleteCard)}/>)
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
