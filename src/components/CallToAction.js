import React from 'react';
import restauranfood from '../assets/restauranfood.png';

function CallToAction() {
  return (
    <section className='hero' aria-labelledby='hero-heading'>
      <section className='hero-text'>
        <h1 id='hero-heading'>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>
        <button aria-label='On Click - Reserve a Table'>Reserve a Table</button>
      </section>
      <section className='hero-img'>
        <img src={restauranfood} alt='restaurant food' />
      </section>
    </section>
  );
}

export default CallToAction;
