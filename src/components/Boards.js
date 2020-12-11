import React, { useState } from 'react';
import Shape from './Shape';
import Navigation from './Navigation';
import Board from './Board';
import CardBoard from './CardBoard';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  

const Boards = ({toggleCardBoard, settoggleCardBoard, boards, setBoards, cards, setCards, toggleLanding, settoggleLanding}) => {

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

    const toggle_Landing = () => {
        settoggleLanding(!toggleLanding);
    }

    const create_NewBoard = () => {
        setBoards([...boards, {
            emoji:'👌',
            title:'New Board',
            protected: true,
            created:'Tester',
        }])
    }

    const join_Board = (board) => {
        setCards(cards.filter(card => card.board_id === board.id))
        settoggleCardBoard(!toggleCardBoard)
    }

    const leave_Board = () => {
        setCards([
            {
              id:1,
              name:'Test1',
              style:'shadow-lg rounded bg-white w-52 h-10 p-1 absolute top-80 left-80',
              board_id:1,
            },
            {
              id:2,
              name:'Test2',
              style:'shadow-lg rounded bg-white w-52 h-10 p-1 absolute inset-y-16',
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
          ])
        settoggleCardBoard(!toggleCardBoard)
    }

    const MenuItems = [
        {
            id:1,
            anchor_name:'➕ Board',
            anchor_func: create_NewBoard,
        },
        {
            id:2,
            anchor_name:'❓ Help',
            anchor_func: '',
        },
        {
            id:3,
            anchor_name:'🔍 Board',
            anchor_func:'',
        },
        {
            id:4,
            anchor_name:'🏠 Home',
            anchor_func: toggle_Landing,
        },
    ]

    return (
        <>
        <div className="relative bg-green-400 min-h-screen h-auto w-100 overflow-x-hidden">
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