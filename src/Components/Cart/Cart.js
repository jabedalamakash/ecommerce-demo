import React from 'react';
import "./cart.css";
const Cart = (props) => {
    
    const cart=props.cart;
    console.log(cart);
    const total=cart.reduce((total,prdct)=>total+prdct.price,0);

    let shipping=0;
    if(total>50){
        shipping=20;
    }
    else if(total==0){
        shipping=0;
    }
    else if(total<40){
        shipping=40;
    }
   
    
    const totalprice=Math.round(total);
    const tax= totalprice/40;
    const totalPayment=Math.round(shipping+totalprice+tax);



    return (
        <div>
            <h1>Your Cart</h1>
            <h3>Order Summary</h3>
            <h4>Items Ordered:{cart.length}</h4>
            <p>items Price:{totalprice}</p>
            
            <p>Shipping charge:{shipping}</p>
            <p>Tax:{tax}</p>
            <p>Total Payment:{totalPayment} </p>

        </div>
    );
};

export default Cart;