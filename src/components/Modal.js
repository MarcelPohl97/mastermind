import React from 'react';
import Test from './Test';

const Modal = () => {

    const load_template = (template) => {
        return (
            <>
                {template}
            </>
        )
    }

    return (
        <>
        <div className="p-4 w-40 h-40 bg-white rounded-md shadow-md absolute left-1/2 top-1/3 transform -translate-x-2/4 -translate-y-2/4 z-100">
            {load_template(<Test />)}
        </div>
        </>
    )
}

export default Modal;