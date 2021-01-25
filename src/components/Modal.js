import React from 'react';
import { motion, useMotionValue, useTransform } from "framer-motion";

const Modal = ({template, setshowModal}) => {
    const window_top_border = (window.innerHeight / 100) * 10;
    const window_bottom_border = (window.innerHeight / 100) * 70;

    const hide_Modal = (modal_coords) => {
        if(modal_coords < window_top_border || modal_coords > window_bottom_border){
            setshowModal(false)
        }
    } 

    return (
        <>
        <motion.div
        className="p-4 md:w-2/4 bg-white w-full sm:w-full max-h-96 rounded-md shadow-md absolute left-1/4 top-1/4 z-100 overflow-y-scroll"
        drag="y"
        dragConstraints={{ top: 0, bottom: 0 }}
        dragElastic={0.7}
        onDragEnd={(event, info) => hide_Modal(info.point.y)}
        >
            {template}
        </motion.div>
        </>
    )
}

export default Modal;