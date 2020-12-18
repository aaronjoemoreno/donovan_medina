import PropTypes from "prop-types"
import React, { useState } from "react"
import Img from 'gatsby-image';
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'
import './header.css'

const Header = ({ data: { art: { nodes } } }) => {
  let images = [
    nodes[0].image.asset.fluid,
    nodes[1].image.asset.fluid,
  ]
  return(
    <>
      <Carousel
        infiniteLoop
        centerMode
        interval="4000"
        autoPlay
      >
                <div>
                    <Img fluid={images[0]} />
                    {/* <img srcSet={nodes[0].image.asset.fluid.srcSet}/> */}
                </div>
                <div>
                    <Img fluid={images[1]} />
                    {/* <img srcSet={nodes[1].image.asset.fluid.srcSet}/> */}
                </div>
            </Carousel>
    </>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
