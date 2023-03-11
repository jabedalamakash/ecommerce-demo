import React from 'react';


import Cart from '../Cart/Cart';
import Login from '../Log in/Login';
import Products from '../Products/Products';

const Header = () => {
    return (
        <div className='header'>
            <nav>
        
                <a href="/">Home</a>             
                <a href="/manage">Manage Inventory</a>
                <a href="/login">Log in</a> 
                {/* <Link to="/" className="">Home</Link>
                <Link to="/products" className="">Products</Link>
                <Link to="/order" className="">Order Review</Link>
                <Link to="/login" className="">Log in</Link> */}
            </nav>


           
            
        </div>
    );
};

export default Header;
                
