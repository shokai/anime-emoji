import React, {Component, PropTypes} from 'react'

export default class Line extends Component {

  static get propTypes(){
    return {
      value: PropTypes.string.isRequired
    }
  }

  render(){
    const {value} = this.props
    return (
      <div className='line'>{value}</div>
    )
  }
}
