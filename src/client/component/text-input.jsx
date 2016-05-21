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
      <textarea value={text} onChange={this.onChange} />
    )
  }

  onChange(e){
    this.action.setText(e.target.value)
  }

}
