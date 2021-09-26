import React, { Component } from 'react'
import { connect } from 'react-redux'

class NewQuestion extends Component {
  render() {
    //const { users, authedUser, questions } = this.props;
    
    return (
      <div>
        New Question
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

export default connect(mapStateToProps)(NewQuestion);