import React from 'react';
import { motion } from "framer-motion";

const Card = ({CardData, cards, setCards, constraintsRef}) => {

    const edit_Card = () => {
        setCards(cards.map((card) => {
            if(card.id === CardData.id) {
              return {
                ...card,
                editable:'true',
              }
            }
            return card;  
        })
    )}

    const unedit_Card = () => {
        setCards(cards.map((card) => {
            if(card.id === CardData.id) {
              return {
                ...card,
                editable:'false',
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
            onDoubleClick={edit_Card} 
            onBlur={unedit_Card}
            contentEditable={CardData.editable} 
            className={`${CardData.style} grab`}>
            {CardData.name}
        <span className="absolute bg-black text-white tooltip-form p-3 -left-0 -top-10 opacity-0 group-hover:opacity-100">created by: {CardData.creator}</span>
        <button className="absolute right-0.5 top-0.5" onClick={delete_Card}>❌</button>
        </motion.div>
        </>
    )
}

export default Card;