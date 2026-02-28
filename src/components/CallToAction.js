import React from 'react';
import restauranfood from '../assets/restauranfood.png';

function CallToAction() {
  return (
    <section className='hero'>
      <section className='hero-text'>
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>
        <button>Reserve a Table</button>
      </section>
      <section className='hero-img'>
        <img src={restauranfood} alt='restaurant food' />
      </section>
    </section>
  );
}

export default CallToAction;
