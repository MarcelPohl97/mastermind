import React from 'react';

const Gradient = ({name, color}) => {
    return (
        <div className="p-2 relative shadow-lg rounded-2xl h-28" style={{backgroundImage: `linear-gradient('to right', ${color.toString().replace(",", ", ")})`}}>
            <h3 className="text-xl absolute top-2/4 left-2/4 transform -translate-x-2/4 -translate-y-2/4">{name}</h3>
        </div>
    )
}

export default Gradient;