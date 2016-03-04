import React, { Component } from 'react'

import Repo from './Repo'

export default class Dashboard extends Component {
  render(){
    let repos = this.props.items.map((item, idx) => {
      return <Repo key={idx} data={item} />
    })
    return <div>
      {this.props.items.length} items found
      <ul>{ repos }</ul>
    </div>
  }
}