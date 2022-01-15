import './App.css';
import Header from'./components/Header/Header'
import Home from './components/Home/Home'
import Checkout from './components/Checkout/Checkout'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './components/Login/Login';
import React,{useEffect} from 'react'
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Signup from './components/Signup';
import {Payment} from './components/Payment';
import {Footer} from './components/Footer';
import {Orders} from './components/Orders';
import {ProductsPage} from './components/ProductsPage';


function App() {
  const[{},dispatch] = useStateValue();
  useEffect(()=>{
    //will only run once when the app components loads...
    auth.onAuthStateChanged(authUser => {
      console.log('the User is >>>', authUser);
      if(authUser){
        //the user just logged in / the user was logged in
        dispatch({
          type:'SET_USER',
          user: auth.currentUser
        })
      } else {
        // the user was logged out
        dispatch({
          type:'SET_USER',
          user: null
        })
      }
    });
  },[])
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path="/" element={<><Header/><Home/><Footer/></>}/>
        <Route path="/login" element={<><Login/></>}/>
        <Route path="/signup" element={<><Signup/></>}/>
        <Route path="/checkout" element={<><Header/><Checkout/><Footer/></>}/>
        <Route path="/orders" element={<><Header/><Orders/></>}/>
        <Route path="/products" element={<><Header/><ProductsPage/><Footer/></>}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
