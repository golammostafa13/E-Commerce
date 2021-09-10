import React from 'react';
import Product from '../Product/Product';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Sidebar from '../Sidebar/Sidebar';

const Products = ({handleAddToCart, products, cartHandle, handlePlus, handleMinus, handleRemoveProduct}) => {
    let productsStyles;
    cartHandle ? productsStyles = {flexGrow: '1', overflowY: 'auto', overflowX: 'hidden', maxHeight: '100vh'} : productsStyles = {flexGrow: '1', overflow: 'none', };
    return (
        <div style={productsStyles}>
          <Grid container spacing={3}>
              {products.map((product) => 
              <Product 
                cartHandle={cartHandle} 
                handleAddToCart={handleAddToCart}
                showDetail={true} 
                key={product.pdKey} 
                product={product}
                handleMinus={handleMinus}
                handlePlus={handlePlus}
                handleRemoveProduct={handleRemoveProduct}>
              </Product>)}
          </Grid>
        </div>
    );
};

export default Products;