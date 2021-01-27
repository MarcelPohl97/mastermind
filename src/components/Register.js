import React, { useEffect, useState, useContext } from 'react';
import Shape from './Shape';
import Navigation from './Navigation';
import Modal from './Modal';
import Features from './Features'
import About from './About';
import How from './How';
import Gradients from './Gradients';
import { motion } from "framer-motion";
import { GlobalContext } from '../provider/GlobalProvider';


import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  

const Register = () => {

    const {showModal, setshowModal, loadModal, setloadModal, loadBgColor, setloadBgColor, gradients, setGradients, get_Modal, shapes, fetchGradients} = useContext(GlobalContext);

    const MenuItems = [
        {
            id:1,
            anchor_name:'💎 Login',
            anchor_func: get_Modal,
            anchor_additional: <Features />,
        },
        {
            id:2,
            anchor_name:'❓ Forgot Password',
            anchor_func: get_Modal,
            anchor_additional: <About />,
        },
        {
            id:3,
            anchor_name: '🏞 Theme',
            anchor_func: get_Modal,
            anchor_additional: <Gradients gradients={gradients} setGradients={setGradients} setloadBgColor={setloadBgColor}/>,
        }
    ]

    

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
                    <p className="text-white text-2xl text-center mt-6">Register for free! and start collaborating <br></br> It's Free ✌.</p>
                    <div className="flex items-center mt-14">
                        <Link to="/boards"><button aria-controls="simple-menu" aria-haspopup="true" className="bg-white py-3 px-10 shadow-lg rounded-md text-black text-base uppercase mr-4 group"><span className="transform inline-block group-hover:animate-bounce">⚡</span> Register</button></Link>
                        <button aria-controls="simple-menu" aria-haspopup="true" className="bg-black py-3 px-10 shadow-lg rounded-md text-white text-base uppercase focus:border-2 focus:border-white group" onClick={() => {alert(loadBgColor.colors)}}><span className="transform inline-block group-hover:animate-bounce">☕</span> <span className="text-red-500">or</span> Login</button>
                    </div>
                </div>
            </header>
        </motion.div>
        </>
    );
}

export default Register;