import React, { useState } from 'react';
import './style/external.css';
import './style/main.css';
import Landing from './components/Landing';
import Boards from './components/Boards';

function App() {
  const [toggleLanding, settoggleLanding] = useState(true);
  return (
    <>
      {toggleLanding ? <Landing toggleLanding={toggleLanding} settoggleLanding={settoggleLanding} /> : <Boards />}
    </>
  )
}

export default App;
