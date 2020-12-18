import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby'
import logo from '../images/donologo.jpeg'
import Img from 'gatsby-image'

const Navigation = ({}) => {

    const data = useStaticQuery(graphql`
    query MyQuery {
        file(relativePath: {regex: "/dono/i"}){
          childImageSharp{
              fluid(maxWidth: 80){
                ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `)

    console.log(data);

    return(<nav className="container grid grid-cols-3 min-w-full p-0 m-0">
                <img src={logo} className="w-20 col-span-2" style={{width: '80px'}} lazyload/>
                <ul className="pt-7 text-center w-auto">
                    <Link to="/" className='mx-2'>Home</Link>
                    <Link to="/#about" className='mx-2'>About</Link>
                    <Link to="/#contact" className='mx-2'>Contact</Link>
                    <Link to="/purchase" className='mx-2'>Purchase</Link>
                </ul>
            </nav>)
}
export default Navigation