import React from 'react'

import SourceList from './SourceList/SourceList.jsx'
import ArticleList from './ArticleList/ArticleList.jsx'

import demoData from '../../../demo/export.json'

export default class ContentWrapper extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      demo: demoData,
      sourceListData: [],
      articleListData: [],
      selectedSource: ''
    }
  }

  onSourceItemSelection(itemId) {
    this.setState({selectedSource: itemId})
  }

  setActiveArticles(articles) {
    this.setState({articleListData: articles})
  }

  render() {
    return(
      <div className="cw">
        <div className="cw--left">
          <SourceList
            data={this.state.demo}
            setActiveArticles={this.setActiveArticles.bind(this)}
            onSourceItemSelection={this.onSourceItemSelection.bind(this)}
          />
        </div>
        <div className="cw--right">
          <ArticleList
            data={this.state.articleListData}
            selectedSource={this.state.selectedSource}
          />

        </div>
      </div>
    )
  }
}
