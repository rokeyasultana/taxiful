import React, { useState } from 'react';
import './BookingFrom.css'
import ConfirmationMessage from '../../ConfirmationMessage/ConfirmationMessage';
const BookingForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [pickupTime, setPickupTime] = useState("");
  const [pickupLocation, setPickupLocation] = useState("");
  const [dropoffLocation, setDropoffLocation] = useState("");
  const [additionalRequirements, setAdditionalRequirements] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // add form validation logic here
    setShowConfirmation(true);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
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

  const handleAdditionalRequirementsChange = (e) => {
    setAdditionalRequirements(e.target.value);
  };

  const handleConfirmationClose = () => {
    setShowConfirmation(false);
  };

  const handleFormReset = () => {
    setName("");
    setEmail("");
    setPickupDate("");
    setPickupTime("");
    setPickupLocation("");
    setDropoffLocation("");
    setAdditionalRequirements("");
  };

    return (
      <div className='form'>
        <h2 className='book'>Book a Taxi</h2>
        <div className="inquiry-form-container">
      {!showConfirmation ? (
        <form onSubmit={handleFormSubmit}>
          <h2>Book a Ride</h2>
          <label htmlFor="name-input">Name</label>
          <input
            type="text"
            id="name-input"
            value={name}
            onChange={handleNameChange}
            required
          />

          <label htmlFor="email-input">Email</label>
          <input
            type="email"
            id="email-input"
            value={email}
            onChange={handleEmailChange}
            required
          />

          <label htmlFor="pickup-date-input">Pickup Date</label>
          <input
            type="date"
            id="pickup-date-input"
            value={pickupDate}
            onChange={handlePickupDateChange}
            required
          />

          <label htmlFor="pickup-time-input">Pickup Time</label>
          <input
            type="time"
            id="pickup-time-input"
            value={pickupTime}
            onChange={handlePickupTimeChange}
            required
          />

          <label htmlFor="pickup-location-input">Pickup Location</label>
          <input
            type="text"
            id="pickup-location-input"
            value={pickupLocation}
            onChange={handlePickupLocationChange}
            required
          />

          <label htmlFor="dropoff-location-input">Drop-off Location</label>
          <input
            type="text"
            id="dropoff-location-input"
            value={dropoffLocation}
            onChange={handleDropoffLocationChange}
            required
          />

          <label htmlFor="additional-requirements-input">
            Additional Requirements
          </label>
          <textarea
            id="additional-requirements-input"
            value={additionalRequirements}
            onChange={handleAdditionalRequirementsChange}
            />
             <div className="form-buttons">
        <button type="submit">Submit</button>
        <button type="button" onClick={handleFormReset}>
          Reset
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
        <strong>Pickup Date:</strong> {pickupDate}
        <br />
        <strong>Pickup Time:</strong> {pickupTime}
        <br />
        <strong>Pickup Location:</strong> {pickupLocation}
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