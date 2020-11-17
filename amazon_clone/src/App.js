import React from 'react';

import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login'
import Payment from './Payment'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { useEffect } from 'react';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

function App() {
  const [{}, dispatch] = useStateValue(); 
  useEffect(()=>{
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  },[])
  return (
    <Router>
       <div className="App">
       
       <Switch>
       <Route path="/login">
         <Login/>
        <h1> Login page</h1>
        </Route>
       <Route path="/checkout">
       <Header/>
        <Checkout/>
        </Route>
        <Route path="/payment">
       <Header/>
        <h1>payment</h1>
        <Payment/>
        </Route>
        <Route path="/">
        <Header/>
        <Home/>
        </Route>
      
      </Switch>
      
    </div>
    </Router>
   
  );
}

export default App;
