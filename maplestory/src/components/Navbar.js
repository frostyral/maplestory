import React from 'react'
import '../styles/NavBar.sass';
import logo from "../media/logo.png"

function NavBar() {
   
    return (
        <nav class="navbar sticky-top bg-dark">
            
                 <ul>
                    <img href="" class="logo" src={logo} alt="Logo"/>
                    
                    <li><a href="">News</a></li>
                    <li><a href="">The Game</a></li>
                    <li><a href="">Community</a></li>
                    <li><a href="">Support</a></li>
                    <li><a href="">Buy Merch</a></li>

                    <social>
                    <a href="https://www.facebook.com/maplestory"><i class="fab fa-facebook-f"></i></a>
                    <a href="https://twitter.com/maplestory"><i class="fab fa-twitter"></i></a>
                    <a href="https://www.youtube.com/user/MapleStory"><i class="fab fa-youtube"></i></a>
                    <a href="https://www.instagram.com/maplestory/"><i class="fab fa-instagram"></i></a>
                    <a href="https://discord.gg/maplestory"><i class="fab fa-discord"></i></a>
                    <a href="https://www.twitch.tv/maplestory"><i class="fab fa-twitch"></i></a>
                    <a href="https://www.tiktok.com/@maplestory"><i class="fab fa-tiktok"></i></a>
                    </social>

                    <button href="">PLAY FREE NOW</button> 
                </ul>
  </nav>
    )
}

export default NavBar
