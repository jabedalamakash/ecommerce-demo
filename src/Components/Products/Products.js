import React, { useState } from 'react';
import Cart from '../Cart/Cart';
// import Data from "../products.json";
import Product from "../Product/Product";


const Products = ({products}) => {
    const [cart,setCart] = useState([]);
    // console.log(products);
    // const length=cart.length;
    const handleCart=(product)=>{
        console.log('product added',product);
        const newCart=[...cart,product];
        setCart(newCart);
       }
    const items=products && products.map((product)=>(<Product key={product.id} onHandleCart={handleCart} product={product} />))
    
    return (
        <div className='container'>
            <div className='itemsContainer'>
            {items}
            </div>
            <div className='cartContainer'>
               <Cart cart={cart}/>
            </div>
        </div>
    );
};

export default Products;