import React from 'react'
import { useLocation } from 'react-router-dom'
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage
} from 'mdb-react-ui-kit';
import SimpleSlider from './Slickunii';
function UniversiteDetail(){
    const location=useLocation();
    const detailuniversite=location.state
  return (
    <div>
      <div>
      <div className='Universite_detail'>
      <div style={{height:"max-content", width:"20em"}}>
         <MDBCard className='mb-3'>
       <MDBCardImage position='top' src={detailuniversite.image}  alt='...' />
        <MDBCardBody style={{height:"max-content", width:"40em"}}>
          <MDBCardTitle>Nom de L'universite: <br></br>  {detailuniversite.Université}</MDBCardTitle>
          <MDBCardText> Pour plus d'information : <br></br>
          <a rel="noreferrer" target="_blank"  href={`http://${detailuniversite.Site_web}`}>{detailuniversite.Site_web}</a>
          </MDBCardText>
          <MDBCardText>
            <small className='text-muted'>Region : {detailuniversite.Region}</small>
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
      </div></div>
      <SimpleSlider/>
    </div>
    </div>
  )
}

export default UniversiteDetail