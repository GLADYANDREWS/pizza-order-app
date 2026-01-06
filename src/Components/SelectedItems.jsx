import { useEffect, useState } from "react";
import "../Css file/selectedItems.css"
import {motion} from 'framer-motion'
import { useNavigate } from "react-router-dom";

const SelectedItems = () => {
  const navigate=useNavigate()
  const [orders, setOrders] = useState([]);

  // Fetch all orders from backend
  useEffect(() => {
    fetch("https://pizza-order-app-backend-1.onrender.com/api/orders")
      .then(res => res.json())
      .then(data => setOrders(data));
  }, []);

  // Delete order
  const handleDelete = async (id) => {
    await fetch(`https://pizza-order-app-backend-1.onrender.com/api/orders/${id}`, {
      method: "DELETE"
    });

    // update UI
    setOrders(prev => prev.filter(order => order._id !== id));
  };

  return (
    <div className="selected-container">
      <h1>Selected Orders</h1>
      {orders.length === 0 && <p>No orders yet.</p>}

      {orders.map(order => (
        <div  key={order._id} style={{  margin: "10px", padding: "10px" }}>
          <motion.p
          whileHover={{color:"white"}}
          >Items: {order.items.join(", ")}</motion.p>
          <motion.button
          whileHover={{backgroundColor:"red", color:"white"}}
          onClick={() => handleDelete(order._id)}>Delete</motion.button>
        </div>
      ))}
      <div className="button-sele">
        <motion.button
        whileHover={{backgroundColor:"red", color:"white"}}
        onClick={()=>navigate("/menu")}>Back</motion.button>

      <motion.button
      initial={{x:-765}}
      animate={{x:40}}
      transition={{delay:1,duration:2}}
      whileHover={{backgroundColor:"red", color:"white"}}
      onClick={()=>navigate("/conformed-order")}
      >Next</motion.button>
      </div>
    </div>
  );
};

export default SelectedItems;
