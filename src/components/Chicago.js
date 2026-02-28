import React from 'react';
import thechefs from '../assets/thechefs.png';

function Chicago() {
  return (
    <section className='about'>
      <section className='about-information'>
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          Little Lemon is a family-owned Mediterranean restaurant located in the
          heart of Chicago. Inspired by traditional recipes passed down through
          generations, we combine authentic flavours with a modern culinary
          twist. Our menu is crafted using fresh, seasonal ingredients t create
          dishes that are both vibrant and comforting. Whether you're joining us
          for a casual lunch, a special dinner, or a celebration with friends,
          our goal is to provide warm hospitality and an unforgettable dining
          experience.
        </p>
      </section>
      <section className='about-image'>
        <img src={thechefs} alt='the chefs' />
      </section>
    </section>
  );
}

export default Chicago;
