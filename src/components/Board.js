import React from 'react';


const Board = ({board, onClick}) => {
    return (
        <>
        <div className="bg-white p-2 relative shadow-lg rounded-2xl flex flex-col items-center">
            <div className="w-100 py-3 px-12 border-4 border-green-400 rounded-full shadow-lg">
                <span className="text2xl">{board.board_emoji}</span>
            </div>
            <div className="divide-y divide-green-400 flex flex-col items-center">
                <h6 className="mt-3">{board.board_title}</h6>
                <span className="mt-3">Password protection {board.board_protected ? '🔒' : '🔓'} </span>
                <span className="mt-3">creator {board.board_created}</span>
            </div>
            <button onClick={onClick} className="bg-green-400 mt-3 py-2 px-8 shadow-lg rounded-md text-white text-base group"><span className="transform inline-block group-hover:animate-bounce">⚔</span> Join</button>
        </div>
        </>
    )
}

export default Board;