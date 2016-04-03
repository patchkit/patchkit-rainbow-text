import React from 'react'

// helper to create rainbowed-out elements
export function rainbowSplitter (str) {
  return str.split('').map((c,i) => <span key={i}>{c}</span>)
}

export default class RainbowText extends React.Component {
  static propTypes = {
    text: React.PropTypes.string
  }
  render() {
    console.log(this.props)
    return <span className="rainbow">{rainbowSplitter(this.props.text)}</span>
  }
}