import React from 'react';
import BookingForm from '../BookingForm/BookingForm';
import Navbar from '../Navbar/Navbar';
import Banner from '../Banner/Banner';
import ChooseUs from '../ChooseUs/ChooseUs';
import Footer from '../Footer/Footer';


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
           <BookingForm></BookingForm> 
            <ChooseUs></ChooseUs>
            <Footer></Footer>

        </div>
    );
};

export default Home;