import React, { useState } from 'react';
import './style/external.css';
import './style/main.css';
import Landing from './components/Landing';
import Boards from './components/Boards';
import LoaderContainer from './components/LoaderContainer';

function App() {
  const [toggleLanding, settoggleLanding] = useState(true);
  const [dataLoader, setdataLoader] = useState(false);
  const [toggleCardBoard, settoggleCardBoard] = useState(false);

  const [boards, setBoards] = useState( 
  [
    {
      board_emoji:'🤼',
      board_title:'Card Talk',
      board_protected: true,
      board_created:'Flower Powers',
    },
    {
      board_emoji:'☘',
      board_title:'YugiOh Strats',
      board_protected: false,
      board_created:'Players',
    },
    {
      board_emoji:'☕',
      board_title:'Meal Planning',
      board_protected: true,
      board_created:'Bäckerei',
    },
    {
      board_emoji:'⛽',
      board_title:'Walkie Talkie',
      board_protected: true,
      board_created:'Talkies',
    },
    {
      board_emoji:'⛷',
      board_title:'Kinds',
      board_protected: true,
      board_created:'Kindas',
    },
    {
      board_emoji:'⛳',
      board_title:'Wirklars',
      board_protected: false,
      board_created:'Wirk',
    },
    {
      board_emoji:'⚽',
      board_title:'Lorem Ipsum',
      board_protected: false,
      board_created:'Lorem',
    },
    {
      board_emoji:'✏',
      board_title:'Design UI',
      board_protected: true,
      board_created:'Dribble',
    },

  ]
  )

  return (
    <>
      {dataLoader ? <LoaderContainer /> : ""}
      {toggleLanding ? <Landing toggleLanding={toggleLanding} settoggleLanding={settoggleLanding} /> : <Boards toggleCardBoard={toggleCardBoard} settoggleCardBoard={settoggleCardBoard} boards={boards} setBoards={setBoards} toggleLanding={toggleLanding} settoggleLanding={settoggleLanding} />}
    </>
  )
}

export default App;
