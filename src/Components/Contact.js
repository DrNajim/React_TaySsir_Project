import React from "react";
import {useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios';
function Contact() {
  const navigate = useNavigate()
  const getContact = async (setnewuser)=>{
    return axios.post("http://localhost:9000/Contact", setnewuser)
    .then(res => {return res.data})
    .then(res => {navigate('/')})
    .catch(err => console.log(err))}
  const [setnewuser, setnewlist] = useState({ name: "", email: "", subject: "",email_body: ""})
  return (
    <div class="container">
      <div class="row">
        <div class="col align-self-center">
          <h1 class="text-center">Nous attendant votre message</h1>
          {/* <!-- contact form --> */}
          <form>
            {/* <!-- name --> */}
            <div class="form-group">
              <label for="name">Name</label>
              <input onChange={(e)=>setnewlist({...setnewuser, name:e.target.value})}
                type="name"
                name="name"
                class="form-control"
                id="name"
                placeholder="enter your name"
              />
            </div>

            {/* <!-- email --> */}
            <div class="form-group">
              <label for="email">Email address</label>
              <input onChange={(e)=>setnewlist({...setnewuser, email:e.target.value})}
                type="email"
                name="email"
                class="form-control"
                id="email"
                placeholder="enter your email"
              />
            </div>

            {/* <!-- subject --> */}
            <div class="form-group">
              <label for="subject">Subject</label>
              <input onChange={(e)=>setnewlist({...setnewuser, subject:e.target.value})}
                type="text"
                name="subject"
                class="form-control"
                id="subject"
                placeholder="enter email subject"
              />
            </div>

            <div class="form-group">
              <label for="email_body">Message</label>
              <textarea onChange={(e)=>setnewlist({...setnewuser, email_body:e.target.value})}
                class="form-control"
                id="email_body"
                rows="5"
              ></textarea>
            </div>
            <button onClick={()=>getContact(setnewuser)} type="submit" class="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;