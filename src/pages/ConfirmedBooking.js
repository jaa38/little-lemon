import React from 'react';

function ConfirmedBooking() {
  return (
    <section className='confirmed-booking' role='status' aria-live='polite'>
      <h1>Booking Confirmed</h1>
      <p>Your reservation has been successfully submitted</p>
    </section>
  );
}

export default ConfirmedBooking;
