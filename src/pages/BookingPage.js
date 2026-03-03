import React from 'react';
import BookingForm from '../components/BookingForm';

function BookingPage({ availableTimes, dispatch, submitForm, bookings }) {

  return (
    <section className='booking-page'>
      <h1>Booking Page</h1>
      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
        submitForm={submitForm}
      />

      <h2>Existing Reservations</h2>
      <table className='booking-table'>
        <thead>
          <tr>
            <th>Date</th>
            <th>Time</th>
            <th>Guests</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking, index) => (
            <tr key={index}>
              <td>{booking.date}</td>
              <td>{booking.time}</td>
              <td>{booking.guests}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default BookingPage;
