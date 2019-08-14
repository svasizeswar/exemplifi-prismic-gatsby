import React, { Component } from 'react'
import { withPrefix, Link } from "gatsby"
import Helmet from "react-helmet"
//import Img from "gatsby-image"
import axios from 'axios';

import "./casestudy.css"

const API_URL = 'https://exemplifidev.wpengine.com/wp-json/api-v2/pod/cms_platform';

class Casestudy extends Component{
    state = {
        filter: []
    }
    componentDidMount() {
        const url = `${API_URL}`;
        axios.get(url).then(response => response.data)
        .then((data) => {
          this.setState({ filter: data })
          console.log(this.state.filter)
         })
    }
    render() {
        return (
    <div className="case-container">
    <div className="casestudy-container"> 
         <ul className="casestudy__filters" data-postfilter={this.props.type}>
        {this.props.filter.map(industry => {
            return (
            <React.Fragment key={industry.node.id}>
                <li className="casestudy__filter" data-filter={industry.node.name}>{industry.node.title}</li>
            </React.Fragment>
            )
        })}    
        </ul>
    </div>
    <div className="slider-container">
    <a className="case-prev"   >&#10094;</a>
    <a className="case-next"  >&#10095;</a>
    {this.props.casestudies.map(casestudy => {
          return (
            <React.Fragment key={casestudy.node.id}>
                <div className="case-study-post slider temp" 
                            data-industry= {casestudy.node.csindustry} 
                            data-cms_platform= {casestudy.node.csplatform} 
                            data-ecosystem={casestudy.node.csindustry}
                            data-case_study={casestudy.node.csindustry}
                            data-design_partner={casestudy.node.csdesignpartner}>
                    <div className="slider-inner">
                        <div className="slider-img" >
                            <a href=" " alt="" target="_blank">
                                <img  width="1024" height="532" src={casestudy.node.image} className="attachment" alt="CMS Logo" />
                            </a>
                        </div>
                        <div className="slider-content"  >
                            <h3>{casestudy.node.title}</h3>
                            <p>{casestudy.node.description}</p>
                            <p><a href={casestudy.node.csurl} target="_blank" className="link">Live Site</a></p>
                        </div> 
                    </div> 
                </div>            
            </React.Fragment>
          )
    })}
    <Helmet>
        <script src={withPrefix('custom.js')} type="text/javascript" />
        <script src={withPrefix('casestudy.js')} type="text/javascript" />
    </Helmet>
    </div>
    </div>
    )
    }
}
export default Casestudy

 