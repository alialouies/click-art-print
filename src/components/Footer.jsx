import React from 'react'
import {Link} from "react-router-dom"

const Footer = () => {
    return (
        <div>
             <footer className="footer">
        <ul className="footer">
          <li>
            <Link to="/ourmission">Our Mission</Link>
          </li>
          <li>
            <Link to="/form">Sign up</Link>
          </li>
        </ul>
      </footer>
        </div>
    )
}

export default Footer
