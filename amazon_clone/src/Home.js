import React from 'react'
import './Home.css'
import background from './images/homebg2.jpg'
import './Product'
import Product from './Product'

function Home() {
    return (
        <div className="app">
            <div className="home_container">
                <img className="home_image "
                 src={background}/>
                 <div className="home_row">
             <Product/>


                 </div>
                 <div className="home_row">

                 </div>
                 <div className="home_row">

                 </div>

            </div >

            
        </div>
    )
}

export default Home
