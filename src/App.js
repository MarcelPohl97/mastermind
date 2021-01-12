import React, { useState, useEffect } from 'react';
import './style/external.css';
import './style/main.css';
import Landing from './components/Landing';
import Boards from './components/Boards';
import LoaderContainer from './components/LoaderContainer';
import Modal from './components/Modal';
import CardBoard from './components/CardBoard';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [showModal, setshowModal] = useState(false);
  const [loadModal, setloadModal] = useState(null);
  const [loadBgColor, setloadBgColor] = useState({
    direction: 'to right',
    colors: '#439bfd, #73b3fb',
  })

  const [gradients, setGradients] = useState()

  const get_Modal = (component) => {
    setloadModal(component)
    setshowModal(true);
  }

  const [boards, setBoards] = useState( 
  [
    {
      id:1,
      emoji:'🤼',
      title:'Card Talk',
      protected: true,
      created:'Flower Powers',
    },
    {
      id:2,
      emoji:'☘',
      title:'YugiOh Strats',
      protected: false,
      created:'Players',
    },
    {
      id:3,
      emoji:'☕',
      title:'Meal Planning',
      protected: true,
      created:'Bäckerei',
    },
    {
      id:4,
      emoji:'⛽',
      title:'Walkie Talkie',
      protected: true,
      created:'Talkies',
    },
    {
      id:5,
      emoji:'⛷',
      title:'Kinds',
      protected: true,
      created:'Kindas',
    },
    {
      id:6,
      emoji:'⛳',
      title:'Wirklars',
      protected: false,
      created:'Wirk',
    },
    {
      id:7,
      emoji:'⚽',
      title:'Lorem Ipsum',
      protected: false,
      created:'Lorem',
    },
    {
      id:8,
      emoji:'✏',
      title:'Design UI',
      protected: true,
      created:'Dribble',
    },
  ]
  )

  const [cards, setCards] = useState(
    [
      {
        id:1,
        name:'Test1',
        style:'shadow-lg rounded bg-white w-52 h-10 p-1 absolute top-80 left-80',
        creator:'Marcellus',
        board_id:1,
      },
      {
        id:2,
        name:'Test2',
        style:'shadow-lg rounded bg-white w-52 h-10 p-1 absolute inset-y-16',
        creator:'Realtor',
        board_id:1,
      },
      {
        id:3,
        name:'Test3',
        style:'shadow-lg rounded bg-white w-52 h-10 p-1 absolute inset-40',
        board_id:2,
      },
      {
        id:4,
        name:'Test4',
        style:'shadow-lg rounded bg-white w-52 h-10 p-1 absolute inset-x-60',
        board_id:2,
      },
    ]
    )
   
  return (
    <>
       <Router>
          <Route exact path="/">
            <Landing showModal={showModal} setshowModal={setshowModal} loadModal={loadModal} setloadModal={setloadModal} get_Modal={get_Modal} loadBgColor={loadBgColor} setloadBgColor={setloadBgColor} gradients={gradients} setGradients={setGradients}/> 
          </Route>
          <Route excact path="/boards">
            <Boards boards={boards} setBoards={setBoards} cards={cards} setCards={setCards} showModal={showModal} setshowModal={setshowModal} loadModal={loadModal} setloadModal={setloadModal} get_Modal={get_Modal} loadBgColor={loadBgColor} setloadBgColor={setloadBgColor}/>
          </Route>
          <Route excact path="/cardboard/:board_id">
            <CardBoard boards={boards} setBoards={setBoards} cards={cards} setCards={setCards} showModal={showModal} setshowModal={setshowModal} loadModal={loadModal} setloadModal={setloadModal} get_Modal={get_Modal} loadBgColor={loadBgColor} setloadBgColor={setloadBgColor}/>
          </Route>
        </Router>
    </>
  )
}

export default App;
