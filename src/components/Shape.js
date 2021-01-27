import React from 'react';
import { motion } from "framer-motion";

const Shape = ({styles}) => {
    return (
        <>
        <motion.div drag dragConstraints={{left: 0, top:0, right:0, bottom:0,}} className={styles}></motion.div>
        </>
    )
}

export default Shape;