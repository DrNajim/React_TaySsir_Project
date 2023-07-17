import React from 'react'
import Search from './Search';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCodeCompare, faBook,faShieldHalved, faCity, faSchoolFlag} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import SimpleSlider from './Slickunii';
function Article(){
  return (
    <div>
        <Search/>
    <div className="icone-section">
              <div className="icone-section-cercle">
                  <p><FontAwesomeIcon className='iconefont'  icon={faCodeCompare}/> Online Application</p>
              </div>
              <div class="icone-section-cercle">
                  <p><FontAwesomeIcon className='iconefont' icon={faSchoolFlag}/> Digital Governements Services</p>
              </div>
              <div class="icone-section-cercle">
                  <Link style={{ textDecoration: 'none', color: 'black'}} to={"/Universites"}><p><FontAwesomeIcon className='iconefont' icon={faBook}/> Universities</p></Link>
              </div>
              <div class="icone-section-cercle">
              
              <Link style={{ textDecoration: 'none', color: 'black'}} to={"/Hospitaux"}><p><FontAwesomeIcon className='iconefont' icon={faShieldHalved}/> Hospitals</p></Link>
            
              </div>
              <div class="icone-section-cercle">
                  <p><FontAwesomeIcon className='iconefont' icon={faCity}/> Companies</p>
              </div>
          </div>
          <div></div>
        <div className="TaySsir-prsentation-icone">
            <div className="TaySsir-prsentation">
                <h3> About "TaySsir"</h3>
                <p>
                    "TaySsir" is the only reliable and integrated electronic
                    space to obtain all the information related to administrative services
                    and to carry out the administrative transactions related to them.
                    This portal includes only those administrative procedures and decisions
                    that have been approved by the National Committee of Administrative
                    Procedures, and its content will be progressively updated
                    and renewed with all decisions approved by the same committee. In addition
                    to the components of this portal, the functionality of document and data
                    exchange, as well as the transactional space, will be activated at a later date.</p>
            </div>
            <div className="TaySsir-seconde-icone">
                <img className="TaySsir-seconde-icone" src="42c33938a8a54f6092929e6deb606b18.png" alt=""/>
            </div>
        </div>
        <SimpleSlider/>
    </div>
  )
}

export default Article