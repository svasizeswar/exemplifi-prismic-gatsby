import React from "react"
import { graphql } from "gatsby"
import Header from "../components/header"

const Post = ({ data: { prismicAgency } }) => {
  const { data } = prismicAgency
  return (
    <React.Fragment>
	<Header />
      <h1>{data.hero_title.text}</h1>
	  <p>{data.hero_des.text}</p>
     <img src={data.hero_image.url} alt="hero" />
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