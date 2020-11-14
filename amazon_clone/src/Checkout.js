import React from 'react'
import "./Checkout.css"
import Subtotal from "./Subtotal"

function Checkout() {
    return (
        <div className="checkout">
            <div className="checkout_left ">
                <img className="checkout_ad"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRNnY-yAGva_Ql6RuCa6F2HTfcmt6MKQaBkww&usqp=CAU"
                />
                <div>
            <h2 className="checkout_title">
                Your shopping basket
            </h2>
            </div>

            </div>
           
            <div className="checkout_right">
            <h2 >
                sub total 
            </h2>
            <Subtotal/>
            </div>
          
        </div>
    )
}

export default Checkout
