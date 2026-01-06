import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Css file/veg.css";
import {motion, spring} from 'framer-motion'

const VegList = () => {
  const navigate = useNavigate();

  const [vegList, setVegList] = useState([]);
  const [hide, setHide] = useState(null);
  const [selectedItems, setSelectedItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/pizzas")
      .then(res => res.json())
      .then(data => setVegList(data));
  }, []);

  const handleSelect = (item) => {
    setSelectedItems(prev => {
    if(prev.includes(item.name)){
      return prev;
    }
    else{
      return [...prev, item.name] 
    }
    });
  };

  const saveOrder = async () => {
    try {
      await fetch("http://localhost:5000/api/orders/save-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items: selectedItems })
      });

      navigate("/selected-items");
    } catch (error) {
      console.error("Error saving veg order", error);
    }
  };

  return (
    <div className="veg-container">
      <div className="veg-par">
        <motion.p
        initial={{y:-200}}
        animate={{y:-20}}
        transition={{type:spring}}
        >Select Your Meal on Veg</motion.p>

        <div>
          {vegList
            .filter(item => item.category === "Veg")
            .map((item) =>{

              return <div className="veg-list-con">
              <motion.li
              initial={{scale:0}}
              animate={{scale:0.9}}
              transition={{duration:0.5,delay:1}}
              whileHover={{color:"black"}}
                key={item.id}
                className="veg-list"
                onClick={() => handleSelect(item)}
                onMouseEnter={() => setHide(item.id)}
                onMouseLeave={() => setHide(null)}
              >
                {hide === item.id ? `> ${item.name}` : item.name}
              </motion.li>
              </div>
            } 
            )}
        </div>
      </div>

      <div className="veg-button">
        <motion.button
        whileHover={{backgroundColor:"red", color:"white"}}
        onClick={() => navigate("/menu")}>Back</motion.button>

        {selectedItems.length > 0 && (
          <motion.button 
          whileHover={{backgroundColor:"red", color:"white"}}
          onClick={saveOrder}>Next</motion.button>
        )}
      </div>
    </div>
  );
};

export default VegList;
