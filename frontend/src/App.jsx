import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useNavigate } from "react-router";
import { useEffect } from 'react';


import HomePage from './components/home/HomePage/HomePage'
import BoardPage from './components/board/BoardPage/BoardPage'
import Footer from './components/allPages/Footer/Footer'


function App() {
  const navigate = useNavigate();
  useEffect(() => { navigate("/")},[])


  const [activePage, setActivePage] = useState(["",""])
  const [darkMode, setDarkMode] = useState(false)
  function changeActivePage(newActivePage){
    let [page,_] = newActivePage
  if (page === ""){
    setActivePage(newActivePage);
    navigate("/")
  }else{
    setActivePage(newActivePage);
    navigate("/board")
  }}
  const checkFirstElementEmpty = (activePage) => {
    let [hi, _] = activePage;
    return hi === "";
  };
  return (
   <div className='App' id={darkMode?"dark":"light"}>
    <button onClick={() => setDarkMode(!darkMode)}>Dark Mode</button>
    {!checkFirstElementEmpty(activePage)? <button onClick={() => changeActivePage(["",""])}>Home</button> :null}
    <Routes>
          <Route path="/" element={<HomePage setActivePage={changeActivePage}/>} />
          <Route path="/board" element={<BoardPage activePage={activePage}/>} />
    </Routes>
    <footer>
      <Footer />
    </footer>
  </div>
  )
}

export default App
