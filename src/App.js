import React, { useState } from 'react';
import './style/external.css';
import './style/main.css';
import Landing from './components/Landing';
import Boards from './components/Boards';
import LoaderContainer from './components/LoaderContainer';
import Modal from './components/Modal';

function App() {
  const [toggleLanding, settoggleLanding] = useState(true);
  const [dataLoader, setdataLoader] = useState(false);
  const [toggleCardBoard, settoggleCardBoard] = useState(false);
  const [showModal, setshowModal] = useState(true);

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
        style:'shadow-lg rounded bg-white w-52 h-10 p-1 absolute top-80 left-80 cursor-grabbing group',
        editable:'false',
        creator:'Marcellus',
        board_id:1,
      },
      {
        id:2,
        name:'Test2',
        style:'shadow-lg rounded bg-white w-52 h-10 p-1 absolute inset-y-16 cursor-grabbing group',
        editable:'false',
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
      {showModal ? <Modal /> : ""}
      {dataLoader ? <LoaderContainer /> : ""}
      {toggleLanding ? 
      <Landing toggleLanding={toggleLanding} settoggleLanding={settoggleLanding} /> 
      : 
      <Boards toggleCardBoard={toggleCardBoard} settoggleCardBoard={settoggleCardBoard} 
              boards={boards} setBoards={setBoards} 
              cards={cards} setCards={setCards} 
              toggleLanding={toggleLanding} settoggleLanding={settoggleLanding} />}
    </>
  )
}

export default App;
