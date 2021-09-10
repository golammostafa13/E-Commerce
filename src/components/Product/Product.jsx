import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import ButtonBase from '@material-ui/core/ButtonBase';
import {Typography, Button} from '@material-ui/core';
import Details from '../Details/Details';
import {Link} from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(3),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  image: {
    width: 256,
    height: 256,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));
const Product = (props) => {
    const {product, showDetail, handleAddToCart, cartHandle, handlePlus, handleMinus, handleRemoveProduct} = props;
    const classes = useStyles();
    return (
        <Grid item lg={6} xs={12}>
            <Paper className={classes.paper}>
                <Link to={'/details/'+product.pdKey} style={{textDecoration: 'none'}}>
                  <ButtonBase className={classes.image}>
                      <img className={classes.img} alt="complex" src={product.image} />
                  </ButtonBase>
                </Link>
                <Typography>{product.name}</Typography>
                {
                    !showDetail && 
                    <Typography>Quantity: {product.quantity}</Typography>
                }
                {
                    !showDetail &&
                    <Typography variant="contained">{product.description}</Typography>
                }
                <Typography color="primary">Price: {product.price}</Typography>
                <div style={{margin: '5px'}}>
                    {
                        !cartHandle && showDetail && 
                        <Link to={"/details/"+product.pdKey} style={{ textDecoration: 'none'}}>
                            <Button style={{margin: '5px'}} variant="contained" color="Secondary" details> Details</Button>
                        </Link>
                    }
                    {
                        !cartHandle && <Button 
                          style={{margin: '3px'}} 
                          variant="contained" 
                          color="primary" 
                          onClick={() => handleAddToCart(product.pdKey)}> 
                          Add To Cart
                          </Button>
                    }
                    {
                        cartHandle && <Button style={{margin: '3px'}} variant="contained" color="primary" onClick={() => handleMinus(product.pdKey)}> - </Button>
                    }
                    {
                        cartHandle && <Button style={{margin: '3px'}} variant="contained" color="danger">{product.count}</Button>
                    }
                    {
                        cartHandle && <Button style={{margin: '3px'}} variant="contained" color="primary" addToCart onClick={() => handlePlus(product.pdKey)}> + </Button>
                    }
                    {
                        cartHandle && 
                        <div>
                          <Button 
                            onClick={()=>handleRemoveProduct(product.pdKey)}
                            style={{margin: '3px'}} 
                            variant="contained" 
                            color="secondary">
                            Remove From Cart
                          </Button>
                        </div>
                    }
                </div>
            </Paper>
        </Grid>
    );
};

export default Product;