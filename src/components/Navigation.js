import React, {useState} from 'react';
import Menu from './Menu';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const Navigation = ({MenuItems, loadBgColor}) => {
    return (
        <>
            <nav className="flex items-center justify-between">
                <Link to="/">
                    <div className="flex items-center">
                        <img src={"https://www.flaticon.com/svg/static/icons/svg/2491/2491288.svg"} className="w-12 h-12 mr-2" alt="Mastermind Icon"/>
                        <h2 className="text-2xl text-red-500"><span className="text-black">Master</span>mind</h2>
                    </div>
                </Link>
                <Menu items={MenuItems} loadBgColor={loadBgColor} />
            </nav>
        </>
    )
}

export default Navigation;