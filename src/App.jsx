import React, { Component } from 'react'
import Timer from "./Timer";

class App extends Component {
  state = {
    showApp :false
  }
  handleClick = () => {
    this.setState({
      showApp: !this.state.showApp
    })
  }
  render() {
    return (
      <div>
        {this.state.showApp && <Timer/>}
        <button onClick={this.handleClick}>{this.state.showApp ? "Unmount App" : "Mount"}</button>
      </div>
    )
  }
}

export default App