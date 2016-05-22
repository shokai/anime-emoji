import React from 'react'
import StoreComponent from './store-component'

export default class TextOutput extends StoreComponent {

  render(){
    const {text} = this.store.getState()
    const lines = text.split(/[\r\n]/).map(line => <div>{line}</div>)
    return (
      <div className='text-output'>{lines}</div>
    )
  }

}
