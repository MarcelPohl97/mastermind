import React from 'react';
import Loader from './Loader';
import Shape from './Shape';

const LoaderContainer = () => {
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
    return (
        <>
        <div className="absolute left-0 -top-0 z-50 bg-green-400 h-screen w-screen">
            {shapes.map(shape => <Shape styles={shape.css_classes} key={shape.id} />)}
            <div className="flex items-center absolute top-1/4 left-1/2 transform -translate-y-2/4 -translate-x-2/4">
                <img src={"https://www.flaticon.com/svg/static/icons/svg/2491/2491288.svg"} className="w-16 h-16 mr-2" alt="Mastermind Icon"/>
                <h2 className="text-4xl text-red-500"><span className="text-black">Master</span>mind</h2>
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-y-2/4 -translate-x-2/4">
                <Loader />
            </div>
        </div>
        </>
    )
}

export default LoaderContainer;