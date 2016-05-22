import React, {Component, PropTypes} from 'react'
import {findDOMNode} from 'react-dom'
import $ from 'jquery'

export default class Line extends Component {

  static get propTypes(){
    return {
      value: PropTypes.string.isRequired,
      maxWidth: PropTypes.number.isRequired
    }
  }

  constructor(){
    super()
    this.adjustSize = this.adjustSize.bind(this)
  }

  componentWillMount(){
    this.state = {fontSize: 1 / this.props.value.length}
  }

  componentDidUpdate(prevProps, prevState){
    setTimeout(this.adjustSize, 5)
  }

  componentDidMount(){
    setTimeout(this.adjustSize, 5)
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
    const dom = findDOMNode(this.refs.text)
    const width = $(dom).outerWidth(true)
    const {maxWidth} = this.props
    const diff = maxWidth - width
    if(diff >= 0 && diff < 4) return
    const fontSize = this.state.fontSize * (maxWidth < width ? 0.99 : 1.01)
    this.setState({fontSize})
  }
}
