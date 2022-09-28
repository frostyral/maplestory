import React from 'react';
import '../../styles/Maps.sass';
import Maps from './Maps';

function Body(props) {
  return (
    <body>
      <div class="section-maps">
        <div class="content-maps">
          <div class="maps_navbar">
            <h1>THE WORLD OF MAPLE STORY</h1>
          </div>
          <div className="Body">
            <Maps />
          </div>
        </div>
      </div>
    </body>
  );
}

export default Body;
