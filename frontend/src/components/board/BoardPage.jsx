import React from "react";
import ReactDOM from "react-dom";
import './BoardPage.css'
import PropTypes from 'prop-types';
import {fetchCards,createCardAPI} from './../../utils/utils.js'
import {useState, useEffect } from "react";
import TopBoard from "./TopBoard";
import CardList from "./CardList";
import AddCard  from "./AddCard";
import Modal from "./Modal";




function BoardPage({activePage}) {
  let [id,title] = activePage

  const [cardList, setCardList] = useState([]);
  useEffect(()=>{fetchCards(id, setCardList)},[]);
  function addCard(board){
    setCardList(listData => [...listData, board]);
  }

  function addNewCard(newCard){
    createCardAPI(id,newCard, addCard)
  }
  return (
    // JSX code for rendering the component
    <div className="BoardPage">
      <header>
        <h1>{title}</h1>
      </header>
      <AddCard addNewCard={addNewCard}/>
      <CardList cardList={cardList} id={id} setCardList={setCardList}/>
      <Modal/>
    </div>
  );
}

BoardPage.propTypes = {
    // data: PropTypes.array.isRequired,
};


export default BoardPage;
