import React, { useState } from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Navigation from '../components/Navigation'
import SEO from "../components/seo"
import Header from '../components/header'
import About from '../components/About'
import Footer from '../components/Footer'

const IndexPage = ({ data }) => {
  const [theme, setTheme] = useState('dark');

return(
    <Layout>
      <SEO title="Home" />
      <div className={`${theme} main-container`}>
        <Navigation />
        <Header data={data}/>
        <About />
        <Footer />
      </div>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query artQuery{
    art: allSanityArt{
      nodes {
        image {
          asset {
            fluid(maxWidth: 400) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;