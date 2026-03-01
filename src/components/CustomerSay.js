import React from 'react';
import avatar from '../assets/avatar.svg';

function CustomerSay() {
  const testimonials = [
    {
      name: 'Sarah M.',
      review:
        'The Greek salad was incredibly fresh and full of flavor. Definitely coming back!',
    },
    {
      name: 'Daniel K.',
      review:
        'Amazing atmosphere and the bruschetta was perfect. Service was quick and friendly.',
    },
    {
      name: 'Priya R.',
      review:
        'Loved the modern twist on classic Mediterranean dishes. Highly recommend!',
    },
    {
      name: 'Michael T.',
      review:
        'Booked a table online and everything was smooth. Food and staff were fantastic.',
    },
  ];

  return (
    <section className='testimonials'>
      <h2>Testimonials</h2>

      <section className='testimonial-cards'>
        {testimonials.map((person, index) => (
          <article className='testimonial-card' key={index}>
            <section className='testimonial-information'>
              <img
                className='avatar'
                src={avatar}
                alt={`${person.name} avatar`}
              />

              <section className='testimonial-content'>
                <p>{person.name}</p>
                <p>★★★★★</p>
              </section>
            </section>

            <section className='testimonial-review'>
              <p>"{person.review}"</p>
            </section>
          </article>
        ))}
      </section>
    </section>
  );
}

export default CustomerSay;
