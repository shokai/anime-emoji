import React from 'react'
import StoreComponent from './store-component'
import Line from './line'

export default class TextOutput extends StoreComponent {

  componentDidUpdate(){
    this.debug('didRender')
  }

  render(){
    const {lines, size} = this.store.getState()
    let style = {
      width: size + 2,
      height: size + 2,
      fontSize: size
    }
    let _lines = []
    for(let i = 0; i < lines.length; i++){
      _lines.push(<Line value={lines[i]} key={i} />)
    }
    return (
      <div className='text-output' style={style}>{lines}</div>
    )
  }

}
