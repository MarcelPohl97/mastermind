import React from 'react';
import { motion, useMotionValue, useTransform } from "framer-motion";

const Modal = ({template, setshowModal}) => {
    const window_top_border = (window.innerHeight / 100) * 20;
    const window_bottom_border = (window.innerHeight / 100) * 80;

    const y = useMotionValue(0)
    const background = useTransform(
        y,
        [window_top_border, 0, window_bottom_border],
        ["#ff008c", "#7700ff", "#ff008c"]
  )

    const hide_Modal = (modal_coords) => {
        if(modal_coords < window_top_border || modal_coords > window_bottom_border){
            setshowModal(false)
        }
    } 

    return (
        <>
        <motion.div
        className="p-4 md:w-2/4 w-full sm:w-full max-h-96 rounded-md shadow-md absolute left-1/4 top-1/4 z-100 overflow-y-scroll"
        style={{ background }}
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