import React from 'react'
import { useSelector } from 'react-redux'
import UniversitePublic from './UniversitePublic'
import { useState } from 'react'

function Universites(){
  const Universities = useSelector(state => state.ListUniversite.Universites)
  const [word, setsearch] = useState("");

  return (
    <div>
 <div className="icone-search-section">
          <div className="search-videoflag">
              <input type="search" className='inputsearch' onChange={(e) => setsearch(e.target.value)} placeholder="Recherche...?" />
          </div>
      </div>          
      <div className='Universite_component'>
    <div className='Universite_card'>
        {Universities.filter(item => word==="" ? item : item.Region.toLocaleLowerCase().includes(word.toLocaleLowerCase()))
        .map(Universities=>( 
          <UniversitePublic {...Universities} />
    ))}
    </div>
    </div>
    </div>
  )
}

export default Universites