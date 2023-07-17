import React from 'react'

function Search (){
 return ( 
            <div className="icone-search-section">
          <div className="search-videoflag">
              <input className='inputsearch' type="search" name="" id="" placeholder="Recherche...?" />
              <video
                  preload="true" autoPlay muted playsInline loop src="videofront.mp4"
                  allow="controler; loop; accelerometer; autoplay; gyroscope; picture-in-picture; web-share"
                  id="video" />
          </div>
      </div>                
  );
}

export default Search