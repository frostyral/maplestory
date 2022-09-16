import React from 'react';
import '../styles/Home.sass';
import header_image from '../media/header-image-two.jpg';
import news_default from '../media/news_default_two.png';
import news_community from '../media/news_community.png';
import news_maintenance from '../media/news_maintenance.png';

function Body() {
  return (
    <body>
      <div class="header-home">
        <img src={header_image} class="header-image" />
        <a>
          <button
            href="https://maplestory.nexon.net/"
            class="slideshow-button"
          >
            PLAY MAPLESTORY NOW
          </button>
        </a>
      </div>
      <div class="section-news">
        <div class="box-update-news">
          <div class="card">
            <img class="card-image" src={news_default} />
            <div class="card-textbox">
              <a
                class="card-title"
                href="https://maplestory.nexon.net/news/76652/content-closure-notice"
              >
                Content Closure Notice
              </a>
              <p>
                We plan to close Alien Visitor, Monad, and Julieta
                content from Global MapleStory during our November
                2022 update.
                <p class="timestamp">1 HOUR AGO</p>
                <a
                  class="card-button"
                  href="https://maplestory.nexon.net/news/76652/content-closure-notice"
                >
                  READ MORE
                </a>
              </p>
            </div>
          </div>
          <div class="card">
            <img class="card-image" src={news_community} />
            <div class="card-textbox">
              <a
                class="card-title"
                href="https://maplestory.nexon.net/news/76653/livestream-potion-mixing-contest-results-w-cm-ezrabell"
              >
                Livestream - Potion Mixing Contest Results w/ CM
                Ezrabell!
              </a>
              <p>
                Find out the winners of the Potion Mixing Contest and
                see CM Ezrabell recreate the winning recipies!
                <p class="timestamp">9 HOURS AGO</p>
                <a
                  class="card-button"
                  href="https://maplestory.nexon.net/news/76653/livestream-potion-mixing-contest-results-w-cm-ezrabell"
                >
                  READ MORE
                </a>
              </p>
            </div>
          </div>
          <div class="card">
            <img class="card-image" src={news_maintenance} />
            <div class="card-textbox">
              <a
                class="card-title"
                href="https://maplestory.nexon.net/news/76635/completed-unscheduled-channel-maintenance-september-13-2022"
              >
                Unsheduled Channel Maintenance - September 13, 2022
              </a>
              <p>
                The maintenance has been completed and all channels
                are now available, Thank you for your patience.
                <p class="timestamp">SEPTEMBER 13, 2022</p>
                <a
                  class="card-button"
                  href="https://maplestory.nexon.net/news/76635/completed-unscheduled-channel-maintenance-september-13-2022"
                >
                  READ MORE
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
}

export default Body;
