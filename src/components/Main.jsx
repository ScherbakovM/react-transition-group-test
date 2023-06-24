import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { motion, useScroll } from "framer-motion"


function Main(props) {
    const { scrollYProgress } = useScroll();
    let [visible, setVisible] = useState(false)
    function setVisibleP() {
        if (!visible) {
            setVisible(true)
        }
        else setVisible(false)
    }
    return (
        <motion.div
            id="qwerty"
            className=" text-4xl font-medium text-pink-300"  >
            <motion.div
                className="progress-bar"
                style={{ scaleX: scrollYProgress }}
            />
            <button className=" transition-transform mt-10 ml-5 border-pink-300 border-2 rounded-md " onClick={setVisibleP}>Hello</button>
            <CSSTransition in={visible} classNames="alert" timeout={300} unmountOnExit>
                <div className="w-fit mt-10 ml-5 p-5 text-center  border-2 border-pink-300 rounded-md">Параграф который появляется</div>
            </CSSTransition>
        </motion.div>
    )
}

export default Main;



