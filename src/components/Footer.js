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
            <a href="https://www.nexon.com/account/setting/">
              Your Account
            </a>
          </li>
          <b class="before-item"></b>
          <li>
            <a href="https://support.nexon.net/">Get Support</a>
          </li>
          <b class="before-item"></b>
          <li>
            <a href="https://www.nexon.net/corporate/about-nexon/">
              About Nexon
            </a>
          </li>
          <b class="before-item"></b>
          <li>
            <a href="https://www.nexon.com/main/legal/privacy/">
              Privacy Policy
            </a>
          </li>
        </ul>

        <ul>
          <img
            href="http://localhost:3000"
            class="logo"
            src={logo}
            alt="Logo"
          />
          <a>© 2022 Talandral Inc. All Rights Reserved</a>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
