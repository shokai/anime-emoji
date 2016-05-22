import React, {Component, PropTypes} from 'react'

export default class Line extends Component {

  static get propTypes(){
    return {
      value: PropTypes.string.isRequired,
      onUpdate: PropTypes.func.isRequired
    }
  }

  componentDidUpdate(prevProps, prevState){
    this.props.onUpdate()
  }

  componentDidMount(){
    this.props.onUpdate()
  }

  render(){
    const {value} = this.props
    return (
      <div className='line' >{value}</div>
    )
  }
}
