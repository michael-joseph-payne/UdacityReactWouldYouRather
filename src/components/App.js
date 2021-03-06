import React, { Component } from 'react'
import { connect } from 'react-redux'

import { handleInitialData } from '../actions/shared'
import Login from './Login'
import Dashboard from './Dashboard'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  
  render() {
    const { authedUser } = this.props;
    return (
      <div className="App">
        {authedUser ?
      	  <Dashboard /> :
      	  <Login />
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { users, authedUser } = state;
  return {
    users: users,
    authedUser: authedUser,
  }
}

export default connect(mapStateToProps)(App);