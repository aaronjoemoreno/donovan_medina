import PropTypes from "prop-types"
import React, { useEffect } from "react"
import Img from 'gatsby-image';
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'
import './header.css'

const Header = ({ data: { art: { nodes } } }) => {
  let allImages = [...nodes]

  //TODO - make this useState
  let images = []

  allImages.forEach(image => {
    images.push(image.image.asset.fluid)
  })

  return(
    <>
      <Carousel
        infiniteLoop
        centerMode
        interval="4000"
        autoPlay
      >
        {images.map((img, index) => {
          return(
            <div key={index}>
              <Img fluid={img} />
            </div>

          )
        })}
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
