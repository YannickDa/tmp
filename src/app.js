import { hot } from "react-hot-loader/root"
import React, { Component } from "react"

const HelloWorld = ({ name }) => <div>Hello {name}</div>

class Application extends Component {
  render() {
    const { name } = this.props

    return <HelloWorld name={name}/>
  }
}

export default hot(Application)
