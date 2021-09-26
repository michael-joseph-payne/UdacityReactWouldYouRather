import React, { Component } from 'react'
import { connect } from 'react-redux'

class QuestionThumbnail extends Component {
  getUsers() {
    const { users } = this.props;
    
    const userData = Object.entries(users).map(([ key, user ]) => {
      return user;
	})
    
    return userData;
  }
  
  findUser(userId) {
    const users = this.getUsers();
    
    const user = users.find((user) => {
      return user.id === userId;
    });
    
    return user;
  }
  
  getAvatar(userId) {
    return this.findUser(userId).avatarURL;
  }
  
  getUserName(userId) {
    return this.findUser(userId).name;
  }
  
  render() {
    console.log(this.props.question);
    const { author } = this.props.question;
    const userName = this.getUserName(author);
    const avatar = this.getAvatar(author);
    const optionOne = this.props.question.optionOne.text;
    
    return (
      <div>
        <div>
          <div>{ userName } asks</div>
        </div>
	    <div>
		  <div>{ avatar }</div>
		  <div>
		    <div>Would you rather</div>
			<div>{ optionOne }</div>
			<button>View Poll</button>
		  </div>
	    </div>
	  </div>
    );
  }
}

function mapStateToProps(state) {
  const { users, authedUser, questions } = state;
  return {
    users: users,
    authedUser: authedUser,
    questions: questions
  }
}

export default connect(mapStateToProps)(QuestionThumbnail);