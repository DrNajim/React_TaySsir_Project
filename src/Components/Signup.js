import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios';
export default function SignUp() {
  const getUsers = async (setnewuser)=>{
    return axios.post("http://localhost:9000/Signup", setnewuser)
    .then(res => {return res.data})
    .catch(err => console.log(err))}
  const [setnewuser, setnewlist] = useState({ firstname: "", lastname: "", age: "",login: "",password: ""})
  const [typeinput, settype]=useState("password")
  const togglePassword=(e)=>e.target.checked ?settype("text"):settype("password")
  return (
        <div className='formsignup'>
      <form style={{width:"40rem"}}>
        <h3>Sign Up</h3>

        <div className="mb-3">
          <label>First name</label>
          <input onChange={(e)=>setnewlist({...setnewuser, firstname:e.target.value})}
            type="text"
            className="form-control"
            placeholder="First name"
          />
        </div>

        <div className="mb-3">
          <label>Last name</label>
          <input onChange={(e)=>setnewlist({...setnewuser, lastname:e.target.value})} type="text" className="form-control" placeholder="Last name" />
        </div>

        <div className="mb-3">
          <label>Email address</label>
          <input onChange={(e)=>setnewlist({...setnewuser, email:e.target.value})}
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input onChange={(e)=>setnewlist({...setnewuser, password:e.target.value})}
            type={`${typeinput}`}
            className="form-control"
            placeholder="Enter password"
          /><input type='checkbox' onClick={togglePassword}>Check for visible password</input>
        </div>
        <div className="d-grid">
        <Link to='/Signin?success=true' >
          <button  onClick={()=>getUsers(setnewuser)} type="submit" className="btn btn-primary">
            Sign Up
          </button></Link>
        </div>
        <p className="forgot-password text-right">
          Already registered <Link to='/Signin'>sign in?</Link>
        </p>
      </form></div>
    )
  }
