import React from 'react';

const Card = ({CardData}) => {
    return (
        <>
        <div className={CardData.style}>{CardData.name}</div>
        </>
    )
}

export default Card;