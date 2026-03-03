import { useReducer, useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import BookingPage from '../pages/BookingPage';
import { fetchAPI } from '../api';

import ConfirmedBooking from '../pages/ConfirmedBooking';
import { useNavigate } from 'react-router-dom';
import { submitAPI } from '../api';

export function initializeTimes() {
  const today = new Date();
  return fetchAPI(today);
}

export function updateTimes(state, action) {
  const selectedDate = new Date(action);
  return fetchAPI(selectedDate);
}

function Main() {
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [],
    initializeTimes,
  );

  const navigate = useNavigate();

  const submitForm = (formData) => {
    const success = submitAPI(formData);

    if (success) {
      setBookings((prev) => [...prev, formData]);
      navigate('/confirmed');
    }
  };

  const [bookings, setBookings] = useState(() => {
    const saved = localStorage.getItem('bookings');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('bookings', JSON.stringify(bookings));
  }, [bookings]);

  return (
    <main>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route
          path='/booking'
          element={
            <BookingPage
              availableTimes={availableTimes}
              dispatch={dispatch}
              submitForm={submitForm}
              bookings={bookings}
            />
          }
        />
        <Route path='/confirmed' element={<ConfirmedBooking />} />
      </Routes>
    </main>
  );
}

export default Main;
