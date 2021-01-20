import React from 'react';

const Priority = ({id, priority, color, setCardPriority }) => {

    const add_card_priority = (color) => {
        setCardPriority({color:color})
    }

    return (
        <>
            <div tabindex="0" className={`w-8 h-8 mr-2 rounded-full cursor-pointer ${color}`} key={id} title={priority} onClick={() => {add_card_priority(color);}}></div>
        </>
    )
}

export default Priority;