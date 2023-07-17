import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { verifuser } from '../Redux/Reducer/Siginreducer'
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput
} from 'mdb-react-ui-kit'
function Signin () {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const verify = setnewuser => {
    dispatch(verifuser(setnewuser))
      .then(res => {
        if (typeof res.payload === 'object') {
          navigate('/')
        } else navigate('/Signup')
      })
      .catch(err => console.log(err))
  }
  const [setsign, setcurrentsign] = useState({ email: '', password: '' })

  return (
    <MDBContainer className='my-5 gradient-form'>
      <MDBRow>
        <MDBCol col='6' className='mb-5'>
          <div className='d-flex flex-column ms-5'>
            <div className='text-center'>
              <img
                src='42c33938a8a54f6092929e6deb606b18.png'
                style={{ width: '185px' }}
                alt='logo'
              />
              <h4 className='mt-1 mb-5 pb-1'>Nous somme les "Leaders"</h4>
            </div>
            <p>Please login to your account</p>
            <MDBInput
              onChange={e =>
                setcurrentsign({ ...setsign, email: e.target.value })
              }
              wrapperClass='mb-4'
              label='Email address'
              id='form1'
              type='email'
            />
            <MDBInput
              onChange={e =>
                setcurrentsign({ ...setsign, Password: e.target.value })
              }
              wrapperClass='mb-4'
              label='Password'
              id='form2'
              type='password'
            />
            <div className='text-center pt-1 mb-5 pb-1'>
              <MDBBtn
                onClick={() => verify(setsign)}
                className='mb-4 w-100 gradient-custom-2'
              >
                Sign in
              </MDBBtn>
              <a className='text-muted' href='#!'>
                Forgot password?
              </a>
            </div>
            <div className='d-flex flex-row align-items-center justify-content-center pb-4 mb-4'>
              <p className='mb-0'>Don't have an account?</p>
              <Link
                style={{ textDecoration: 'none', color: 'black' }}
                to={'/Signup'}
              >
                <MDBBtn outline className='mx-2' color='danger'>
                  Register
                </MDBBtn>
              </Link>
            </div>
          </div>
        </MDBCol>
        <MDBCol col='6' className='mb-5'>
          <div className='d-flex flex-column  justify-content-center gradient-custom-2 h-100 mb-4'>
            <div className='text-white px-3 py-4 p-md-5 mx-md-4'>
              <h4 class='mb-4'>We are more than just a company</h4>
              <p class='small mb-0'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  )
}

export default Signin
