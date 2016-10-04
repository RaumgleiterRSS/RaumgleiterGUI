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
        <div className="si--title">{this.props.title}</div>
        <div className="si--counter">{this.props.counter}</div>
      </div>
    )
  }
}
