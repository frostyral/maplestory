import React from 'react';
import '../styles/Home.sass';
import news_one from '../media/news_one.png';
import news_two from '../media/news_two.png';

import slideshow_one from '../media/slideshow_one.jpg';

function Body() {
  return (
    <body>
      <div class="slideshow">
        <div
          id="carouselExampleIndicators"
          class="carousel-slide"
          data-ride="carousel"
        >
          <div class="slideshow-buttons">
            <div class="carousel-indicators">
              <button
                type="button"
                href="#carouseExampleIndicators"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                class="active"
                aria-current="carousel"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                href="#carouseExampleIndicators"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                href="#carouseExampleIndicators"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
              <button href="">PLAY MAPLESTORY NOW</button>
            </div>
          </div>

          <div class="carousel-inner">
            <div class="carousel-item active" data-interval="5000">
              <img src={slideshow_one} class="" alt="..." />
            </div>
            <div class="carousel-item" data-interval="5000">
              <img src={news_two} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item" data-interval="5000">
              <img src={news_one} class="d-block w-100" alt="..." />
            </div>
          </div>
        </div>
      </div>

      <div class="hero">
        <h1>FEATURED NEWS & UPDATES</h1>
        <div class="news">
          <div class="card">
            <img src={news_one} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Rocking Revamp Patch Notes</h5>
              v.235 - Rocking Revamp is now live on August 31. Click
              here to read the patch notes!
            </div>
            <a href="http://localhost:3000" class="button">
              READ MORE
            </a>
          </div>
          <div class="card">
            <img src={news_two} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">
                v.235 - Rocking Revamp Update Preview
              </h5>
              Step into Maple World as a pop star and participate in a
              series of events designed around character growth.
            </div>
            <a href="http://localhost:3000" class="button">
              READ MORE
            </a>
          </div>
        </div>
      </div>
      <script></script>
    </body>
  );
}

export default Body;
