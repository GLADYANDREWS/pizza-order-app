import "./App.css"
import Menu from './Components/Menu'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import {motion} from 'framer-motion'
import NonVegList from "./Components/NonVegList"
import VegList from "./Components/VegList"
import SelectedItems from "./Components/SelectedItems"
import ThankYou from "./Components/ThankYou"
const App = () => {
  const navigate=useNavigate()
    const location = useLocation();
  return (
    <div>
      <title>Pizza-App</title>
      <div className='head'>
        <img data-v-e883b1bf="" srcSet="https://img.icons8.com/?size=48&amp;id=bcb11mkMayyc&amp;format=png 1x, https://img.icons8.com/?size=96&amp;id=bcb11mkMayyc&amp;format=png 2x" alt="French Fries" width="48" height="48"></img>
        <h1>Pizza</h1>
      </div>

      <Routes >
        <Route path="/" element={<h2 aria-label="Homepage"></h2>}/>
        <Route path="/menu" element={<Menu />} />
        <Route path="/nonveg" element={<NonVegList/>}/>
        <Route path="/veg" element={<VegList/>}/>
        <Route path="/selected-items" element={<SelectedItems/>}/>
        <Route path="/conformed-order" element={<ThankYou/>} />
      </Routes>    
      {location.pathname==="/"&&(

      <div className="container">
        <div className="parrent">
        <motion.p
        initial={{y:-50}}
        animate={{y:90}}
        transition={{type:"spring",stiffness:400}}
        >Place your order please!</motion.p>
        </div>
      </div>
      )}
       {location.pathname === "/" && (
        <motion.button
        initial={{x:-900}}
        animate={{x:0}}
        transition={{duration:2}}
        whileHover={{backgroundColor:"red", color:"white"}}
        onClick={() => navigate("/menu") }>
          Order
        </motion.button>
       )}
    </div>
  )
}

export default App