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
            {/* <img className="links" src="https://res.cloudinary.com/acurunner79/image/upload/c_scale,w_349/v1619022886/website_logo_transparent_background_3_tzsfoz.png" alt='nav logo'/> */}
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
    </div>
    )
}

export default RightNav
