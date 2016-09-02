import React from 'react'

import ArticleItem from './ArticleItem/ArticleItem.jsx'

export default class ArticleList extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let articleList = this.props.data.map((item, index) => {
      return <ArticleItem 
        key={'ai' + index}
        title={item.title}
        content={item.content}
        date={item.updated}
      />
    })

    return(
      <div className="al">
        {articleList}
      </div>
    )
  }
}
