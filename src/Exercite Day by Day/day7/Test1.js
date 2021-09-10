import React, {Component} from 'react'

class Test1Day7 extends Component {
    render() {
      const darkOrLight = this.props.isdark ? 'Light': 'Dark'
      return (
        <button onClick={this.props.onClick} className='dark-or-light'>{darkOrLight}</button>
      )
    }
}

export default Test1Day7