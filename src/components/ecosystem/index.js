import React from 'react'
import { withPrefix, Link } from "gatsby"
import Helmet from "react-helmet"
// Import custom style for this component
//import '../Ecosystem/style.scss'
import "./ecosystem.css"
const Ecosystem = (props) => (
  <div class="eco-container">
  <ul class="elementor-portfolio__filters elementor_post_filter portfolio-filters" data-tagfilter="catname" data-activefilter="marketing-automation">
  <li class="portfolio-filter elementor-portfolio__filter elementor-active" data-filter="__all">All</li>
  {props.ecotypes.map(course => {
          return (
            <React.Fragment>
              <li class="portfolio-filter elementor-portfolio__filter" data-filter={course.node.slugs}>{course.node.data.name.text}</li>
            </React.Fragment>
          )
        })}
	</ul>
  <div class="filter-block-wrap">
  {props.ecosys.map(ecosystem => {
          var ecotype = '__all'
          if(ecosystem.node.data.type){
              ecotype = ecosystem.node.data.type.slug
          }

          return (
            <React.Fragment>
              <div class="elementor-post elementor-grid-item elementor-post-filter ex_frt"
               data-catname={ecotype}>
                <div class="filter-block-content portfolio-filter-block">
                  <div>
                    <img src={ecosystem.node.data.logo.url} alt=""/>
                    <h3>{ecosystem.node.data.name.text}</h3> 
                  </div>
                </div>
               </div>
            </React.Fragment>
          )
        })}
 
  
</div>
<Helmet>
 <script src={withPrefix('ecosystem.js')} type="text/javascript" />
</Helmet>
</div>

)

export default Ecosystem

 