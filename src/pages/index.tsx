import * as React from 'react'
import { graphql } from 'gatsby'
import * as styles from './index.module.scss'

  
interface IndexPageProps {
  data: {
    site: {
      siteMetadata: {
        description: string;
        siteUrl: string;
        title: string;
      }
    }
  }
}
  
export const indexPageQuery = graphql`
  query IndexPageQuery {
    site {
      siteMetadata {
        description
        siteUrl
        title
      }
    }
  }
`
  
export default class IndexPage extends React.Component<IndexPageProps, {}> {
  
  public render() {
    const {
      description,
      siteUrl,
      title
    } = this.props.data.site.siteMetadata
  
    return (
      <div>
        <div className={styles.Container}>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
       
      </div>
    )
  }
}