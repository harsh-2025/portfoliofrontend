// App.js

import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Portfolio from './components/Portfolio';
import { UserProvider } from './context/UserContext';
import StockInfo from './components/StockInfo';
import PortfolioList from './components/PortfolioList';
import PortfolioDetails from './components/PortfolioDetails';
import StockSearch from './components/StockSearch';
const App = () => {

  // return (
  //   <div className="app">
  //     <Header title="Portfolio Management System" user={user} />
  //     {/* Other components and content */}
  //     <div className="auth-container">
  //     <ToastContainer position="top-center" autoClose={5000} hideProgressBar={false} />
  //       <Login />
  //       <Signup />
  //     </div>
  //   </div>
  // );

  const [user, setUser] = useState(null);




  return (
    
    <BrowserRouter>
      <UserProvider>
      <ToastContainer position="top-center" autoClose={5000} hideProgressBar={false} />
              <Header/>

      <Routes>
      <Route path="/" element={<Home />}/>
          {/* <Route index element={<Home />} /> */}
          <Route path="stockinfo" element={<StockInfo/>}/>
          <Route path="signup" element={<Signup />} />
          <Route path='stocksearch' element={<StockSearch/>}/>
          <Route path='portfoliolist' element={<PortfolioList />} />
          <Route path='details' element={<PortfolioDetails/>}/>
        <Route path="portfolio" element={<Portfolio/>}/>
        <Route path="login" element={<Login setUser={setUser} />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        {/* </Route> */}
        </Routes>
        </UserProvider>
    </BrowserRouter> 
  );
};

export default App;
