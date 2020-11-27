import React from 'react';
import Shape from './Shape';
import Navigation from './Navigation';
import Card from './Card';

const CardBoard = ({cards, setCards, filtered_cards, toggle_Landing, join_Board}) => {

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

    const back_Home = () => {
        join_Board();
        toggle_Landing();
    }

    const create_NewCard= () => {
        setCards([...cards, {
            id:2,
            name:'New Board',
            style:'shadow-lg rounded bg-blue-400 text-white w-52 h-10 p-1 absolute top-96 left-96',
            board_id:1,
        }])
    }

    const MenuItems = [
        {
            id:1,
            anchor_name:'➕ Card',
            anchor_func: create_NewCard,
        },
        {
            id:2,
            anchor_name:'📋 Details',
            anchor_func: '',
        },
        {
            id:3,
            anchor_name:'📋 Boards',
            anchor_func:join_Board,
        },
        {
            id:3,
            anchor_name:'🏠 Home',
            anchor_func:back_Home,
        },
    ]
    alert(filtered_cards)

    return (
        <>
        <div className="absolute left-0 -top-0 z-50 bg-green-400 h-screen w-screen overflow-x-hidden">
            {shapes.map(shape => <Shape styles={shape.css_classes} key={shape.id} />)}
            <header className="container mx-auto p-5">
                <Navigation MenuItems={MenuItems} />
            </header>
            {filtered_cards.map(card => <Card CardData={card} />)}
        </div>
        </>
    )
}

export default CardBoard;