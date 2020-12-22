import React from 'react';

const Modal = ({template, setshowModal}) => {

    return (
        <>
        <div className="p-4 md:w-2/4 w-full sm:w-full bg-white rounded-md shadow-md absolute left-1/2 top-1/3 transform -translate-x-2/4 -translate-y-2/4 z-100">
            <button className="absolute right-1.5 top-1.5" onClick={() => setshowModal(false)}>❌</button>
            {template}
        </div>
        </>
    )
}

export default Modal;