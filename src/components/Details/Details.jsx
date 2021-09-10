import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import Product from '../Product/Product';
import Sidebar from '../Sidebar/Sidebar';
const Details = ({handleAddToCart, products}) => {
    let {productKey} = useParams();
    productKey = parseInt(productKey);
    console.log(productKey);
    const product = products.find(pd => pd.pdKey === productKey);
    const detailStyles = {height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center'};
    return (
        <div style={detailStyles}>
            <Sidebar></Sidebar>
            <div style={{width: '80%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <Product 
                    handleAddToCart={handleAddToCart} 
                    showDetail={false} 
                    key={productKey} 
                    product={product}>
                </Product>
            </div>
        </div>
    );
};

export default Details;