import React from 'react'
import "./Footer.css"
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div className='footer'>

    
    <div className='d-flex flex-column justify-content-center align-items-center'>
        <div className='links-container-footer d-flex'>
                   <Link to="/" className='f-link'>Home</Link> 
                   <Link to="/about" className='f-link'>About</Link>
                   <Link to="/products" className='f-link'>Products</Link>
                   <Link to="posts" className='f-link'>Posts</Link>

                </div>
                <p className='copyright'>@2023 Webstylespress-All Rights Reserved</p>
    </div>
    </div>
  )
}

export default Footer