import React from 'react'
import { Link } from 'react-router-dom'

function UniversitePublic(props){
  return (
    <div className='Universite'>
<div className="card" >
  <img src={props.image} style={{ width:"100%", height:"12rem"}} className="card-img-top" alt="Universite"/>
  <div className="card-body">
    <Link style={{ textDecoration: 'none', color: 'black'}} to={"/UniversiteDetail"} state={props}>
    <p className="card-text">Université: {props.Université}</p></Link>
    <p className="card-text">Region: {props.Region}</p>
  </div>
</div>
    </div>
  )
}

export default UniversitePublic