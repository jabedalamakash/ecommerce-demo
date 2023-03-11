import React from 'react';

const Product = (props) => {
    
   const{title,price,description,rating}=props.product;
   console.log(props.onHandleCart);

   

 
    return (
       
        <div>
            <article className="product">
            <img src="" alt="" />
            <div className="product__details">
                <h4 className="product__title">{title}</h4>
                <p>Price: $ {price}</p>
                <p>Rating: {rating.rate}/5</p>
                <p className="product__desc">Description: {description}</p>
                <button className="product__btn btn" onClick={()=>props.onHandleCart(props.product) } >Add to cart</button>
            </div>
            </article>
        </div>
    );
};

export default Product;