import React from 'react';
import Board from './Board';

const BoardDetails = ({filtered_Board}) => {
    return (
        <>
        <div className="divide-y divide-gray-900 ">
            <h2 className="text-2xl pb-1">📋 Board Details</h2>
            <ul className="pt-1">
                <li><span className="text-xl">😀 Emoji:</span> {filtered_Board[0].emoji}</li>
                <li><span className="text-xl">🥇 Title:</span> {filtered_Board[0].title}</li>
                <li><span className="text-xl ">⛔ Protected:</span> {filtered_Board[0].protected.toString()}</li>
                <li><span className="text-xl ">✍ Created:</span> {filtered_Board[0].created}</li>
            </ul>
        </div>
        </>
    )
}

export default BoardDetails;