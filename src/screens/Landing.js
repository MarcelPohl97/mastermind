import React, { useEffect, useState, useContext } from 'react';
import Shape from '../components/Shape';
import Navigation from '../components/Navigation';
import Modal from '../components/Modal';
import Features from '../components/Features'
import About from '../components/About';
import How from '../components/How';
import Gradients from '../components/Gradients';
import { motion } from "framer-motion";
import { GlobalContext } from '../provider/GlobalProvider';
import { AuthContext } from '../provider/AuthProvider';
import { auth } from '../firebase/firebase';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory,
  } from "react-router-dom";
  
const Landing = () => {
    
    const {user, loading, error, redirect, check_authenticated_user} = useContext(AuthContext);
    const {showModal, setshowModal, loadModal, setloadModal, loadBgColor, setloadBgColor, gradients, setGradients, get_Modal, shapes, fetchGradients} = useContext(GlobalContext);

    const MenuItems = [
        {
            id:1,
            anchor_name:'💎 Features',
            anchor_func: get_Modal,
            anchor_additional: <Features />,
        },
        {
            id:2,
            anchor_name:'❓ About',
            anchor_func: get_Modal,
            anchor_additional: <About />,
        },
        {
            id:3,
            anchor_name:'🛠 How it works',
            anchor_func: get_Modal,
            anchor_additional: <How />,
        },
        {
            id:4,
            anchor_name: '🏞 Theme',
            anchor_func: get_Modal,
            anchor_additional: <Gradients gradients={gradients} setGradients={setGradients} setloadBgColor={setloadBgColor}/>,
        }
    ]
    const history = useHistory();


    useEffect(() => {
        check_authenticated_user(history, user, 'Your already logged in!', '/boards');
    });
    

    return (
        <>
        <motion.div className="relative bg-green-400 h-screen w-100 clip-divider overflow-x-hidden" style={{background: `linear-gradient(${loadBgColor.colors})`}}>
            {shapes.map(shape => <Shape styles={shape.css_classes} key={shape.id} />)}
            {showModal ? <Modal setshowModal={setshowModal} template={loadModal} /> : ''}
            <header className="container mx-auto p-5">
                <Navigation MenuItems={MenuItems} loadBgColor={loadBgColor} />
                <div className="flex flex-col items-center mt-24">
                    <div className="flex items-center">
                        <img src={"https://www.flaticon.com/svg/static/icons/svg/2491/2491288.svg"} className="w-16 h-16 mr-2" alt="Mastermind Icon"/>
                        <h2 className="text-4xl text-red-500"><span className="text-black">Master</span>mind</h2>
                    </div>
                    <p className="text-white text-2xl text-center mt-6">A simple, customizable Collaboration tool for teams 🤼 and individuals ⛹. <br></br> It's Free ✌.</p>
                    <div className="flex items-center mt-14">
                        <Link to="/register"><button aria-controls="simple-menu" aria-haspopup="true" className="bg-white py-3 px-10 shadow-lg rounded-md text-black text-base uppercase mr-4 group"><span className="transform inline-block group-hover:animate-bounce">⚡</span> Try it out</button></Link>
                        <button aria-controls="simple-menu" aria-haspopup="true" className="bg-black py-3 px-10 shadow-lg rounded-md text-white text-base uppercase focus:border-2 focus:border-white group"><span className="transform inline-block group-hover:animate-bounce">☕</span> <span className="text-red-500">Buy me</span> a coffee</button>
                    </div>
                </div>
            </header>
        </motion.div>
        </>
    );
}

export default Landing;