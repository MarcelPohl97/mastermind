import React, { useState } from 'react';
import Shape from './Shape';
import Navigation from './Navigation';
import Board from './Board';
import CardBoard from './CardBoard';
import BoardForm from './BoardForm';
import Modal from './Modal';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  

const Boards = ({boards, setBoards, cards, setCards, showModal, setshowModal, loadModal, setloadModal, get_Modal}) => {

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

    const create_NewBoard = (values) => {
        setBoards([...boards, {
            id:10,
            emoji:values.emoji,
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
                create={true} onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 500));
                    alert(JSON.stringify(values, null, 2));
                    await create_NewBoard(values);

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
    ]

    return (
        <>
        <div className="relative bg-green-400 min-h-screen h-auto w-100 overflow-x-hidden">
            {showModal ? <Modal setshowModal={setshowModal} template={loadModal} /> : ''}
            {shapes.map(shape => <Shape styles={shape.css_classes} key={shape.id} />)}
            <header className="container mx-auto p-5">
                <Navigation MenuItems={MenuItems} />
            </header>
            <div className="container mx-auto p-10 grid responsive-grid">
                {boards.map(board => <Board board={board} key={board.id} /> )}
            </div>
        </div>
        </>
    )
}

export default Boards;