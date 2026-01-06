import React from 'react'
import "../Css file/thankyou.css"
import { motion} from 'framer-motion'
import { useNavigate } from "react-router-dom";

const ThankYou = () => {
    const navigate=useNavigate();
  return (
    <div className='thankyou-container'>
        <title className='thankyou-title'>🎉 Thank You for Your Order!</title>

        <div className="thankyou-para">
        <motion.h1
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:1.5}}
        whileHover={{color:"#FF6618"}}
        >Your order has been placed successfully.</motion.h1>
        <motion.h1
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{delay:0.4,duration:1.5}}
        whileHover={{color:"#FF6618"}}

        >We’re already preparing your delicious pizza with fresh ingredients and lots of love ❤️</motion.h1>
        </div>

        <div className="thankyou-relax">
        <h1>Sit back, relax, and get ready to enjoy your meal!</h1>

        </div>
        <motion.button
        whileHover={{backgroundColor:"red", color:"white"}}
        className='thankyou-button' onClick={()=>navigate("/")}>Home</motion.button>

    </div>
  )
}

export default ThankYou