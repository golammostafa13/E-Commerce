import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import App from './App';
import Header from './components/Header/Header';
import Products from './components/Products/Products';
import Navbar from './components/Navbar/Navbar';
import Details from './components/Details/Details';
import Cart from './components/Cart/Cart';
import Review from './components/Review/Review';
import { products as fakeProduct } from './asset/index';
import Order from './components/Order/Order';
const Routes = () => {
    const [products, setProducts] = useState(fakeProduct)
    const [cart, setCart] = useState([])

    // handle card product while adding to cart list
    const handleAddToCart = (productKey) =>{
        const isItemAlreadyAdded = cart.find(pd => pd.pdKey === productKey);
        let newCartProduct;
        
        // all cart products will be appeared once time
        isItemAlreadyAdded ? newCartProduct = false : newCartProduct = products.find(p => p.pdKey === productKey);
        if(newCartProduct){
            newCartProduct.count = 1;
            setCart([...cart, newCartProduct])
        }else setCart([...cart]);
    }
    const handleOrder = (customerCost) => {
        console.log(customerCost);
    }
    return (
        <Router>
            <Header cartProductCount={cart.length}></Header>
            <Switch>
                <Route exact path="/">
                    <App handleAddToCart={handleAddToCart}></App>
                </Route>
                <Route exact path="/products">
                    <Products products={products} handleAddToCart={handleAddToCart}></Products>
                </Route>
                <Route exact path="/details/:productKey">
                    <Details products={products} handleAddToCart={handleAddToCart}></Details>
                </Route>
                <Route exact path="/cart">
                    <Cart handleOrder={handleOrder} cart={cart} setCart={setCart}></Cart>
                </Route>
                <Route exact path="/review" component={Review}></Route>
                <Route exact path="/order">
                    <Order></Order>
                </Route>
            </Switch>
            <Navbar></Navbar>
        </Router>
    );
};

export default Routes;