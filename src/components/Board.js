import React, {useContext} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import BoardForm from './BoardForm';
import { GlobalContext } from '../provider/GlobalProvider';
import { firestore } from '../firebase/firebase';
  


const Board = ({board, loadBgColor, hide_Modal}) => {

    const edit_Board = (values) => {
        const boardRef = firestore.collection("boards").doc(board.id.toString());

        boardRef.update({
            id:board.id,
            emoji:Emoji,
            title:values.title,
            protected: true,
            created:values.created,
        });
    }

    const { get_Modal, Emoji, boards, delete_Board } = useContext(GlobalContext);
    const filtered_Board = boards.filter(boardRef => boardRef.id === board.id);
    return (
        <>
        <div className="bg-white p-2 relative shadow-lg rounded-2xl flex flex-col items-center" onDoubleClick={() => {get_Modal(<BoardForm 
                create={false} filtered_Board={filtered_Board} delete_Board={delete_Board} hide_Modal={hide_Modal} loadBgColor={loadBgColor} onEdit={async (values) => {
                    edit_Board(values);
                }}
                />)}}>
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