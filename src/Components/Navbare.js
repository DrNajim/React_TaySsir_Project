import React from 'react'
import { Link } from 'react-router-dom';

function Navbare(){
  return (
    <div className="navbarcomponent">
    <div className="nav-icone">
        <h3>TaySsir</h3> <img className="TaySsir-icone" src="42c33938a8a54f6092929e6deb606b18.png" alt=""/>
    </div>
    <div className="navlist">
        <ul>
           <Link style={{ textDecoration: 'none', color: 'black'}} to={'/'}> <li>Home</li></Link>
            <li>e-Services </li>
            <li>Take a Tour </li>
            <li>Track Application</li>
            <Link style={{ textDecoration: 'none', color: 'black'}} to={'/Contact'}><li >Contact Us</li></Link>
        </ul>
    </div>
    <div>
    <Link style={{ textDecoration: 'none', color: 'black'}} to={'/Signin'}> 
    <button type="button" className="btn btn-success">Connexion </button></Link>
    <Link style={{ textDecoration: 'none', color: 'black'}} to={'/Signup'}> 
    <button type="button" className="btn btn-danger">Sign Up</button></Link>
    
    </div>
</div>
  );
}

export default Navbare;