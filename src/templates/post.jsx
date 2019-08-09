import React from "react"
import { graphql } from "gatsby"
import Header from "../components/header"
import Ecosystem from "../components/ecosystem"

const Post = ({ data: { prismicAgency, allPrismicEcosystemType, allPrismicEcosystem } }) => {
  const { data } = prismicAgency
  const ecotypes = allPrismicEcosystemType.edges
  const ecosys = allPrismicEcosystem.edges
  return (
    <React.Fragment>
    	<Header />
      <Ecosystem ecotypes = {ecotypes}  ecosys = {ecosys}/>
      </React.Fragment>
  )
}

export default Post

export const pageQuery = graphql`
  query PostBySlug($uid: String!) {
    prismicAgency(uid: {eq: $uid}) {
      data {
        hero_title {
          text
        }
        hero_des {
          text
        }
        hero_image {
          url
        }
      }
    }
    allPrismicEcosystemType {
      edges {
        node {
          id
          data {
            name {
              text
            }
          }
        }
      }
    }
    allPrismicEcosystem {
      edges {
        node {
          data {
            logo {
              url
            }
            name {
              text
            }
            type {
              slug
            }
          }
        }
      }
    }
  }
`