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
             <Product 
             id="12321341"
             title="Description"
             price={49.99}
             image="https://img.deusm.com/informationweek/2014/09/1316005/apple_watch.png"
             rating={5}
             />
          
          <Product 
          id="12321354"
          title="Description"
             price={12229.99}
             image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZaWwTkNvWacYmLmFn3QO9cQy8Rw5rs_0uaQ&usqp=CAU"
             rating={5}
             />
                 </div>
                 <div className="home_row">
                 <Product 
                 id="1232134332"
                 title="Description"
             price={19.99}
             image="https://offautan-uc1.azureedge.net/-/media/images/off/ph/products-en/products-landing/landing/off_kids_product_collections_large_2x.jpg?la=en-ph"
             rating={5}
             />
                <Product 
                id="123213433"
                title="Description"
             price={9.99}
             image="https://api.time.com/wp-content/uploads/2018/11/sweetfoam-sustainable-product.jpg?w=800&quality=85"
             rating={5}
             />
             <Product 
             id="12321333"
             title="Description"
             price={9.99}
             image="https://www.nelco.lk/img/products/soya/soya_5.jpg"
             rating={5}
             />
          
          
                 </div>
                 <div className="home_row">
                 <Product 
                 id="12321323"
                 title="Description"
             price={39.99}
             image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8n7ToaZEdvFCNYDfzyblmi3qf-Sb4aDdctw&usqp=CAU"
             rating={4}
             />
          
                 </div>

            </div >

            
        </div>
    )
}

export default Home
