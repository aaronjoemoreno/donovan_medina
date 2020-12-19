import React from 'react'
import './social.css'
import twitter from '../images/twitter.svg'
import instagram from '../images/instagram.svg'
import facebook from '../images/facebook.svg'

const Social = () => {
    return(
        <div className="social-container">
            <h1>Donovan Medina</h1>
            <h2>Albuquerque, New Mexico</h2>
            <h4>All images on this website are protected under the copyright laws and may only be reproduced with written permission from the artist.
            Copyright 2020 Donovan Medina. All Rights Reserved.</h4>
            <div className="social-icons">
                <a href="https://twitter.com/donodina" target="blank">
                    <img src={twitter} alt="twitter"/>
                </a>
                <a href="https://instagram.com/donodina" target="blank">
                    <img src={instagram} alt="instagram"/>
                </a>
                <a href="https://facebook.com/donodina" target="blank">
                    <img src={facebook} alt="facebook"/>
                </a>
            </div>
        </div>
    )
}

export default Social