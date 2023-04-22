import React, { useEffect } from 'react';
import BookingForm from '../BookingForm/BookingForm';
import Navbar from '../Navbar/Navbar';
import Banner from '../Banner/Banner';
import ChooseUs from '../ChooseUs/ChooseUs';
import Footer from '../Footer/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
    
//aos
    useEffect(() => {
        AOS.init();
      }, [])

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