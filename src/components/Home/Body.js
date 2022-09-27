import React from 'react';
import '../../styles/Home.sass';
import News from './News';
function Body(props) {
  return (
    <body>
      <div class="header-home">
        <div class="header"></div>
      </div>
      <div class="News">
        <button
          href="https://maplestory.nexon.net/"
          class="slideshow-button"
        >
          PLAY MAPLESTORY NOW
        </button>
        <h2 className="title">FEATURED NEWS & UPDATES</h2>
        <News />
      </div>
    </body>
  );
}

export default Body;
