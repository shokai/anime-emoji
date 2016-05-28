import React, {Component, PropTypes} from 'react'
import TextInput from './component/text-input'
import TextOutput from './component/text-output'
import Ticker from './component/ticker'

export default class App extends Component {

  static get propTypes(){
    return {
      store: PropTypes.object.isRequired
    }
  }

  render(){
    const {store} = this.props
    return (
      <div className='app'>
        <Ticker store={store} />
        <TextInput store={store} />
        <TextOutput store={store} />
      </div>
    )
  }

}
