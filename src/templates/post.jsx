import React from "react"
import { graphql } from "gatsby"
import Header from "../components/header"
import Ecosystem from "../components/ecosystem"
import Casestudy from "../components/casestudy"

const Post = ({ data: { prismicAgency, allPrismicEcosystemType, allPrismicEcosystem, allCasestudy, allIndustry } }) => {
  //const { data } = prismicAgency
  const ecotypes = allPrismicEcosystemType.edges
  const ecosys = allPrismicEcosystem.edges
  const casestudies = allCasestudy.edges
  const industries = allIndustry.edges
  return (
    <React.Fragment key='1'>
    	<Header />
      <Ecosystem ecotypes = {ecotypes}  ecosys = {ecosys}/>
      <Casestudy casestudies = {casestudies} industries={industries}/>
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
          slugs
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
          id
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
    allCasestudy {
      edges {
        node {
          id
          title
          image
          description
          csurl
          csplatform
          csindustry
          csdesignpartner
        }
      }
    }
    allIndustry {
      edges {
        node {
          id
          title
          name
        }
      }
    }
  }
`