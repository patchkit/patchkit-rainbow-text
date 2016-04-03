import React from 'react'
import RainbowText from './index'

export default class RainbowDemo extends React.Component {
  render() {
    return <div>
      <h1>patchkit-rainbow</h1>
      <section className="rainbow">
        <header>&lt;RainbowText text="Hello, World!"&gt;</header>
        <div className="content"><h1><RainbowText text="Hello, World!" /></h1></div>
      </section>
    </div>
  }
}