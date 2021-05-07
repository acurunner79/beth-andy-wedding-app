import React from 'react'
import { Link } from "react-router-dom"
import './rightNav.css'


const RightNav = (props) => {
  
  
    return (     
    <div className="links-container">
      <ul className="nav-ul">
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
            <img className="center-logo" src="https://res.cloudinary.com/acurunner79/image/upload/v1620244789/website_logo_transparent_background_5_srh2x0.png" alt='nav logo'/>
          <Link to="/registry">
            <li className="links" onClick={props.handleClick}>
              Registry
            </li>
          </Link> 
          <Link to="/rsvp">
            <li className="links" onClick={props.handleClick}>
              RSVP
            </li>
          </Link>  
          </ul>     
    </div>
    )
}

export default RightNav
