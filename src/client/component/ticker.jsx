import StoreComponent from './store-component'

export default class Ticker extends StoreComponent {

  componentDidMount(){
    super.componentDidMount()
    this.timeout = setInterval(this.action.tick, 1000)
  }

  componentWillUnmount(){
    clearTimeout(this.timeout)
    super.componentWillUnmount()
  }

  render () {
    return null
  }
}
