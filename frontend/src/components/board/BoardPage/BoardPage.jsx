import React from "react";
import ReactDOM from "react-dom";
import './BoardPage.css'
import PropTypes from 'prop-types';
import {fetchCards,createCardAPI,removePinCardAPI, addPinCardAPI} from '../../../utils/utils.js'
import {useState, useEffect } from "react";
import CardList from "../CardList/CardList.jsx";
import AddCard from "../AddCard/AddCard.jsx";




function BoardPage({activePage}) {
  let [id,title] = activePage

  const [cardList, setCardList] = useState([]);
  useEffect(()=>{fetchCards(id, setCardListHelp)},[]);

  function setCardListHelp(list){
    let front = list.filter(card => card.pinned !== 0);
    let order = front.sort((a,b) => b.pinned - a.pinned);
    let back = list.filter(card => card.pinned === 0);
    let order2 = back.sort((a,b) => a.id - b.id);
    setCardList(order.concat(order2));
  }

  function pinned(card){
    console.log(card)
    let lis = cardList;
    let cardNum = cardList.indexOf(card);

    if(card.pinned === 0){
    let front = cardList.filter(card => card.pinned !== 0);
    front = front.sort((a,b) => b.pinned - a.pinned);
    let num = front.length===0 ? 1: front[0].pinned+1;
    console.log(num)
    lis[cardNum].pinned = num;
      addPinCardAPI(id,card.id,num,()=>setCardListHelp(lis))
    }else{
      lis[cardNum].pinned = 0;
      removePinCardAPI(id,card.id,()=>setCardListHelp(lis))
    }
  }


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
      <main>
        <AddCard addNewCard={addNewCard}/>
        <CardList cardList={cardList} id={id} setCardList={setCardList} pinned={pinned}/>
      </main>
    </div>
  );
}

BoardPage.propTypes = {
    activePage: PropTypes.string.isRequired,
};


export default BoardPage;
