import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillFacebook , AiFillTwitterCircle , AiFillInstagram} from 'react-icons/ai';
import logo from '../assets/Logo .svg';

function Footer() {
  return (
    <footer className='footer'>
      <section className='footer-image'>
        <img src={logo} alt='footer logo' />
      </section>
      <section className='footer-information'>
        <h4>Doormat Navigation</h4>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/menu'>Menu</Link>
          </li>
          <li>
            <Link to='/booking'>Reservations</Link>
          </li>
          <li>
            <Link to='/order-online'>Order Online</Link>
          </li>
          <li>
            <Link to='/login'>Login</Link>
          </li>
        </ul>
      </section>
      <section className='footer-contact'>
        <h4>Contact</h4>
        <address>
          123 Chicago Street <br />
          Chicago, IL
        </address>
      </section>
      <section className='footer-social'>
        <h4>Social Media</h4>
        <AiFillFacebook />
        <AiFillTwitterCircle />
        <AiFillInstagram /> 
      </section>
    </footer>
  );
}

export default Footer;
