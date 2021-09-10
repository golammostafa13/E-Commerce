import React, {useState, useEffect} from 'react';
import Products from '../Products/Products';
import CartTotal from '../CartTotal/CartTotal';
import { Link } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';

const Cart = ({cart, setCart, handleOrder}) => {
    const cartStyles = {
        display: 'flex',
    }
    const handlePlus = (productKey) =>{
        const product = cart.find(pd => pd.pdKey === productKey);
        product.count++;
        setCart([...cart]);
    }
    const handleMinus = (productKey) =>{
        const product = cart.find(pd => pd.pdKey === productKey);
        product.count > 1 ? product.count-- : product.count = 1;
        setCart([...cart]);
    }
    const handleRemoveProduct = (productKey) =>{
        const newCart = cart.filter(pd => pd.pdKey !== productKey);
        setCart(newCart);
    }
    // useEffect(() => {
    //     setCart([...cart])
    // }, [cart])
    return (
        <div style={cartStyles}>
            <Sidebar></Sidebar>
            {
                !cart.length ? 
                    (<h1>Your Cart is Empty!! Please <Link to={'/products'}>purchase something.</Link> Have a good day </h1>) : 
                    <Products 
                        cartHandle={true} 
                        handleMinus={handleMinus} 
                        handlePlus={handlePlus} 
                        products={cart}
                        handleRemoveProduct={handleRemoveProduct}>
                    </Products>
            }
            {
                cart.length && <CartTotal handleOrder={handleOrder} cart={cart}></CartTotal> 
            }
        </div>
    );
};

export default Cart;