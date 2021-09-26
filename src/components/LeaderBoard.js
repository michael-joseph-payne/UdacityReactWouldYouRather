import React, { Component } from 'react'
import { connect } from 'react-redux'

class LeaderBoard extends Component {
  render() {
    //const { users, authedUser, questions } = this.props;
    
    return (
      <div>
        Leader Board
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { users, authedUser, questions } = state;
  return {
    users: users,
    authedUser: authedUser,
    questions: questions,
  }
}

export default connect(mapStateToProps)(LeaderBoard);