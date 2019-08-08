import React from "react"
import { graphql } from "gatsby"
import Header from "../components/header"
import Ecosystem from "../components/ecosystem"

const Post = ({ data: { prismicAgency } }) => {
  const { data } = prismicAgency
  return (
    <React.Fragment>
    	<Header />
     
      <Ecosystem />
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
  }
`