import React from 'react';

const Gradient = ({name, color, setloadBgColor}) => {

    const switch_Theme = (color) => {
        setloadBgColor({colors: color});
    }

    return (
        <div className="p-2 relative shadow-lg rounded-2xl h-28 cursor-pointer transform hover:scale-110 duration-300 ease-in-out" style={{background: `linear-gradient(${color})`}} onClick={() => {switch_Theme(color)}}>
            <h3 className="text-xl absolute text-white top-2/4 left-2/4 transform -translate-x-2/4 -translate-y-2/4">{name}</h3>
        </div>
    )
}

export default Gradient;