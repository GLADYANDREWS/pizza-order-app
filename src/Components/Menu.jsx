import { useNavigate } from "react-router-dom"
import "../Css file/menu.css"
import {motion} from 'framer-motion'

const Menu = () => {
    const navigate=useNavigate()
  return (
    <div className='menu-container'>
        <div className="menu-par">
        <motion.h1
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{delay:0.5,duration:1}}
        className='menu-title'>What do You prefer?!!</motion.h1>

        <motion.button
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{delay:1,duration:1}}
        className='menu-button' onClick={()=>navigate("/veg")}>Veg</motion.button> 

        <motion.button 
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{delay:1.5,duration:1}}
        className='menu-button' onClick={()=>navigate("/nonveg")}>Non-Veg</motion.button>
        </div>
    </div>
  )
}

export default Menu