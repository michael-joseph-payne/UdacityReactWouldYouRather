import React, { Component } from 'react'
import { connect } from 'react-redux'

import Nav from './Nav'

class Dashboard extends Component {
  render() {
    return (
      <div>
        <Nav />
		Dashboard
      </div>
    );
  }
}

export default connect()(Dashboard);