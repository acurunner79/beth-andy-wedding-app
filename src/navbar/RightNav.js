import React from 'react'
import { Link } from "react-router-dom"
import './rightNav.css'


const RightNav = (props) => {
  
  
    return (     
    <div className="links-container">
        <Link to="/">
          <li className="links" onClick={props.handleClick}>
            Home
          </li>
        </Link>
        <Link to="/venue">
          <li className="links" onClick={props.handleClick}>
            Venue
          </li>
          </Link>       
    </div>
    )
}

export default RightNav
