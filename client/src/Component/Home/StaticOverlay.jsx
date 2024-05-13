import React from 'react';
import '../../Styles/Home/StaticOverlay.css';
import { useNavigate } from "react-router-dom";

const StaticOverlay = () => {

  const navigate = useNavigate();

  const handleSignUp = () =>{
    navigate('/budgetget');
  }

  return (
    <div className="static-overlay">
      <h1>Plan a Various Type of Trip Budget</h1>
      <p>Let's make a trend of planting and make a greener World again..........</p>
      <button onClick={handleSignUp}>Plan Now &gt; </button>
    </div>
  );
};

export default StaticOverlay;
