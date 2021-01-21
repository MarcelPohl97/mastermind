import React from 'react';

const Priority = ({id, priority, color, radio}) => {

    return (
        <>
            <div tabindex="0" className={`w-8 h-8 mr-2 rounded-full relative cursor-pointer ${color}`} key={id} title={priority}>
                {radio}
            </div>
        </>
    )
}

export default Priority;