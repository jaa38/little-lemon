import React from 'react'
import greeksalad1 from '../assets/greeksalad1.png';
import restraurantchef from '../assets/restaurantchef.png';
import lemondessert2 from '../assets/lemondessert2.png';
import ordericon from '../icons/orderIcon.svg';

function Specials() {
  return (
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
                  <a href='#'>Order Online</a>
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
  )
}

export default Specials
