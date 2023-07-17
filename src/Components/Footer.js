import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

export default function Footer() {
  const gotto=()=>{window.scrollTo({top: 0, left: 0, behavior: 'smooth'})}
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
      <button onClick={()=>gotto()}>Go to Top</button>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>
        <div>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="twitter" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="google" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
            <img className="TaySsir-icone" src="42c33938a8a54f6092929e6deb606b18.png" alt=""/>
                TaySsir
              </h6>
              <p>
              "TaySsir" is the only official, reliable and integrated electronic
                    space to obtain all the information related to administrative services
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Services</h6>
              <p>
              <Link style={{ textDecoration: 'none', color: 'black'}} to={"/Universites"}><a href='#!' className='text-reset'>
                  Universite
                </a></Link>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Societe
                </a>
              </p>
              <p>
              <Link style={{ textDecoration: 'none', color: 'black'}} to={"/Hospitaux"}><a href='#!' className='text-reset'>
                  Hospitaux
                </a></Link>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                Digital  Services
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                Casablanca, Maroc
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                info@tayssir.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> + 01 234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor:'rgba(0, 0, 0, 0.05)'}}>
        © 2023 Copyright:
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
          tayssir.com
        </a>
      </div>
    </MDBFooter>
  );
}