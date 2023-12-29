import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {
    isLightMode: true,
  }

  onMode = () => {
    this.setState(prevVal => ({
      isLightMode: !prevVal.isLightMode,
    }))
  }

  render() {
    const {isLightMode} = this.state
    const bgMode = isLightMode ? 'bg-white' : 'bg-Dark'
    const header = isLightMode ? 'white' : 'Dark'
    const btncol = isLightMode ? 'bwhite' : 'bDark'
    const btnMode = isLightMode ? 'Light Mode' : 'Dark Mode'

    return (
      <div className="o-bg">
        <div className={bgMode}>
          <h1 className={header}>Click To Change Mode</h1>
          <button type="button" className={btncol} onClick={this.onMode}>
            {btnMode}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
