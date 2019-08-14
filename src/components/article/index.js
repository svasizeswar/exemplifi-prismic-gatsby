import React from 'react'
import containerStyles from "./article.module.css"

console.log(containerStyles);
const Article = () => (
  <div className={containerStyles.container}> 
    <h1>Gatsby CSS Modules</h1>
    <p>CSS Modules are cool</p>
  </div>
)

export default Article