import React, { useRef, useContext, useEffect } from 'react';
import Shape from './Shape';
import Navigation from './Navigation';
import Card from './Card';
import { motion } from "framer-motion";

import {
    Link, useParams, useHistory
  } from "react-router-dom";
import BoardDetails from './BoardDetails';
import Modal from './Modal';
import BoardForm from './BoardForm';
import CardForm from './CardForm';
import { parse } from 'postcss';
import Gradients from './Gradients';
import Priority from './Priority';
import { GlobalContext } from '../provider/GlobalProvider';




const CardBoard = () => {

    const {boards, setBoards, cards, setCards, showModal, setshowModal, loadModal, setloadModal, loadBgColor, gradients, setGradients, setloadBgColor, get_Modal, hide_Modal, shapes, priorities, fetchGradients, Emoji} = useContext(GlobalContext);
    const history = useHistory();

    const {board_id} = useParams();
    const constraintsRef = useRef(null);

    const filtered_Board = boards.filter(board => board.id === parseInt(board_id));

    const redirect = (link) => {
        history.push(link);
    };

    const create_NewCard= (values, board_id) => {
        setCards([...cards, {
            id:5,
            name:values.name,
            style:'shadow-lg rounded text-white w-52 h-12 p-1 absolute top-96 left-96 group break-words h-auto',
            creator:'Marcellus',
            board_id:board_id,
            priority:values.priority,
        }])
    }

    const edit_Board = (values) => {
        setBoards(boards.map((board) => {
            if(board.id === parseInt(filtered_Board[0].id)) {
              return {
                ...board,
                id:filtered_Board[0].id,
                emoji:Emoji,
                title:values.title,
                protected: true,
                created:values.created,
              }
            }
            return board;  
        }))
    }

    const MenuItems = [
        {
            id:1,
            anchor_name:'➕ Card',
            anchor_func: get_Modal,
            anchor_additional:<CardForm create={true} loadBgColor={loadBgColor} priorities={priorities} onSubmit={async (values) => {
                create_NewCard(values, filtered_Board[0].id);
            }}
            />
        },
        {
            id:2,
            anchor_name:'📋 Details',
            anchor_func: get_Modal,
            anchor_additional:<BoardDetails filtered_Board={filtered_Board}/>,
        },
        {
            id:3,
            anchor_name:'📋 Edit',
            anchor_func: get_Modal,
            anchor_additional: <BoardForm 
            create={false} filtered_Board={filtered_Board} loadBgColor={loadBgColor} onEdit={async (values) => {
                edit_Board(values);
            }}
            />
        },
        {
            id:4,
            anchor_name: '🏞 Theme',
            anchor_func: get_Modal,
            anchor_additional: <Gradients gradients={gradients} setGradients={setGradients} setloadBgColor={setloadBgColor}/>,
        },
        {
            id:5,
            anchor_name: '💬 Chat',
            anchor_func: redirect,
            anchor_additional: '/chat',
        },
        {
            id:6,
            anchor_name: '🗄 Kanban',
            anchor_func: redirect,
            anchor_additional: '/kanban',
        },
        {
            id:7,
            anchor_name: '🎨 Drawing',
            anchor_func: redirect,
            anchor_additional: '/drawing',
        },
        {
            id:8,
            anchor_name: '📅 Calendar',
            anchor_func: redirect,
            anchor_additional: '/calendar',
        },
        {
            id:9,
            anchor_name: '🤛Team',
            anchor_func: redirect,
            anchor_additional: '/teams',
        },
    ]

    return (
        <>
        <motion.div ref={constraintsRef} className="absolute left-0 -top-0 z-50 bg-green-400 h-screen w-screen overflow-x-hidden" style={{background: `linear-gradient(${loadBgColor.colors})`}}>
            {showModal ? <Modal setshowModal={setshowModal} template={loadModal} /> : ''}
            {shapes.map(shape => <Shape styles={shape.css_classes} key={shape.id} />)}
            <header className="container mx-auto p-5">
                <Navigation MenuItems={MenuItems} loadBgColor={loadBgColor} />
            </header>
            {cards.filter(card => card.board_id === parseInt(board_id)).map(filteredCard => (
                <Card key={filteredCard.id} filteredCard={filteredCard} cards={cards} setCards={setCards} constraintsRef={constraintsRef} filtered_Board={filtered_Board} get_Modal={get_Modal} hide_Modal={hide_Modal} loadBgColor={loadBgColor} priorities={priorities} />
            ))}
        </motion.div>
        </>
    )
}

export default CardBoard;