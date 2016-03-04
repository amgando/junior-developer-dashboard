import React, { Component } from 'react'

export default class Owner extends Component {
  render(){
    return <div>{this.props.owner.login}</div>
  }
}