import React from 'react'
import StoreComponent from './store-component'

export default class TextInput extends StoreComponent {

  constructor(){
    super()
    this.onChange = this.onChange.bind(this)
  }

  render(){
    const {lines} = this.store.getState()

    return (
      <div className='text-input'>
        <textarea value={lines.join('\n')} onChange={this.onChange} />
      </div>
    )
  }

  onChange(e){
    this.action.setLines(e.target.value.split(/[\r\n]/g))
  }

}
