import React from 'react';
import restauranfood from '../assets/restauranfood.png';
import greeksalad1 from '../assets/greeksalad1.png';
import restraurantchef from '../assets/restaurantchef.png';
import lemondessert2 from '../assets/lemondessert2.png';
import ordericon from '../icons/orderIcon.svg';
import avatar from '../assets/avatar.svg';
import thechefs from '../assets/thechefs.png';

import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import BookingPage from '../pages/BookingPage';

function Main() {
  return (
    <main className='main'>

      {/* Here Section */}
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

      {/* Highlights Section */}
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
                  <img
                    className='order-icon'
                    src={ordericon}
                    alt='Order Icon'
                  />
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
                  <img
                    className='order-icon'
                    src={ordericon}
                    alt='Order Icon'
                  />
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
                  <img
                    className='order-icon'
                    src={ordericon}
                    alt='Order Icon'
                  />
                </nav>
              </section>
            </section>
          </article>
        </section>
      </section>

      {/* Testimonials Section */}
      <section className='testimonials'>
        <h2>Testimonials</h2>

        <section className='testimonial-cards'>
          <article className='testimonial-card'>
            <section className='testimonial-information'>
              <img className='avatar' src={avatar} alt='avatar' />
              <section className='testimonial-content'>
                <p>John Williams</p>
                <p>5 stars</p>
              </section>
            </section>
            <section className='testimonial-review'>
              <p>
                "The Greek salad was incredibly fresh and full of favour.
                Definitely coming back!"
              </p>
            </section>
          </article>

          <article className='testimonial-card'>
            <section className='testimonial-information'>
              <img className='avatar' src={avatar} alt='avatar' />
              <section className='testimonial-content'>
                <p>John Williams</p>
                <p>5 stars</p>
              </section>
            </section>
            <section className='testimonial-review'>
              <p>
                "Amazing atmosphere and the bruschetta was perfect. Service was
                quick and friendly."
              </p>
            </section>
          </article>

          <article className='testimonial-card'>
            <section className='testimonial-information'>
              <img className='avatar' src={avatar} alt='avatar' />
              <section className='testimonial-content'>
                <p>John Williams</p>
                <p>5 stars</p>
              </section>
            </section>
            <section className='testimonial-review'>
              <p>
                "Loved the modern twist on classic Mediterranean dishes. Highly
                recommended!"
              </p>
            </section>
          </article>

          <article className='testimonial-card'>
            <section className='testimonial-information'>
              <img className='avatar' src={avatar} alt='avatar' />
              <section className='testimonial-content'>
                <p>John Williams</p>
                <p>5 stars</p>
              </section>
            </section>
            <section className='testimonial-review'>
              <p>
                "Booked a table online and everything was smooth. Food and staff
                were fantastic"
              </p>
            </section>
          </article>
        </section>
      </section>

      {/* About Section */}
      <section className='about'>
        <section className='about-information'>
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>Little Lemon is a family-owned Mediterranean restaurant located in the heart of Chicago. Inspired by traditional recipes passed down through generations, we combine authentic flavours with a modern culinary twist. Our menu is crafted using fresh, seasonal ingredients t create dishes that are both vibrant and comforting. Whether you're joining us for a casual lunch, a special dinner, or a celebration with friends, our goal is to provide warm hospitality and an unforgettable dining experience.</p>
        </section>
        <section className='about-image'>
          <img src={thechefs} alt='the chefs'/>
        </section>
      </section>

    </main>
  );
}

export default Main;
