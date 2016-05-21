import React from 'react'
import StoreComponent from './store-component'

export default class TextOutput extends StoreComponent {

  render(){
    const {text} = this.store.getState()
    return (
      <div className='text-output'>{text}</div>
    )
  }

}
