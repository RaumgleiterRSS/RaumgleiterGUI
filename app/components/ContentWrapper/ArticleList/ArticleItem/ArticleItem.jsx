import React from 'react'

export default class ArticleItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div className="ai">
        <hr />
        <div className="ai--headline">
          <span>{this.props.title} - {this.props.date}</span>
        </div>
        <div className="ai--content">
          <span>{this.props.content}</span>
        </div>
        <hr />
      </div>
    )
  }
}
