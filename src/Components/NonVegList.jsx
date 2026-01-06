import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import "../Css file/nonveg.css"
import {motion} from 'framer-motion'

const NonVegList = () => {
           
  const navigate=useNavigate();
  const [nonVegLists,setNonVegLists]=useState([])

  useEffect(()=>{
    fetch("https://pizza-order-app-backend-1.onrender.com/api/pizzas")
    .then(res=>res.json())
    .then(json=>setNonVegLists(json) )
  },[])
  

  const [hide,setHide]=useState(null)
  const [selectedItems,setSelectedItems] = useState([])


 const StorageName = (item) => {
  setSelectedItems(prev => {
    if(prev.includes(item.name)){
      return prev;
    }
    else{
      return  [...prev, item.name]
    }
  }
   );
};


const saveOrder = async () => {
  try {
    const res = await fetch("https://pizza-order-app-backend-1.onrender.com/api/orders/save-order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: selectedItems })
    });

    await res.json();
    navigate("/selected-items");
  } catch (err) {
    console.error(err);
  }
};


  return (
    <div className='nonVeg-container'>
      <div className='nonVeg-par'>
        <motion.p
        initial={{y:-100}}
        animate={{y:0}}
        transition={{type:"spring",stiffness:"400"}}
        >Select Your Meal on Non-Veg</motion.p>
        <>
          {nonVegLists.filter(data=>data.category==="Non-Veg").map((data)=>{
            return <div className='nonveg-list' key={data.id}>
              <motion.li
              initial={{scale:0}}
              animate={{scale:0.9}}
              transition={{duration:0.5,delay:1}}
              whileHover={{color:"black"}}
              onClick={()=>StorageName(data)}
            onMouseEnter={()=>setHide(data.id)}
            onMouseLeave={()=>setHide(null)}
             key={data.id}> {hide===data.id?`>${data.name}`:data.name}</motion.li>
              </div>
          })
          }
        </>
      </div>

      <div className='nonveg-button'>
        
      <motion.button 
      whileHover={{backgroundColor:"red", color:"white"}}
      onClick={()=>navigate("/menu")}>Back</motion.button>
      {
        selectedItems.length>0 && <motion.button 
        whileHover={{backgroundColor:"red", color:"white"}}
        onClick={saveOrder}>Next</motion.button>
      }
      </div>
      

    </div>
    
  )
}

export default NonVegList;