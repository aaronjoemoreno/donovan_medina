import React from 'react';
import { Link } from 'gatsby'
import logo from '../images/donologo.jpeg'

const Navigation = ({}) => {

    return(<nav className="container grid grid-cols-3 min-w-full p-0 m-0">
                <img src={logo} className="w-20 col-span-2" style={{width: '80px'}} lazyload="true"/>

                <ul className="pt-7 text-center w-auto">
                    <Link to="/" className='mx-2'>home</Link>
                    <Link to="/#about" className='mx-2'>about</Link>
                    <Link to="/#contact" className='mx-2'>contact</Link>
                    <Link to="/purchase" className='mx-2'>purchase</Link>
                </ul>
            </nav>)
}
export default Navigation