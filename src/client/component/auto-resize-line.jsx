// automatic self-resize component which fits maxWidth prop

const debug = require('debug')('animemji:component:auto-resize-line')

import React, {Component, PropTypes} from 'react'
import {findDOMNode} from 'react-dom'
import $ from 'jquery'

export default class AutoResizeLine extends Component {

  static get propTypes(){
    return {
      value: PropTypes.string.isRequired,
      maxWidth: PropTypes.number.isRequired
    }
  }

  constructor(){
    super()
    this.adjustSize = this.adjustSize.bind(this)
    this.adjustTimeout
  }

  componentWillMount(){
    this.state = {fontSize: 1 / this.props.value.length}
  }

  componentDidUpdate(prevProps, prevState){
    this.adjustTimeout = setTimeout(this.adjustSize, 5)
  }

  componentDidMount(){
    this.adjustTimeout = setTimeout(this.adjustSize, 5)
  }

  componentWillUnmount(){
    clearTimeout(this.adjustTimeout)
  }

  render(){
    const {value} = this.props
    const style = {
      fontSize: this.state.fontSize + 'em'
    }
    return (
      <div className='line' style={style} >
        <div className='text' ref='text' >{value}</div>
      </div>
    )
  }

  adjustSize(){
    debug('adjustSize')
    const dom = findDOMNode(this.refs.text)
    const width = $(dom).outerWidth(true)
    const {maxWidth} = this.props
    const diff = maxWidth - width
    if(diff >= 0 && diff < 1) return
    const fontSize = this.state.fontSize * (maxWidth < width ? 0.99 : 1.01)
    this.setState({fontSize})
  }
}
