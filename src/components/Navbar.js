import React from 'react';
import '../styles/NavBar.sass';
import logo from '../media/logo.png';

function NavBar() {
  return (
    <nav class="navbar">
      <ul>
        <img href="" class="logo" src={logo} alt="Logo" />
        <li>
          <a href="http://localhost:3000">News</a>
        </li>
        <li>
          <a href="http://localhost:3000">The Game</a>
        </li>
        <li>
          <a href="http://localhost:3000">Community</a>
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
