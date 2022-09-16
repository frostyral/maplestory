import React from 'react';
import '../styles/Home.sass';
import news_one from '../media/news_one.png';
import header_image from '../media/header-image-two.jpg';

function Body() {
  return (
    <body>
      <div class="header-home">
        <img src={header_image} class="header-image" />
      </div>
    </body>
  );
}

export default Body;
