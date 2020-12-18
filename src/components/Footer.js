import React from 'react'
import Contact from './Contact'
import Social from './Social'
import './footer.css'


const Footer = () => {
    return(
        <div className='footer-container'>
            <Contact/>
            <Social />
        </div>
    )
}

export default Footer