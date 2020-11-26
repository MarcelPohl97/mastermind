import React from 'react';

const Loader = () => {
    return(
        <>
        <div className="bg-white shadow-lg rounded-md p-6 flex flex-col items-center">
            <img src="https://www.flaticon.com/svg/static/icons/svg/189/189792.svg" className="w-12 h-12 animate-spin" alt=""/>
            <p className="mt-2 text-1xl">Loading...</p>
        </div>
        </>
    )
}

export default Loader;