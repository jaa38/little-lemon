import React from 'react';
import restaurantfood from '../assets/restaurantfood.png'


function Main() {
  return (
    <main className='main'>
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
            <img scr={restaurantfood} alt="restaurant food"/>
        </section>
      </section>
      <section className='highlights'></section>
      <section className='testimonials'></section>
      <section className='about'></section>
    </main>
  );
}

export default Main;
