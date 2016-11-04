import React from 'react'

import SourceItem from './SourceItem/SourceItem.jsx'

export default class SourceList extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let sourceItems = this.props.data.map((item, index) => {
      return <SourceItem
        key={'si' + index}
        title={item.title}
        counter={40}
        onSourceItemSelection={this.props.onSourceItemSelection.bind(this, item._id)}
        setActiveArticles={this.props.setActiveArticles.bind(this, item.entries)}
      />
    })

    return(
      <div className="sl">
        {sourceItems}
      </div>
    )
  }
}
