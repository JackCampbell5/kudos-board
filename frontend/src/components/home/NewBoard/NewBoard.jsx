import React from "react";
import ReactDOM from "react-dom";
import './NewBoard.css'
import PropTypes, { func } from 'prop-types';
import { useState } from "react";
import {convertToTitleCase} from '../../../utils/utils.js'
import Giphy from "../../allPages/Giphy/Giphy.jsx";





function NewBoard({addNewBoard}) {
    const [newActive, setNewActive] = useState(false);
    function swapActive() {
        setNewActive(!newActive)
    }

    const [gif, setGif] = useState("");


    const defaultBoard = {
        title: "",
        category: "recent",
        author: "",
        description: "",
    }
    //TODO Make icon use the giphy component I will be creating
    const [newBoard, setNewBoard] = useState(defaultBoard);
    function submit() {
        let newHelper = ({...newBoard, icon: gif})
        for (const key in newHelper) {
        if(newHelper[key] === ""&&key !=="author") {
            alert("Please fill out all fields");
            //TODO make all felids red when they are not filled out and submit is clicked
            return;
        }
        }
        swapActive();
        addNewBoard(newHelper);
    }



  return (
    // JSX code for rendering the component
    <div className="NewBoard">
        <button className="createNewBoard" onClick={swapActive}>{newActive ? "Hide":"New Board"}</button>
        {newActive ? (
            <div className="newBoardMaker">
                {Object.keys(defaultBoard).map(key =>  { const obj = defaultBoard[key];
                return(
                <div className="addBoardDiv" key={key}>
                    <p className="addBoardLabel">{convertToTitleCase(key)}:</p>
                    {key==="category"?
                        <select className="addBoardDropdown" name={key} onChange={(e)=> setNewBoard({...newBoard, [e.target.name]: e.target.value})}>
                            <option value="recent">Recent</option>
                            <option value="celebration">Celebration</option>
                            <option value="thanks">Thank You</option>
                            <option value="inspo">Inspiration</option>
                        </select>
                    :<input type="text" className="addBoardInput" name={key} onChange={(e)=> setNewBoard({...newBoard, [e.target.name]: e.target.value})} />
                }
                </div>
                )})}
                <Giphy gif={gif} setGifHelper={setGif} />
                <button className="submitButton"onClick={submit}>Submit</button>
            </div>
        ) : null}


    </div>
  );
}

NewBoard.propTypes = {
    addNewBoard: PropTypes.func.isRequired,
};


export default NewBoard;
