import React from 'react';

const Priority = () => {
    return (
        <>
            <div className="my-2">
                <span className="text-green-500" contentEditable={'false'}>Set Priority:</span>
                <div className="flex items-center mt-2 mb-2">
                    <div tabindex="0" className="w-8 h-8 bg-green-500 mr-2 rounded-full cursor-pointer"></div>
                    <div tabindex="0" className="w-8 h-8 bg-blue-500 mr-2 rounded-full cursor-pointer"></div>
                    <div tabindex="0" className="w-8 h-8 bg-yellow-500 mr-2 rounded-full cursor-pointer"></div>
                    <div tabindex="0" className="w-8 h-8 bg-red-500 rounded-full cursor-pointer"></div>
                </div>
            </div>
        </>
    )
}

export default Priority;