import React from 'react'
import {findDOMNode} from 'react-dom'
import StoreComponent from './store-component'
import Line from './line'
import $ from 'jquery'

export default class TextOutput extends StoreComponent {

  constructor(){
    super()
    this.onUpdateLine = this.onUpdateLine.bind(this)
  }

  render(){
    const {lines, size} = this.store.getState()
    let style = {
      minWidth: size + 2,
      minHeight: size + 2,
      fontSize: size
    }
    let _lines = []
    for(let i = 0; i < lines.length; i++){
      _lines.push(<Line
                  value={lines[i]}
                  key={i}
                  ref={`line:${i}`}
                  onUpdate={() => this.onUpdateLine(i)}
                  fontSize='1em'
                  />)
    }
    return (
      <div className='text-output' style={style}>{_lines}</div>
    )
  }

  onUpdateLine(index){
    this.debug(`onUpdateLine(${index})`)
    setTimeout(() => {
      const line = findDOMNode(this.refs[`line:${index}`])
      if(!line) throw new Error(`cannot get DOM "line${index}"`)
      console.log($(line).outerWidth(true))
    }, 1)
  }

}
