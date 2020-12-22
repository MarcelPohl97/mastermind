import React from 'react';

const About = () => {
    return (
        <>
            <div className="divide-y divide-gray-900 ">
                <h2 className="text-2xl pb-1">❓ About</h2>
                <div></div>
            </div>
            <p>The App was originally built as a pet project I wanted to understand real time interactions.</p>
            <p>After I finished most of the stuff it got to heavy and everything was a mess back when I built it in pure javascript and I stopped working on the project.</p>
            <p>Now once I got to know React I wanted to get into the project again and its a good opportunity to make a simple but useful utilitie tool for people thats free</p>
            <p>Obviously the project is running as long as firebase records dont break the daily free tier otherwise if you enjoy this app feel free to give a little donation!</p>
            <div className="divide-y divide-gray-900 pt-1">
                <div></div>
                <h2 className="pb-1 text-2xl">App created by Marcel Marcellus the 3rd. Pohl</h2>
                <button aria-controls="simple-menu" aria-haspopup="true" className="bg-black py-3 px-10 mt-2 shadow-lg rounded-md text-white text-base uppercase focus:border-2 focus:border-white group"><span className="transform inline-block group-hover:animate-bounce">☕</span> <span className="text-red-500">Buy me</span> a coffee</button>
            </div>
        </>
    )
}

export default About;
