import React from 'react';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { signUp } from '../../asset/Firebase/firebase';

const CartTotal = ({cart, handleOrder}) => {
    const cartTotalStyle = {
        width: '20vw',
        height: '100vh',
        display: 'flex', 
        flexDirection: 'column',
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: '#f1f1f1' 
    }
    const subTotal = cart.reduce((prev, pd)=> {
        let curr = parseInt(pd.price.slice(1, pd.price.length));
        let cnt = pd.count;
        return prev + curr*cnt;
    }, 0);
    const totalItems = cart.reduce((prev, pd) => prev + pd.count, 0);
    const shippingCost = (3*subTotal)/100;
    const vat = ((subTotal*1.5)/100);
    const totalCost = subTotal + parseInt(shippingCost.toFixed(2)) + parseInt(vat.toFixed(2));
    const customerCost = {
        totalItems,
        shippingCost,
        vat,
        totalCost,
    }
    return (
        <div style={cartTotalStyle}>
            <h1 style={{borderBottom: '1px solid gray', fontSize: '24px'}}>Your Cart's Information</h1>
            <div>
                <h2>Total Items: {totalItems}</h2>
                <h2>Subtotal: {subTotal}$</h2>
                <h2>Shipping Cost: {shippingCost.toFixed(2)}$</h2>
                <h3>VAT: {vat.toFixed(2)}$</h3>
                <hr/>
                <h2>Total Cost: {totalCost}$</h2>
            </div>
            <Button 
                style={{margin: '3px'}} 
                variant="contained" 
                color="primary" 
                component={Link}
                to={'/order'}
                onClick={signUp}
                > 
                Place Order
            </Button>
        </div>
    );
};

export default CartTotal;