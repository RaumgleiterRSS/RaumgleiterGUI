import React from 'react'

import SourceList from './SourceList/SourceList.jsx'
import ArticleList from './ArticleList/ArticleList.jsx'

export default class ContentWrapper extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div className="cw">
        <div className="cw--left">
          <SourceList />
        </div>
        <div className="cw--right">
          <ArticleList />
        </div>
      </div>
    )
  }
}
