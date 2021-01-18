import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  


const Board = ({board, loadBgColor}) => {
    return (
        <>
        <div className="bg-white p-2 relative shadow-lg rounded-2xl flex flex-col items-center">
            <div className="w-100 py-3 px-12 border-4 border-green-400 rounded-full shadow-lg" style={{borderColor:`${loadBgColor.colors[0]}`}}>
                <span className="text-2xl">{board.emoji}</span>
            </div>
            <div className="flex flex-col items-center">
                <h6 className="mt-3">{board.title}</h6>
                <div className="mt-3">
                    <hr className="border-t-2 border-green-400 w-full" style={{borderColor:`${loadBgColor.colors[0]}`}}></hr>
                    <span className="mt-3">Password protection {board.protected ? '🔒' : '🔓'} </span>
                </div>
                <div className="mt-3">
                    <hr className="border-t-2 border-green-400 w-full" style={{borderColor:`${loadBgColor.colors[0]}`}}></hr>
                    <span>creator {board.created}</span>
                </div>
            </div>
            <Link to={`cardboard/${board.id}`}><button className="bg-green-400 mt-3 py-2 px-8 shadow-lg rounded-md text-white text-base group" style={{backgroundColor:`${loadBgColor.colors[0]}`}}><span className="transform inline-block group-hover:animate-bounce">⚔</span> Join</button></Link>
        </div>
        </>
    )
}

export default Board;