import React from 'react';

function ConfirmationMessage(props) {
  return (
    <div className='modal'>
      <p>Thank you for your Booking!</p>
      <p>Pickup Location: {props.pickupLocation}</p>
      <p>Drop-off Location: {props.dropoffLocation}</p>
      <p>Date: {props.date}</p>
      <p>Time: {props.time}</p>
      {props.additionalRequirements && <p>Additional Requirements: {props.additionalRequirements}</p>}
    </div>
  );
}

export default ConfirmationMessage;