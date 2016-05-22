import React from 'react'
import StoreComponent from './store-component'
import Line from './line'

export default class TextOutput extends StoreComponent {

  componentDidUpdate(){
    this.debug('didRender')
  }

  render(){
    const {lines} = this.store.getState()
    let _lines = lines.map(line => <Line value={line}/>)
    return (
      <div className='text-output'>{lines}</div>
    )
  }

}
