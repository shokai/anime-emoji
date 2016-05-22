import React from 'react'
import StoreComponent from './store-component'
import AutoResizeLine from './auto-resize-line'

export default class TextOutput extends StoreComponent {

  constructor(){
    super()
  }

  render(){
    const {lines, size} = this.store.getState()
    const style = {
      minWidth: size + 2,
      minHeight: size + 2,
      fontSize: size
    }
    const _lines = []
    for(let i = 0; i < lines.length; i++){
      let line = lines[i]
      if(!line) continue
      _lines.push(<AutoResizeLine
                  value={line}
                  key={i}
                  ref={`line:${i}`}
                  maxWidth={size}
                  />)
    }
    return (
      <div className='text-output' style={style}>{_lines}</div>
    )
  }
}
