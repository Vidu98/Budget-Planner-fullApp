import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegisterPage from './Component/Register/RegisterPage';
import LandingPage from './Component/Landing/LandingPage';
import SignInPage from './Component/Login/SignInPage';
import Budget from './Component/Budget/BudgetPage';
import CreateBudget from './Component/Budget/CreateBudget';
import BudgetList from './Component/Budget/BudgetList';


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/login" element={<SignInPage/>} />
          <Route path="/register" element={<RegisterPage/>} />
          <Route path="/budget" element={<Budget/>} />
          <Route path="/budgetget" element={<CreateBudget/>} />
          <Route path="/budgetpost" element={<BudgetList/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
