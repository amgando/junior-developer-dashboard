import React, { Component } from 'react'

export default class Repo extends Component {
  render(){
    return <li>{this.props.data.html_url}</li>
  }
}