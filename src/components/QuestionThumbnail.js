import React, { Component } from 'react'
import { connect } from 'react-redux'

class QuestionThumbnail extends Component {
  constructor(props) {
    super(props);
    
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  createDataStructure() {
    const {users, question } = this.props;
    
    //Gets the users from the store and stores them in an array
    const userData = Object.entries(users).map(([ key, user ]) => {
      return user;
	})
    
    //Gets the user id of the author
    const { author } = this.props.question;
    
    //Gets all of the author's data so we can use it later
    const authorData = userData.find((user) => {
      return user.id === author;
    });
    
    return {
      authorData,
      question
    }
  }
  
  handleSubmit = (data) => (event) => {
    event.preventDefault();
    this.props.selectQuestion(data, 'question', this.props.isAnswered);
  }
  
  render() {
    const data = this.createDataStructure();
    return (
      <div>
        <div>
          <div>{ data.authorData.name } asks</div>
        </div>
	    <div>
		  <div>{ data.authorData.avatarURL }</div>
		  <div>
		    <div>Would you rather</div>
			<div>{ data.question.optionOne.text }</div>
			<button onClick={ this.handleSubmit(data) }>View Poll</button>
		  </div>
	    </div>
	  </div>
    );
  }
}

function mapStateToProps(state) {
  const { users } = state;
  return {
    users: users
  }
}

export default connect(mapStateToProps)(QuestionThumbnail);