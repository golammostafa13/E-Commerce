import React from 'react';
import Sidebar from '../Sidebar/Sidebar';

const Review = () => {
    const reviewStyle = {height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center'};
    return (
        <div style={reviewStyle}>
            <Sidebar></Sidebar>
            <div style={{width: '80%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}><h1>Comming Soon</h1></div>
        </div>
    );
};

export default Review;