import React, { useState } from "react";
import "./Sidebar.css";
import { assets } from "../../assets/assets";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("/add"); // Default active tab

  const handleNavigate = (path) => {
    navigate(path);
    setActiveTab(path);
  };

  return (
    <div className="sidebar">
      <div className="sidebar-options">
        <button 
          onClick={() => handleNavigate("/add")} 
          className={`sidebar-option ${activeTab === "/add" ? "active" : ""}`}
        >
          <img src={assets.add_icon} alt="Add Items" />
          <p>Add Items</p>
        </button>
        <button 
          onClick={() => handleNavigate("/list")} 
          className={`sidebar-option ${activeTab === "/list" ? "active" : ""}`}
        >
          <img src={assets.order_icon} alt="List Items" />
          <p>List Items</p>
        </button>
        <button 
          onClick={() => handleNavigate("/orders")} 
          className={`sidebar-option ${activeTab === "/orders" ? "active" : ""}`}
        >
          <img src={assets.order_icon} alt="Orders" />
          <p>Orders</p>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
