import MJMLElement from './decorators/MJMLElement'
import React, { Component } from 'react'

/**
 * This is the starting point of your email. It is a unique and mandatory component. It corresponds to the HTML <body> tag.
 */
@MJMLElement
class Body extends Component {

  getStyles() {
    const { mjAttribute } = this.props

    return {
      div: {
        backgroundColor: mjAttribute('background-color'),
        fontSize: mjAttribute('font-size')
      }
    }
  }

  render() {
    const { renderWrappedOutlookChildren, mjAttribute } = this.props

    this.styles = this.getStyles()

    return (
      <div className="mj-body" style={this.styles.div} data-background-color={mjAttribute('background-color')}>
        {renderWrappedOutlookChildren()}
      </div>
    )
  }

}

export default Body
