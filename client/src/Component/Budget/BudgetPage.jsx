import React from "react";
import '../../Styles/Budget/Budget.css'; // Ensure the path is correct based on your file structure

export default function Budget() {
  return (
    <div className="container">
      <h1 className="Topic">Budget Plan</h1>
      <div className="container1">
        <a href="/budgetget"><button className="button-1">Create new budget</button></a>
        <a href="/budgetpost"><button className="button-2">Ongoing budget</button></a>
        <a href="/ViewPhase"><button className="button-2">Budget reports</button></a>
      </div>
    </div>
  );
}
