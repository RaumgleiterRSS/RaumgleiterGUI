import React from 'react'

import SourceItem from './SourceItem/SourceItem.jsx'

export default class SourceList extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div className="sl">
        <SourceItem />
      </div>
    )
  }
}
