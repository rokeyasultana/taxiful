import React from 'react';
import './ChooseUs.css';

const ChooseUs = () => {
    return (
        <div className='choose'>
           <h2><strong  className='us'>WHY CHOOSE US</strong></h2> 

<p className='service'>When you’re looking for a good, reliable taxi service in Greater Perth, there are plenty of good reasons to choose us. We’ll highlight a few of those reasons below, but for the full list of benefits of using our services, go to Why choose Maxi Taxi Perth.</p>
<div>

<p className='choosePoint'>• No call-out fee: At Maxi Taxi Perth, we don’t charge a call-out fee (save $1.50) • Meter or fixed fare: Choose meter fare or opt for a set price to avoid surprises • Standard taxi rates:We provide premium services at standard taxi rates (normal tariffs) • Direct communication: Speak directly to the taxi driver, not just some phone operator •Arrival alerts: Get a text message when we’re 10 minutes away (free service) • Online taxi fare calculator: Estimate your taxi fare with our online calculator • Group transfers: Efficient transfers of large groups is one of our specialties</p>
</div>


<div className='call-out'>
     <div className='border'>
        <img src="https://www.maxitaxiperth.com.au/assets/uploads/why_choose_us/008716200_1520317683.png" alt="" />
        <p>No call-out fee</p>
    </div>
    <div className='border'>
        <img src="https://www.maxitaxiperth.com.au/assets/uploads/why_choose_us/021310300_1520317696.png" alt="" />
        <p>Meter or fixed fare</p>
    </div>
    <div className='border'>
        <img src="https://www.maxitaxiperth.com.au/assets/uploads/why_choose_us/055742200_1520317717.png" alt="" />
        <p>Book Online</p>
    </div>
    <div className='border'>
        <img src="https://www.maxitaxiperth.com.au/assets/uploads/why_choose_us/069760800_1520317727.png" alt="" />
        <p>Standard taxi rates

</p>
        
    </div>
    <div className='border'>
        <img src="https://www.maxitaxiperth.com.au/assets/uploads/why_choose_us/089772400_1520317740.png" alt="" />
        <p>Online taxi fare </p>
    </div>
 
</div>
        </div>
    );
};

export default ChooseUs;