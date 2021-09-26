import React, { Component } from 'react'
import { connect } from 'react-redux'

import { setAuthedUser } from '../actions/authedUser'

class Nav extends Component {
  constructor(props) {
    super(props);
    
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleSubmit(event) {
    event.preventDefault();
    this.props.selectView(event.target.value);
  }
  
  handleLogout = () => {
    const { dispatch } = this.props;
    dispatch(setAuthedUser(null));
  }
  
  render() {
    const {authedUser} = this.props;

    return (
      <nav>
        <button onClick={ this.handleSubmit } value='home'>Home</button>
        <button onClick={ this.handleSubmit } value='newQuestion'>New Question</button>
        <button onClick={ this.handleSubmit } value='leaderBoard'>Leader Board</button>
      	{`Hello, ${ authedUser }`}
        <button onClick={ this.handleLogout }>Logout</button>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  const { authedUser } = state;
  return {
    authedUser: authedUser,
  }
}

export default connect(mapStateToProps)(Nav)