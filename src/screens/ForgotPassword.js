import React, { useEffect, useState, useContext } from 'react';
import Shape from '../components/Shape';
import Navigation from '../components/Navigation';
import Modal from '../components/Modal';
import Features from '../components/Features'
import About from '../components/About';
import How from '../components/How';
import InfoMessage from '../components/InfoMessage';
import { Formik, Field, Form } from 'formik';
import FormField from '../components/FormField'; 
import Gradients from '../components/Gradients';
import { auth } from '../firebase/firebase';
import { motion } from "framer-motion";
import { GlobalContext } from '../provider/GlobalProvider';


import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  

const ForgotPassword = () => {

    const send_password_reset = (email) => {
        auth.sendPasswordResetEmail(email)
        .then((status) => {
            get_Modal(<InfoMessage message={'We have send you a link to reset your password!'} info_color={'text-green-400'}/>)
          }).catch((error) => {
            get_Modal(<InfoMessage message={'This Email doesnt exist'} info_color={'text-red-400'}/>)
          });
    }

    const {showModal, setshowModal, loadModal, setloadModal, loadBgColor, setloadBgColor, gradients, setGradients, get_Modal, shapes, fetchGradients} = useContext(GlobalContext);

    const MenuItems = [
        {
            id:1,
            anchor_name:'💎 Register',
            anchor_func: get_Modal,
            anchor_additional: <Features />,
        },
        {
            id:2,
            anchor_name:'❓ Login',
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
                    <p className="text-white text-2xl text-center mt-6">Forgot your Password? NP. reset it now and resume collaborating <br></br> It's Free ✌.</p>
                    <div className="p-4 md:w-2/4 bg-white w-full sm:w-full max-h-96 rounded-md shadow-md mt-5">
                        <Formik
                            initialValues={{
                                email: '',
                            }}
                            onSubmit={(values) => {send_password_reset(values.email);}}
                            > 
                            <Form>
                                <FormField loadBgColor={loadBgColor} placeholder={"Example: JonDoe@gmail.com"} input_tag={"email"} label={"Email"}/>
                                <div className="flex flex-row items-center space-between">
                                    <button className="bg-white py-3 bg-green-400 px-10 shadow-lg rounded-md text-white text-base uppercase mr-4 group" style={{backgroundColor:`${loadBgColor.colors[0]}`}}><span className="transform inline-block group-hover:animate-bounce">📩</span> Send Request</button>
                                    <Link to="/login"><button className="bg-white py-3 px-10 bg-green-400 px-10 shadow-lg rounded-md text-white text-base uppercase mr-4 group"><span className="transform inline-block group-hover:animate-bounce">⛳ </span> or Login</button></Link>
                                </div>
                            </Form> 
                        </Formik>
                    </div>
                </div>
            </header>
        </motion.div>
        </>
    );
}

export default ForgotPassword;