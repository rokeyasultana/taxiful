import React, { useState } from 'react';
import './BookingFrom.css'
import ConfirmationMessage from '../../ConfirmationMessage/ConfirmationMessage';
const BookingForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [pickupTime, setPickupTime] = useState("");
  const [passenger, setPassenger] = useState("");
  const [pickupLocation, setPickupLocation] = useState("");
  const [dropoffLocation, setDropoffLocation] = useState("");
  const [additionalRequirements, setAdditionalRequirements] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setShowConfirmation(true);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleNumberChange = (e) => {
    setNumber(e.target.value);
  };

  const handlePickupDateChange = (e) => {
    setPickupDate(e.target.value);
  };

  const handlePickupTimeChange = (e) => {
    setPickupTime(e.target.value);
  };

  const handlePickupLocationChange = (e) => {
    setPickupLocation(e.target.value);
  };

  const handleDropoffLocationChange = (e) => {
    setDropoffLocation(e.target.value);
  };
  const handlePassengerChange = (e) => {
    setPassenger(e.target.value);
  };

  const handleAdditionalRequirementsChange = (e) => {
    setAdditionalRequirements(e.target.value);
  };

  const handleConfirmationClose = () => {
    setShowConfirmation(false);
  };

  const handleFormReset = () => {
    setName("");
    setEmail("");
    setNumber("");
    setPickupDate("");
    setPickupTime("");
    setPickupLocation("");
    setPassenger("");
    setDropoffLocation("");
    setAdditionalRequirements("");
  };

    return (
      <div className='form'>
        
        <div className="inquiry-form-container">
      {!showConfirmation ? (
        <form onSubmit={handleFormSubmit}>
          <h2 className='book'>Book a Taxi</h2>
        {/* div 1 */}
      <div className='line1'> 


      <div>
        <label htmlFor="name-input">Name</label>
          <input
            type="text"
            id="name-input"
            value={name}
            onChange={handleNameChange}
            required
          />

        </div>

        <div>
        <label htmlFor="email-input">Email</label>
          <input
            type="email"
            id="email-input"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div>
        <label htmlFor="email-input">Phone</label>
          <input
            type="text"
            id="number-input"
            value={number}
            onChange={handleNumberChange}
            required
          />
        </div>

      
      </div>
      <div>
      </div>
{/* 2 */}
<div className='line2'>
<div>

<label htmlFor="pickup-date-input">Pickup Date</label>
  <input
    type="date"
    id="pickup-date-input"
    value={pickupDate}
    onChange={handlePickupDateChange}
    required
  />

</div>

<div>
<label htmlFor="pickup-time-input">Pickup Time</label>
  <input
    type="time"
    id="pickup-time-input"
    value={pickupTime}
    onChange={handlePickupTimeChange}
    required
  />
</div>
<div>
<label htmlFor="pickup-location-input">Pickup Location</label>
          <input
            type="text"
            id="pickup-location-input"
            value={pickupLocation}
            onChange={handlePickupLocationChange}
            required
          />
</div>
</div>

        {/* 3 */}
<div className='line3'>

<div>
<label for="passenger">Passenger:</label>
		<input type="text" id="passenger" name="passenger" placeholder="Enter passenger number" 
    value={passenger}
    onChange={handlePassengerChange}
    required/>
</div>
		     
<div>
<label htmlFor="dropoff-location-input">Drop-off Location</label>
          <input
            type="text"
            id="dropoff-location-input"
            value={dropoffLocation}
            onChange={handleDropoffLocationChange}
            required
          />

</div>
</div>
         
<div className='additional'>
<label htmlFor="additional-requirements-input">
            Additional Requirements
          </label>
          <textarea
            id="additional-requirements-input"
            value={additionalRequirements}
            onChange={handleAdditionalRequirementsChange}
            />
</div>
         
      
             <div className="form-buttons">
        <button type="submit">BOOK NOW</button>
        <button type="button" onClick={handleFormReset}>
       CANCEL
        </button>
      </div>
    </form>
  ) : (
    <div className="confirmation-container">
      <h2>Thank you for your inquiry!</h2>
      <p>
        Your pickup details are as follows:
        <br />
        <strong>Name:</strong> {name}
        <br />
        <strong>Email:</strong> {email}
        <br />
        <strong>Phone Number:</strong> {number}
        <br />
        <strong>Pickup Date:</strong> {pickupDate}
        <br />
        <strong>Pickup Time:</strong> {pickupTime}
        <br />
        <strong>Pickup Location:</strong> {pickupLocation}
        <br />
        <strong>Passenger:</strong> {passenger}
        <br />
        <strong>Drop-off Location:</strong> {dropoffLocation}
        <br />
        <strong>Additional Requirements:</strong>{" "}
        {additionalRequirements || "None"}
      </p>
      <button type="button" onClick={handleConfirmationClose}>
        Close
      </button>
    </div>
  )}
</div>
    </div>
    );
};

export default BookingForm;