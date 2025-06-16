import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import MainHeader from './components/MainHeader'
import HomePage from './components/home/HomePage'
import BoardPage from './components/board/BoardPage'
import Footer from './components/Footer'


function App() {
  const [activePage, setActivePage] = useState("")

  return (
   <div className='App'>
    <button onClick={() => setActivePage("")}>Home</button>
    {/* Make into the Main header eventually  */}
    <MainHeader />
    {activePage === ""?
    <HomePage setActivePage={setActivePage}/>:
    <BoardPage activePage={activePage}/>}
    <Footer />
  </div>
  )
}

export default App
