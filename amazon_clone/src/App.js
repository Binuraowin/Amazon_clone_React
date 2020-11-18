import React from 'react';

import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login'
import Payment from './Payment'
import Orders from './Orders'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { useEffect } from 'react';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";


const promise = loadStripe(
  "pk_test_51HoQ2RHUS2CciZ6xUsjJESK78GI43xYQ3Yje9TdDyGVmNjuZxt38RYFegfegaNQDBH4rQHBlnl6GosLp6batMuqk007S4JQZZU"
);
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
        </Route>
        <Route path="/orders">
        <Header/>
         <Orders/>
        </Route>
       <Route path="/checkout">
       <Header/>
        <Checkout/>
        </Route>
        <Route path="/payment">
       <Header/>
       <Elements stripe={promise}>
              <Payment />
            </Elements>
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
