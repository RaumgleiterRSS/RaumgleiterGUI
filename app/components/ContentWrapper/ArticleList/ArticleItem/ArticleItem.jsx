import React from 'react'
import moment from 'moment'

export default class ArticleItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      date: null
    }
  }

  setRead() {
    if (this.props.isRead == false) {
      //send request to db to set article as read
      console.log("db request to set article as read")
    }
  }

  focusItem() {
    console.log('test')
    this.props.focusedItem()
  }

  componentWillMount() {
    let isoDate = this.props.date
    let humanDate = moment(isoDate).format('HH:mm - DD.MM.YYYY')
    this.setState({date: humanDate})
  }

  render() {
    let itemClass = "ai"
    if (this.props.isFocused == true) {
      itemClass = "ai focused"
    }

    return(
      <div className={itemClass}
        onClick={this.focusItem.bind(this)}>
        <hr />
        <div className="ai--container">
          <a href={this.props.source}
            target="_blank"
            onClick={this.setRead.bind(this)}>
            <div className="ai--headline">{this.props.title}</div>
          </a>
          <div>{this.state.date}</div>
        </div>
        <div className="ai--content">
          <span>{this.props.content}</span>
        </div>
        <hr />
      </div>
    )
  }
}
