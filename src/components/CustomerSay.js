import React from 'react'
import avatar from '../assets/avatar.svg';

function CustomerSay() {
  return (
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
  )
}

export default CustomerSay
