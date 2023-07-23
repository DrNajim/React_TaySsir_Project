import React from 'react'
import { useState } from 'react'
import axios from "axios"
import { useEffect } from 'react'
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
function Hospitauxpub(){
    const [listhospitaux, sethoptaux] = useState([])
         const [word, setsearch] = useState("");
const getList = (async ()=>{
        return axios.post("https://tayssir.onrender.com/Hospitauxpub")
        .then(res => {return sethoptaux(res.data)})
        .catch(err => console.log(err))
    }) 
    console.log(listhospitaux);
    useEffect(()=>{  getList() }, [])
   const filhospitaux= listhospitaux.filter(item => word==="" ? item : item.__3.toLocaleLowerCase().includes(word.toLocaleLowerCase()))
   return (
    <div>
 <div className="icone-search-section">
          <div className="search-videoflag">
              <input type="search" className='inputsearch' onChange={(e) => setsearch(e.target.value)} placeholder="Recherche...?" />
          </div>
      </div>
      <div style={{marginTop:"5rem" , padding:"2rem", lineHeight:"2em"}}>
      <h4>Abreviation:</h4>
      <h5 >
HGU:Hopital Général Universitaire,    		
HSU:	Hopital Spécialisé Universitaire,  		
HGR:	Hopital Général Régional,  		
HSR:	Hopital Spécialisé Régional,  		
HGP:	Hopital Général Provincial/Préfectoral,  		
HSP:	Hopital Spécialisé Provincial/Préfectoral,  		
HL:	Hôpital Local</h5></div>
      <MDBTable style={{marginTop:"2rem"}}>
      <MDBTableHead light>
        <tr>
          <th scope='col'>#</th>
          <th scope='col'>Nom de l'hôpital	</th>
          <th scope='col'>Catégorie</th>
          <th scope='col'>ville /commue d'implantation de l'hôpital
</th>
        </tr>
      </MDBTableHead>
      {filhospitaux.map(item => (
      <MDBTableBody data-aos="flip-left"
      data-aos-duration="ease-out-cubic"
      data-aos-easing="1000">
        <tr>
          <th scope='row'>{listhospitaux.indexOf(item)}</th>
          <td>{item.__1}</td>
          <td>{item.__2}</td>
          <td>{item.__3}</td>
        </tr>        
      </MDBTableBody>))}
    </MDBTable> 
    <p style={{padding:"2rem"}}>This data has no formal relationship with you.
   Your receipt of this document does not create any kind of agent-client relationship.
No warranties and disclaimer of any damages. This information is provided 
‘as is‘, and this site makes no warranties on the information provided. Any
 damages resulting from its use are disclaimed.</p>        
    </div>
  )
}

export default Hospitauxpub

    
