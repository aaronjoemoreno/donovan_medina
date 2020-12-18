import React from "react"
import { graphql, useStaticQuery } from 'gatsby'
import './about.css'

const About = () => {
    const data = useStaticQuery(graphql`
    query{
        allSanityAbout {
          nodes {
            description
          }
        }
      }
`)

console.log(data);

    return(
    <div className="about-container" id="about">
        <h1>Donovan Medina</h1>
        <h3>Zia Pueblo Artist</h3>
        <h3>(35.496929, -106.732262)</h3>
        <h3>35° 29' 48.9444'' N, 106° 43' 56.1432'' W</h3>
        <h4>Coming from a known line of pottery makers,</h4>
        <h4>Donovan is a 1/2 Zia Pueblo artist living in the Southwest.</h4>
        <h4>Currently exploring Native American Art.</h4>
    </div>
    );
}

export default About