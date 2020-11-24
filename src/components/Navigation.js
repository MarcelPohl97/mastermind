import React, {useState} from 'react';
import Menu from './Menu';

const Navigation = ({MenuItems}) => {
    return (
        <>
            <nav className="flex items-center justify-between">
                <div className="flex items-center">
                    <img src={"https://www.flaticon.com/svg/static/icons/svg/2491/2491288.svg"} className="w-12 h-12 mr-2" alt="Mastermind Icon"/>
                    <h2 className="text-2xl text-red-500"><span className="text-black">Master</span>mind</h2>
                </div>
                <Menu items={MenuItems} />
            </nav>
        </>
    )
}

export default Navigation;