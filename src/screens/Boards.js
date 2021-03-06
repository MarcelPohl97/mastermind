import React, { useContext, useEffect } from 'react';
import Shape from '../components/Shape';
import Navigation from '../components/Navigation';
import Board from '../components/Board';
import BoardForm from '../components/BoardForm';
import Modal from '../components/Modal';
import Gradients from '../components/Gradients';
import Settings from '../components/Settings';
import InfoMessage from '../components/InfoMessage';
import LoaderContainer from '../components/LoaderContainer';
import { GlobalContext } from '../provider/GlobalProvider';
import { AuthContext } from '../provider/AuthProvider';
import { auth, firestore } from '../firebase/firebase';
import { useCollection, useCollectionData } from 'react-firebase-hooks/firestore';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory,
  } from "react-router-dom";


  

const Boards = () => {

    const {boards, setBoards, showModal, setshowModal, hide_Modal, loadModal, loadBgColor, gradients, setGradients, setloadBgColor, get_Modal, shapes, fetchGradients, Emoji} = useContext(GlobalContext);
    const {user, redirect, check_authenticated_user, logout} = useContext(AuthContext);

    const [value, loading, error] = useCollectionData(
        firestore.collection('boards'),
        {
          snapshotListenOptions: { includeMetadataChanges: true },
        }
      );

    const add_boards = (value) => {
        {value && setBoards(value)}
    }

    const create_NewBoard = (values) => {
       const new_board = firestore.collection("boards").doc();
       new_board.set({
           emoji:Emoji,
           title:values.title,
           protected: true,
           created:values.created,
           id:new_board.id,
        })
    }

    const MenuItems = [
        {
            id:1,
            anchor_name:'➕ Board',
            anchor_func: () => {get_Modal(<BoardForm 
                create={true} loadBgColor={loadBgColor} Emoji={Emoji} onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 500));
                    create_NewBoard(values);
                }} 
            />)}
        },
        {
            id:2,
            anchor_name:'❓ Help',
            anchor_func: '',
            anchor_additional: '',
        },
        {
            id:3,
            anchor_name:'🔍 Board',
            anchor_func:'',
            anchor_additional: '',
        },
        {
            id:4,
            anchor_name:'⚙ Settings',
            anchor_func: get_Modal,
            anchor_additional:<Settings />,
        },
        {
            id:5,
            anchor_name: '🏞 Theme',
            anchor_func: get_Modal,
            anchor_additional: <Gradients gradients={gradients} setGradients={setGradients} setloadBgColor={setloadBgColor}/>,
        },
        {
            id:6,
            anchor_name: '🚪 Logout',
            anchor_func: () => {logout(); get_Modal(<InfoMessage message={'Successfully Logged out until next time!'} info_color={'text-green-400'}/>);},
        },
    ]

    const history = useHistory();

    useEffect(() => {
        fetchGradients();
        check_authenticated_user(history, !user, 'Your not logged in!', '/login');
        add_boards(value);
    })

    return (
        <>
        {loading ? <LoaderContainer /> : 
        <div className="relative bg-green-400 min-h-screen h-auto w-100 overflow-x-hidden" style={{background: `linear-gradient(${loadBgColor.colors})`}}>
            {showModal ? <Modal setshowModal={setshowModal} template={loadModal} /> : ''}
            {shapes.map(shape => <Shape styles={shape.css_classes} key={shape.id} />)}
            <header className="container mx-auto p-5">
                <Navigation MenuItems={MenuItems} loadBgColor={loadBgColor} />
            </header>
            <div className="container mx-auto p-10 grid responsive-grid">
                {value && boards.map(board => <Board board={board} key={board.id} loadBgColor={loadBgColor} hide_Modal={hide_Modal} /> )}
            </div>
        </div>
        }
        </>
    )
}

export default Boards;