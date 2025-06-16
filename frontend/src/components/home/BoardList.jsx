import React from "react";
import ReactDOM from "react-dom";
import './BoardList.css'
import PropTypes, { func } from 'prop-types';
import Board from './Board'
import {deleteBoardAPI} from './../../utils/utils'


function BoardList({listData, setListData, searchTerm, filterType, setActivePage}) {
  let num =0;
  function deleteBoard(id){
    deleteBoardAPI(id, ()=>setListData(listData.filter(board => board.id !== id)) );

  }
  return (
    // JSX code for rendering the component
    <div className="BoardList">
        <div id="boards">
      {listData.map(obj =>  {
            if((filterType==="all"||obj.category===filterType)&&(obj.title.toLowerCase().includes(searchTerm)||searchTerm==="")){ num++;
          return(<Board key={obj.id} data={obj} clickBoard={setActivePage}  deleteBoard={(deleteBoard)}/>)
      }else{<p>{obj.id}</p>}
      })}
      </div>
      <div id="boardTotal">
        <p id="boardTotalNum">{num} </p>
        <p id="boardTotalLabel"> Boards Displayed</p>
      </div>
    </div>
  );
}

BoardList.propTypes = {
    // data: PropTypes.array.isRequired,
};




export default BoardList;
