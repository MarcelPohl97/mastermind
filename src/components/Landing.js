import React, { useState } from 'react';
import Shape from './Shape';
import Navigation from './Navigation';

const Landing = ({toggleLanding, settoggleLanding}) => {

    const toggle_Landing = () => {
        settoggleLanding(!toggleLanding)
    }

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

    const MenuItems = [
        {
            id:1,
            anchor_name:'💎 Features',
            anchor_func: '',
        },
        {
            id:2,
            anchor_name:'❓ About',
            anchor_func: '',
        },
        {
            id:3,
            anchor_name:'🛠 Support',
            anchor_func:'',
        },
    ]

    return (
        <>
        <div className="relative bg-green-400 h-screen w-100 clip-divider overflow-x-hidden">
            {shapes.map(shape => <Shape styles={shape.css_classes} key={shape.id} />)}
            <header className="container mx-auto p-5">
                <Navigation MenuItems={MenuItems} />
                <div className="flex flex-col items-center mt-24">
                    <div className="flex items-center">
                        <img src={"https://www.flaticon.com/svg/static/icons/svg/2491/2491288.svg"} className="w-16 h-16 mr-2" alt="Mastermind Icon"/>
                        <h2 className="text-4xl text-red-500"><span className="text-black">Master</span>mind</h2>
                    </div>
                    <p className="text-white text-2xl text-center mt-6">A simple, customizable Collaboration tool for teams 🤼 and individuals ⛹. <br></br> It's Free ✌.</p>
                    <div className="flex items-center mt-14">
                        <button onClick={toggle_Landing} aria-controls="simple-menu" aria-haspopup="true" className="bg-white py-3 px-10 shadow-lg rounded-md text-black text-base uppercase mr-4 group"><span className="transform inline-block group-hover:animate-bounce">⚡</span> Try it out</button>
                        <button aria-controls="simple-menu" aria-haspopup="true" className="bg-black py-3 px-10 shadow-lg rounded-md text-white text-base uppercase focus:border-2 focus:border-white group"><span className="transform inline-block group-hover:animate-bounce">☕</span> <span className="text-red-500">Buy me</span> a coffee</button>
                    </div>
                </div>
            </header>
        </div>
        </>
    );
}

export default Landing;