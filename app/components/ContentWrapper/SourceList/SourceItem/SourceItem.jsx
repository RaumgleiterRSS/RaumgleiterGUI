import React from 'react'

export default class SourceItem extends React.Component {
  constructor(props) {
    super(props)
  }

  onSelection() {
    this.props.onSourceItemSelection()
    this.props.setActiveArticles()
  }

  render() {
    return(
      <div 
        className="si"
        onClick={this.onSelection.bind(this)}
      >
        <span>{this.props.title}</span>
        <span>{this.props.counter}</span>
      </div>
    )
  }
}
