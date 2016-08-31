import React from 'react'

import ArticleItem from './ArticleItem/ArticleItem.jsx'

export default class ArticleList extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div className="al">
        <ArticleItem />
      </div>
    )
  }
}
