import React, { useRef, useState } from 'react';
import { motion } from "framer-motion";
import CardForm from './CardForm';

const Card = ({filteredCard, cards, setCards, constraintsRef, filtered_Board, get_Modal, loadBgColor, priorities, setCardPriority, cardPriority}) => {

    const cardRef = useRef(null)

    const edit_Card = (values) => {
        setCards(cards.map((card) => {
            if(card.id === filteredCard.id) {
              return {
                ...card,
                id:1,
                name:values.name,
                style:card.style,
                creator:card.creator,
                board_id:filtered_Board[0].id,
                priority:cardPriority.color,
              }
            }
            return card;  
        })
    )}

    const delete_Card = () => {
        setCards(cards.filter((card) => card.id !== filteredCard.id));
    }

    return (
        <>

        <motion.div
            drag
            onDragStart={(event, info) => console.log(info.point.x, info.point.y)}
            onDragEnd={(event, info) => console.log(info.point.x, info.point.y)}
            dragConstraints={constraintsRef}
            onDoubleClick={() => {get_Modal(<CardForm create={false} filteredCard={filteredCard} loadBgColor={loadBgColor} priorities={priorities} setCardPriority={setCardPriority} onEdit={async (values) => {
                await new Promise((r) => setTimeout(r, 500));
                edit_Card(values);
            }}
            />
            )}} 
            contentEditable={filteredCard.editable} 
            className={`${filteredCard.style} ${filteredCard.priority} grab`}
            ref={cardRef}>
            {filteredCard.name}
        <button className="absolute right-0.5 top-0.5" onClick={delete_Card} contentEditable={'false'}>❌</button>
        </motion.div>
        </>
    )
}

export default Card;