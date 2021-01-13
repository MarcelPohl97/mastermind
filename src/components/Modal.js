import React from 'react';

const Modal = ({template, setshowModal}) => {

    return (
        <>
        <div className="p-4 md:w-2/4 w-full sm:w-full bg-white max-h-80 rounded-md shadow-md absolute left-1/2 top-1/3 transform -translate-x-2/4 -translate-y-2/4 z-100 overflow-y-scroll">
            <button className="sticky top-0 float-right -mt-4" onClick={() => setshowModal(false)}>❌</button>
            {template}
        </div>
        </>
    )
}

export default Modal;