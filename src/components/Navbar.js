import React from 'react';
import '../styles/NavBar.sass';
import logo from '../media/logo.png';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav class="navbar">
      <ul>
        <Link>
          <img
            href="http://localhost:3000"
            class="logo"
            src={logo}
            alt="Logo"
          />
        </Link>
        <li>
          <Link to="/maps">
            <a>Maple World</a>
          </Link>
        </li>
        <li>
          <a href="http://localhost:3000">News</a>
        </li>
        <li>
          <Link to="/login">
            <a>Account</a>
          </Link>
        </li>
        <li>
          <a href="http://localhost:3000">Support</a>
        </li>
        <li>
          <a href="http://localhost:3000">Buy Merch</a>
        </li>

        <social>
          <socialbuttons>
            <a href="https://www.facebook.com/maplestory">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com/maplestory">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="https://www.youtube.com/user/MapleStory">
              <i class="fab fa-youtube"></i>
            </a>
            <a href="https://www.instagram.com/maplestory/">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="https://discord.gg/maplestory">
              <i class="fab fa-discord"></i>
            </a>
            <a href="https://www.twitch.tv/maplestory">
              <i class="fab fa-twitch"></i>
            </a>
            <a href="https://www.tiktok.com/@maplestory">
              <i class="fab fa-tiktok"></i>
            </a>
          </socialbuttons>
        </social>

        <button href="">PLAY FREE NOW</button>
      </ul>
    </nav>
  );
}

export default NavBar;
