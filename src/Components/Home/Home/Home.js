import React from 'react';
import BookingForm from '../BookingForm/BookingForm';
import Navbar from '../Navbar/Navbar';
import Banner from '../Banner/Banner';


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
           <BookingForm></BookingForm> 


        </div>
    );
};

export default Home;