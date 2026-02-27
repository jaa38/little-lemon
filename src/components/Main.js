import React from 'react';
import restauranfood from '../assets/restauranfood.png';
import greeksalad1 from '../assets/greeksalad1.png';
import restraurantchef from '../assets/restaurantchef.png';
import lemondessert2 from '../assets/lemondessert2.png';
import ordericon from '../icons/orderIcon.svg'

function Main() {
  return (
    <main className='main'>
      <section className='hero'>
        <section className='hero-text'>
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <button>Reserve a Table</button>
        </section>
        <section className='hero-img'>
          <img src={restauranfood} alt='restaurant food' />
        </section>
      </section>
      <section className='highlights'>
        <section className='highlights-part1'>
          <h2>This weeks specials!</h2>
          <button>Online Menu</button>
        </section>
        <section className='highlights-part2'>
          <article className='card'>
            <section className='image-section'>
              <img src={greeksalad1} alt='' />
            </section>
            <section className='item-price'>
              <h3>Greek Salad</h3>
              <p>$12.99</p>
            </section>
            <section className='information-section'>
              <section className='card-content'>
                <p>
                  The famous greek salad of crispy lettuce, peppers, olives and
                  our Chicago style feta cheese, garnished with crunchy garlic
                  and rosemary croutons.{' '}
                </p>
              </section>
              <section className='order-online'>
                <nav>
                  <a>Order Online</a>
                  <img className='order-icon' src={ordericon} alt='Order Icon' />
                </nav>
              </section>
            </section>
          </article>

          <article className='card'>
            <section className='image-section'>
              <img src={restraurantchef} alt='greek salad' />
            </section>
            <section className='item-price'>
              <h3>Bruchetta</h3>
              <p>$12.99</p>
            </section>
            <section className='information-section'>
              <section className='card-content'>
                <p>
                  Our Bruschetta is made from grilled bread that has been
                  smeared with garlic and seasoned with salt and olive oil.{' '}
                </p>
              </section>
              <section className='order-online'>
                <nav>
                  <a>Order Online</a>
                    <img className='order-icon' src={ordericon} alt='Order Icon' />
                </nav>
              </section>
            </section>
          </article>

          <article className='card'>
            <section className='image-section'>
              <img src={lemondessert2} alt='' />
            </section>
            <section className='item-price'>
              <h3>Lemon Dessert</h3>
              <p>$12.99</p>
            </section>
            <section className='information-section'>
              <section className='card-content'>
                <p>
                  This comes straight from grandma’s recipe book, every last
                  ingredient has been sourced and is as authentic as can be
                  imagined.{' '}
                </p>
              </section>
              <section className='order-online'>
                <nav>
                  <a>Order Online</a>
                <img className='order-icon' src={ordericon} alt='Order Icon' />

                </nav>
              </section>
            </section>
          </article>
        </section>
      </section>
      <section className='testimonials'></section>
      <section className='about'></section>
    </main>
  );
}

export default Main;
