import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter , Routes , Route} from 'react-router-dom';
import './index.css';
import HomePage from './landingPage/home/HomePage';
import About from './landingPage/about/About';
import Signup from './landingPage/signUp/Signup';
import Pricing from './landingPage/pricing/Pricing';
import Products from './landingPage/products/Products';
import Support from './landingPage/support/Support'
import NotFound from './landingPage/NotFound';

import SignupForm from './landingPage/user/SignUp';
import LoginForm from './landingPage/user/Login';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>  
   
    <Route path="/" element={<HomePage />} />
    <Route path= "/login" element={<LoginForm /> } />
    <Route path="/signup" element= {< SignupForm/>} />
    <Route path="/usersignup" element={<Signup />} />
    <Route path="/about" element={<About />} />
    <Route path="/pricing" element={<Pricing />} />
    <Route path="/products" element={<Products />} />
    <Route path="/support" element={<Support />} />
    <Route path="/*" element={<NotFound />} />

  </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

