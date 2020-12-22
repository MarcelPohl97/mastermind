import React, { useRef, useEffect } from 'react';
import Shape from './Shape';
import Navigation from './Navigation';
import Card from './Card';
import { motion } from "framer-motion";

import {
    Link, useParams
  } from "react-router-dom";
import BoardDetails from './BoardDetails';
import Modal from './Modal';
import BoardForm from './BoardForm';

const CardBoard = ({boards, cards, setCards, showModal, setshowModal, loadModal, setloadModal, get_Modal}) => {

    const shapes = [
        {
            id:1,
            css_classes: "rounded-full bg-white opacity-25 w-24 h-24 absolute inset-20"

        },
        {
            id:2,
            css_classes: "rounded-full bg-white opacity-50 w-14 h-14 absolute inset-2/3"

        },
        {
            id:3,
            css_classes: "rounded-full bg-white opacity-30 w-11 h-11 absolute inset-1/4"

        },
        {
            id:4,
            css_classes: "rounded-full bg-white opacity-50 w-14 h-14 absolute inset-x-3/4 inset-y-1/4"

        },
        {
            id:5,
            css_classes: "rounded-full bg-white opacity-25 w-32 h-32 absolute inset-96"

        },
        {
            id:6,
            css_classes: "rounded-full bg-white opacity-40 w-16 h-16 absolute inset-80"

        },
        {
            id:7,
            css_classes: "rounded-full bg-white opacity-25 w-16 h-16 absolute inset-y-1/3 inset-x-2/3"

        },
        {
            id:8,
            css_classes: "rounded-full bg-white opacity-25 w-28 h-28 absolute inset-y-2/3 inset-x-3/4"

        },
        {
            id:9,
            css_classes: "rounded-full bg-white opacity-25 w-12 h-12 absolute inset-x-96 inset-y-3/4"

        },
        
    ]

    const create_NewCard= (board_id) => {
        setCards([...cards, {
            id:5,
            name:'New Board',
            style:'shadow-lg rounded bg-blue-400 text-white w-52 h-10 p-1 absolute top-96 left-96',
            board_id:board_id,
        }])
    }
    const edit_Board = (board_id) => {

    }
    const {board_id} = useParams();
    
    const constraintsRef = useRef(null);

    const filtered_Board = boards.filter(board => board.id === parseInt(board_id))
    const MenuItems = [
        {
            id:1,
            anchor_name:'➕ Card',
            anchor_func: create_NewCard,
            anchor_additional: parseInt(board_id),
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
            create={false} filtered_Board={filtered_Board} onEdit={async (values) => {
                await new Promise((r) => setTimeout(r, 500));
                alert("Test");
            }}
            />
        },
        {
            id:3,
            anchor_name:'🏠 Home',
            anchor_func:'',
        },
    ]

    return (
        <>
        <motion.div ref={constraintsRef} className="absolute left-0 -top-0 z-50 bg-green-400 h-screen w-screen overflow-x-hidden">
            {showModal ? <Modal setshowModal={setshowModal} template={loadModal} /> : ''}
            {shapes.map(shape => <Shape styles={shape.css_classes} key={shape.id} />)}
            <header className="container mx-auto p-5">
                <Navigation MenuItems={MenuItems} />
            </header>
            {cards.filter(card => card.board_id === parseInt(board_id)).map(filteredCard => (
                <Card key={filteredCard.id} CardData={filteredCard} cards={cards} setCards={setCards} constraintsRef={constraintsRef} />
            ))}
        </motion.div>
        </>
    )
}

export default CardBoard;