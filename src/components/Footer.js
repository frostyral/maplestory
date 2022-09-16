import React from 'react';
import '../styles/Footer.sass';
import logo from '../media/nexon_logo.png';

function Footer() {
  //const classes = styles()
  return (
    <footer class="">
      <div>
        <ul>
          <li>
            <a href="">Your Account</a>
          </li>
          <b class="before-item"></b>
          <li>
            <a href="">Get Support</a>
          </li>
          <b class="before-item"></b>
          <li>
            <a href="">About Nexon</a>
          </li>
          <b class="before-item"></b>
          <li>
            <a href="">Privacy Policy</a>
          </li>
        </ul>

        <ul>
          <img href="" class="logo" src={logo} alt="Logo" />
          <a>© 2022 Talandral Inc. All Rights Reserved</a>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
