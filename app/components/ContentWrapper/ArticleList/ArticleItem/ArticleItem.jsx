import React from 'react'

export default class ArticleItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isRead: false
    }
  }

  setRead() {
    if (this.state.isRead == false) {
      this.setState({isRead: true})
    }
  }

  render() {
    return(
      <div className="ai">
        <hr />
        <div className="ai--headline">
          <a href={this.props.source} 
            target="_blank"
            onClick={this.setRead.bind(this)}>
            <span>{this.props.title} - {this.props.date}</span>
          </a>
        </div>
        <div className="ai--content">
          <span>{this.props.content}</span>
        </div>
        <hr />
      </div>
    )
  }
}
