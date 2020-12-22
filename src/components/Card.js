import React from 'react';
import { motion } from "framer-motion";

const Card = ({CardData, cards, setCards, constraintsRef}) => {

    const edit_Card = (edit) => {
        setCards(cards.map((card) => {
            if(card.id === CardData.id) {
              return {
                ...card,
                editable: edit,
              }
            }
            return card;  
        })
    )}

    const delete_Card = () => {
        setCards(cards.filter((card) => card.id !== CardData.id));
    }

    return (
        <>

        <motion.div
            drag
            onDragStart={(event, info) => console.log(info.point.x, info.point.y)}
            onDragEnd={(event, info) => console.log(info.point.x, info.point.y)}
            dragConstraints={constraintsRef}
            onDoubleClick={() => {edit_Card('true')}} 
            onBlur={() => {edit_Card('false')}} 
            contentEditable={CardData.editable} 
            className={`${CardData.style} grab`}>
            {CardData.name}
        
        <span className="absolute bg-black text-white tooltip-form p-3 -left-0 -top-10 opacity-0 group-hover:opacity-100" contentEditable={'false'}>created by: {CardData.creator}</span>
        <button className="absolute right-0.5 top-0.5" onClick={delete_Card}>❌</button>
        </motion.div>
        </>
    )
}

export default Card;