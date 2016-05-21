import React from 'react'
import StoreComponent from './store-component'

export default class TextInput extends StoreComponent {

  constructor(){
    super()
    this.onChange = this.onChange.bind(this)
  }

  render(){
    const {text} = this.store.getState()

    return (
      <div className='text-input'>
        <textarea value={text} onChange={this.onChange} />
      </div>
    )
  }

  onChange(e){
    this.action.setText(e.target.value)
  }

}
