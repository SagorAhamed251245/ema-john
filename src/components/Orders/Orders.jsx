import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { Link, useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Orders.css'
import { removeFromDb , deleteShoppingCart} from '../../utilities/fakedb';

const Orders = () => {
    const savedCart = useLoaderData();
    const [cart, setCart] = useState(savedCart);

    const handleRemoveFromCart = (id) => {
        const remaining = cart.filter(product => product._id !== id);
        setCart(remaining);
        removeFromDb(id)
       
        
    }
  
   const handleDeleteFromCart = () => {
    setCart([]);
    deleteShoppingCart ();
   
    
}
   
    return (
        <div className = 'shop-container'>
           
            <div className = 'review-container'>
                {
                    cart.map(product=> <ReviewItem
                    key={product._id}
                    product={product}
                    handleRemoveFromCart= {handleRemoveFromCart}
                    
                    ></ReviewItem>)
                }
            </div>

            <div className = 'cart-container'>
                <Cart cart ={cart}
                handleDeleteFromCart= {handleDeleteFromCart} 
                >
                    <Link to= "/checkout">
                        <button>Prosied Chack Out</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Orders;