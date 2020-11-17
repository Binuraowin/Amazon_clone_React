import React from 'react'
import './Payment.css'
import { useStateValue } from './StateProvider';
import CheckoutProduct from "./CkeckoutProduct"
import { Link } from 'react-router-dom';
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

function Payment() {
    const [{ basket, user }, dispatch] = useStateValue();
    

    const stripe = useStripe();
    const elements = useElements();
    return (
        <div className='payment'>
            <div className='payment_container'>
            <h1>
                    Checkout (
                        <Link to="/checkout">{basket?.length} items</Link>
                        )
                </h1>
            <div className='payment_section'>
                    <div className='payment_title'>
                        <h3>Delivery Address</h3>
                    </div>
                    <div className='payment_address'>
                        <p>{user?.email}</p>
                        <p>204/1 Rassagala road</p>
                        <p>Balangoda, Sri lanka</p>
                    </div>
                </div>
                <div className='payment_section'>
                    <div className='payment_title'>
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className='payment__items'>
                        {basket.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <div className='payment_section'>
                    <div className="payment_title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment_details">
                        <form>
                            <CardElement/>
                        </form>
                            {/* <form onSubmit={handleSubmit}>
                                <CardElement onChange={handleChange}/>

                                <div className='payment__priceContainer'>
                                    <CurrencyFormat
                                        renderText={(value) => (
                                            <h3>Order Total: {value}</h3>
                                        )}
                                        decimalScale={2}
                                        value={getBasketTotal(basket)}
                                        displayType={"text"}
                                        thousandSeparator={true}
                                        prefix={"$"}
                                    />
                                    <button disabled={processing || disabled || succeeded}>
                                        <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                                    </button>
                                </div>

                                  {/* Errors */}
                                {/* {error && <div>{error}</div>}
                            </form> */} 
                    </div>
                    </div>
        </div>
      
    )
}

export default Payment
