import React, { useState } from 'react';

const Menu = ({items}) => {
    const [showMenu, setshowMenu] = useState(false);

    const ToggleMenu = () => {
        setshowMenu(!showMenu);
    }

    return(
        <>
            <div className="relative">
                <button onClick={ToggleMenu} className="bg-white py-2 px-9 shadow-lg rounded-md text-green-400 text-base uppercase">⛏Menu</button>
                {showMenu ?
                <div class="absolute top-0 left-0 shadow-lg w-9/12 rounded-md overflow-hidden">
                    {items.map(item => <button onClick={ToggleMenu} className="bg-white py-2 px-3 hover:bg-gray-100 w-full text-center">{item.anchor_name}</button>)}
                </div> : 
                ""}
            </div>
        </>
    )
}

export default Menu;