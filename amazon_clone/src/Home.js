import React from 'react'
import './Home.css'
import background from './images/homebg2.jpg'
import './Product'
import Product from './Product'
import img1 from './images/headphone.jpg'

function Home() {
    return (
        <div className="home">
            <div className="home_container">
                <img className="home_image "
                 src={background}/>
                 <div className="home_row">
             <Product title="Description"
             price={29.99}
             image={img1}
             rating={5}
             />
          
          <Product title="Description"
             price={29.99}
             image={img1}
             rating={5}
             />
                 </div>
                 <div className="home_row">
                 <Product title="Description"
             price={29.99}
             image={img1}
             rating={5}
             />
                <Product title="Description"
             price={29.99}
             image={img1}
             rating={5}
             />
             <Product title="Description"
             price={29.99}
             image={img1}
             rating={5}
             />
          
          
                 </div>
                 <div className="home_row">
                 <Product title="Description"
             price={29.99}
             image={img1}
             rating={4}
             />
          
                 </div>

            </div >

            
        </div>
    )
}

export default Home
