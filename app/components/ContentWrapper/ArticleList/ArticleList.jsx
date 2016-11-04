import React from 'react'

import ArticleItem from './ArticleItem/ArticleItem.jsx'

export default class ArticleList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      focusedItem: null
    }
  }

  focusedItem(id) {
    this.setState({focusedItem: id})
  }

  keyboardNavigation(event) {
    event.preventDefault()
    const key = event.key

    if (key !== 'Escape' && this.state.focusedItem !== null) {
      let newItem = this.state.focusedItem.replace('ai', '')

      if (newItem < 40 && (key == 'ArrowDown' || key == 'j' || key == 'J')) {
        newItem = parseInt(newItem) + 1
        newItem = 'ai' + newItem.toString()
        this.setState({focusedItem: newItem})
      }

      if (newItem > 0 && (key == 'ArrowUp' || key == 'k' || key == 'K')) {
        newItem = parseInt(newItem) - 1
        newItem = 'ai' + newItem.toString()
        this.setState({focusedItem: newItem})
      }
    } else if (key == 'Escape' && this.state.focusedItem !== null) {
      this.setState({focusedItem: null})
    }
  }

  render() {
    let articleList = this.props.data.map((item, index) => {
      const key = 'ai' + index
      let focusState = false

      if (key == this.state.focusedItem) {
        focusState = true
      }

      return <ArticleItem
        key={key}
        title={item.title}
        content={item.content}
        date={item.updated}
        source={item.link}
        isRead={false}
        focusedItem={this.focusedItem.bind(this, key)}
        isFocused={focusState}
      />
    })

    return(
      <div className="al"
        onKeyDown={this.keyboardNavigation.bind(this)}
        tabIndex="0">
        {articleList}
      </div>
    )
  }
}
