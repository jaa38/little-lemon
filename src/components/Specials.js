import React from 'react';
import greeksalad1 from '../assets/greeksalad1.png';
import restraurantchef from '../assets/restaurantchef.png';
import lemondessert2 from '../assets/lemondessert2.png';
import ordericon from '../icons/orderIcon.svg';

function Specials() {
  const specials = [
    {
      title: 'Greek Salad',
      price: '$12.99',
      description:
        'The famous greek salad of crispy lettuce, peppers, olives, and our Chicagp style feta cheese, garnished with crunchy garlic and rosemary croutons.',
      image: greeksalad1,
    },
    {
      title: 'Bruchetta',
      price: '$12.99',
      description:
        'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
      image: restraurantchef,
    },
    {
      title: 'Lemon Dessert',
      price: '$12.99',
      description:
        'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is authentic as can be imagined.',
      image: lemondessert2,
    },
  ];

  return (
    <section className='highlights'>
      <section className='highlights-part1'>
        <h2>This weeks specials!</h2>
        <button>Online Menu</button>
      </section>

      <section className='highlights-part2'>
        {specials.map((item, index) => (
          <article className='card' key={index}>
            <section className='image-section'>
              <img src={item.image} alt={item.title} />
            </section>

            <section className='item-price'>
              <h3>{item.title}</h3>
              <p>{item.price}</p>
            </section>

            <section className='information-section'>
              <section className='card-content'>
                <p>{item.description}</p>
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
        ))}
      </section>
    </section>
  );
}

export default Specials;
