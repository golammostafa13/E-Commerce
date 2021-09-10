import React from 'react';
import { Link } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import HomeIcon from '@material-ui/icons/Home';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import ComputerIcon from '@material-ui/icons/Computer';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column', 
    justifyContent: 'center',
    backgroundColor: '#f1f1f1',
  },
});

const Sidebar = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const sideBarStyles = {
            width: '20vw',
            height: '100vh',
            display: 'flex', 
            backgroundColor: '#f1f1f1',
            justifyContent: 'center',
            alignItems: 'center',
        }
    return (
        <div style={sideBarStyles} >
            <Tabs
            value={value}
            onChange={handleChange}
            variant="fullWidth"
            textColor="secondary"
            aria-label="vertical tabs example"
            orientation="vertical"
            variant="scrollable"
            >
                <Tab component={Link} to="/" label="Sample Products" icon={<HomeIcon />} />
                <Tab component={Link} to="/products" label="All Products" icon={<ComputerIcon />} />
                <Tab component={Link} to="/cart" label="Your Cart" icon={<AddShoppingCartIcon />} />
                <Tab component={Link} to="/review" label="Order Review" icon={<LocalMallIcon />} />
            </Tabs>
        </div>
    );
};

export default Sidebar;