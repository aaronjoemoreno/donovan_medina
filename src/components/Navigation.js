import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby'
import logo from '../images/donologo.jpeg'
import './header.css'

const Navigation = ({}) => {
    const [isOpen, setIsOpen] = useState(false)
    const [navClass, setNavClass] = useState('')

    useEffect(() =>{
        isOpen ? setNavClass('open') : setNavClass('');
    }, [isOpen])

    return(<nav className="nav-container">
                <img src={logo} className="nav-img" style={{width: '80px'}} lazyload="true"/>
                <div className='main-navigation'>
                    <div className={`${navClass} hamburger`} onClick={() => setIsOpen(!isOpen)}>
                        <div className={`${navClass} hamburgerTop`}></div>
                        <div className={`${navClass} hamburgerMiddle`}></div>
                        <div className={`${navClass} hamburgerBottom`}></div>
                    </div>
                    <ul className='pt-7 text-center w-auto navigation-list'>
                        <Link to="/#about" className='mx-2'>about</Link>
                        <Link to="/#contact" className='mx-2'>contact</Link>
                        <Link to="/purchase" className='mx-2'>purchase</Link>
                    </ul>
                </div>
                <div className={`${navClass} nav-mobile`}>
                        <ul>
                            <Link to="/#about" className='mx-2'>about</Link>
                            <Link to="/#contact" className='mx-2'>contact</Link>
                            <Link to="/purchase" className='mx-2'>purchase</Link>
                        </ul>
                    </div>
            </nav>)
}
export default Navigation