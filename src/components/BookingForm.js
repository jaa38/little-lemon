import { useState } from 'react';

function BookingForm({ availableTimes, dispatch, submitForm }) {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('17:00');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('Birthday');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isFormValid) return;
    const formData = {
      date,
      time,
      guests,
      occasion,
    };

    submitForm(formData);
  };

  const isFormValid = date && time && guests >= 1 && guests <= 10 && occasion;

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
            required
            min={new Date().toISOString().split('T')[0]}
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
            required
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
            aria-describedby='guests-hint'
            required
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
          />
          <p id='guests-hint'>Minimum 1, maximum 10 guests</p>
        </div>

        {/* Occasion Field */}
        <div className='form-group'>
          <label htmlFor='occasion'>Occasion</label>
          <select
            id='occasion'
            value={occasion}
            required
            onChange={(e) => setOccasion(e.target.value)}
          >
            <option>Birthday</option>
            <option>Anniversary</option>
          </select>
        </div>

        {/* Submit Button */}
        <div className='form-group'>
          <button
            className='booking-button'
            disabled={!isFormValid}
            type='submit'
          >
            Make Your Reservation
          </button>
        </div>
      </fieldset>
    </form>
  );
}

export default BookingForm;
