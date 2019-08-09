import React from 'react'
import { Link } from 'gatsby'
// Import custom style for this component
//import '../Ecosystem/style.scss'
import "./ecosystem.css"
const Ecosystem = (props) => (
  <div class="eco-container">
  <ul class="portfolio-filters">
  <li class="portfolio-filter active">All</li>
  {props.ecotypes.map(course => {
          return (
            <React.Fragment>
              <li class="portfolio-filter ">{course.node.data.name.text}</li>
            </React.Fragment>
          )
        })}
	</ul>
  <div class="filter-block-wrap">
  {props.ecosys.map(ecosystem => {
          return (
            <React.Fragment>
              <div class="filter-block-content portfolio-filter-block">
                 <img src={ecosystem.node.data.logo.url} alt=""/>
               </div>
            </React.Fragment>
          )
        })}
 
  <div class="filter-block-content portfolio-filter-block">
    <img src="https://1c56ea1o8ppe3ily2evtgp8h-wpengine.netdna-ssl.com/wp-content/uploads/2019/05/Hubspot-Logo.png" alt=""/>
  </div>
  <div class="filter-block-content portfolio-filter-block">
    <img src="https://1c56ea1o8ppe3ily2evtgp8h-wpengine.netdna-ssl.com/wp-content/uploads/2019/05/Marketo-Logo-circle.png" alt=""/>
  </div>
  <div class="filter-block-content portfolio-filter-block">
    <img src="https://1c56ea1o8ppe3ily2evtgp8h-wpengine.netdna-ssl.com/wp-content/uploads/2019/05/Pardot-Logo.png" alt=""/>
  </div>
  <div class="filter-block-content portfolio-filter-block">
    <img src="https://1c56ea1o8ppe3ily2evtgp8h-wpengine.netdna-ssl.com/wp-content/uploads/2019/05/Mailchimp-Logo.png" alt=""/>
  </div>
  <div class="filter-block-content portfolio-filter-block">
    <img src="https://1c56ea1o8ppe3ily2evtgp8h-wpengine.netdna-ssl.com/wp-content/uploads/2019/05/Adobe-campaign-logo.png" alt=""/>
  </div>
 
</div></div>
)

export default Ecosystem

 