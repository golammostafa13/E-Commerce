import React from 'react';
import { products } from '../../asset/index';
import Product from '../Product/Product';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const Mainpage = ({handleAddToCart}) => {
    const sampleProducts = products.slice(0, 6);
    const mainPageStyles = {
      overflowY: 'auto',
      overflowX: 'hidden',
    };
    return (
        <div style={mainPageStyles}>
            <Grid container spacing={3}>
                {sampleProducts.map((product) => <Product handleAddToCart={handleAddToCart} showDetail={true} key={product.pdKey} product={product}></Product>)}
            </Grid>
        </div>
    );
};

export default Mainpage;