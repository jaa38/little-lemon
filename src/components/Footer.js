import React from 'react';

function Footer() {
  return (
    <footer>
      <p>© 2026 Little Lemon</p>

      <ul>
        <li>
          <a href='/'>Home</a>
        </li>
        <li>
          <a href='/menu'>Menu</a>
        </li>
        <li>
          <a href='/reservations'>Reservations</a>
        </li>
      </ul>

      <address>
        123 Chicago Street <br />
        Chicago, IL
      </address>
    </footer>
  );
}

export default Footer;
