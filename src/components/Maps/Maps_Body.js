import React from 'react';
import '../../styles/Maps.sass';
import Maps from './Maps';

function Body(props) {
  return (
    <body>
      <div class="section-maps">
        <div class="content-maps"></div>
        <Maps />
      </div>
    </body>
  );
}

export default Body;
