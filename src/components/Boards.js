import React, { useContext, useEffect } from 'react';
import Shape from './Shape';
import Navigation from './Navigation';
import Board from './Board';
import BoardForm from './BoardForm';
import Modal from './Modal';
import Gradients from './Gradients';
import { GlobalContext } from '../provider/GlobalProvider';


  

const Boards = () => {

    const {boards, setBoards, showModal, setshowModal, loadModal, loadBgColor, gradients, setGradients, setloadBgColor, get_Modal, shapes, fetchGradients, Emoji} = useContext(GlobalContext);

    const create_NewBoard = (values) => {
        setBoards([...boards, {
            id:10,
            emoji:Emoji,
            title:values.title,
            protected: true,
            created:values.created,
        }])
    }

    const MenuItems = [
        {
            id:1,
            anchor_name:'➕ Board',
            anchor_func: get_Modal,
            anchor_additional: <BoardForm 
                create={true} loadBgColor={loadBgColor} Emoji={Emoji} onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 500));
                    create_NewBoard(values);

                }} 
            />
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
            anchor_name: '🏞 Theme',
            anchor_func: get_Modal,
            anchor_additional: <Gradients gradients={gradients} setGradients={setGradients} setloadBgColor={setloadBgColor}/>,
        },
    ]

    useEffect(() => {
        fetchGradients();
    })

    return (
        <>
        <div className="relative bg-green-400 min-h-screen h-auto w-100 overflow-x-hidden" style={{background: `linear-gradient(${loadBgColor.colors})`}}>
            {showModal ? <Modal setshowModal={setshowModal} template={loadModal} /> : ''}
            {shapes.map(shape => <Shape styles={shape.css_classes} key={shape.id} />)}
            <header className="container mx-auto p-5">
                <Navigation MenuItems={MenuItems} loadBgColor={loadBgColor} />
            </header>
            <div className="container mx-auto p-10 grid responsive-grid">
                {boards.map(board => <Board board={board} key={board.id} loadBgColor={loadBgColor} /> )}
            </div>
        </div>
        </>
    )
}

export default Boards;