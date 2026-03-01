import { useState } from 'react';

function BookingForm({ availableTimes, dispatch }) {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('17:00');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('Birthday');

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({
      date,
      time,
      guests,
      occasion,
    });
  };

  return (
    <form className='booking-form' onSubmit={handleSubmit}>
      <fieldset>
        <legend>Reserve a Table</legend>

        {/* Date Field */}
        <div className='form-group'>
          <label htmlFor='res-date'>Choose date</label>
          <input
            type='date'
            id='res-date'
            value={date}
            onChange={(e) => {
              setDate(e.target.value);
              dispatch(e.target.value);
            }}
          />
        </div>

        {/* Time Field */}
        <div className='form-group'>
          <label htmlFor='res-time'>Choose time</label>
          <select
            id='res-time'
            value={time}
            onChange={(e) => setTime(e.target.value)}
          >
            {availableTimes.map((t, index) => (
              <option key={index}>{t}</option>
            ))}
          </select>
        </div>

        {/* Guests Field */}
        <div className='form-group'>
          <label htmlFor='guests'>Number of guests</label>
          <input
            type='number'
            id='guests'
            min='1'
            max='10'
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
          />
        </div>

        {/* Occasion Field */}
        <div className='form-group'>
          <label htmlFor='occasion'>Occasion</label>
          <select
            id='occasion'
            value={occasion}
            onChange={(e) => setOccasion(e.target.value)}
          >
            <option>Birthday</option>
            <option>Anniversary</option>
          </select>
        </div>

        {/* Submit Button */}
        <div className='form-group'>
          <button type='submit'>Make Your Reservation</button>
        </div>
      </fieldset>
    </form>
  );
}

export default BookingForm;
