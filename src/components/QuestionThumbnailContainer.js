import React, { Component } from 'react'
import { connect } from 'react-redux'

import QuestionThumbnail from './QuestionThumbnail'

class QuestionThumbnailContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answered: false
    };
    
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleSubmit(event) {
    event.preventDefault();
    
    if (event.target.value === 'true') {
      this.setState({
        answered: true
      });
    } else {
      this.setState({
        answered: false
      });
    }
  }
  
  getUsers() {
    const { users } = this.props;
    
    const userData = Object.entries(users).map(([ key, user ]) => {
      return user;
	})
    
    return userData;
  }
  
  getAnsweredQuestionIds() {
    const { authedUser } = this.props;
    const users = this.getUsers();
    
    const authedUserData = users.find((user) => {
      return user.name === authedUser;
    });
    
    const answeredQuestionKeys = [];
    
    for (const [ key ] of Object.entries(authedUserData.answers)) {
      answeredQuestionKeys.push(key);
    }
    
    return answeredQuestionKeys;
  }
  
  getQuestions() {
    const { questions } = this.props;
    const answerIds = this.getAnsweredQuestionIds();
    const unansweredQuestions = [];
    const answeredQuestions = [];
    
    for (const [key, question] of Object.entries(questions)) {
      if(answerIds.includes(key)) {
        answeredQuestions.push(question);
      } else {
        unansweredQuestions.push(question);
      }
    }
    
    return {
      answered: answeredQuestions,
      unanswered: unansweredQuestions
    }
  }
  
  render() {
    const questions = this.getQuestions();
    return (
      <div>
        <button onClick={ this.handleSubmit } value={ 'false' }>Unanswered Questions</button>
        <button onClick={ this.handleSubmit } value={ 'true' }>Answered Questions</button>
		{this.state.answered ?
          questions.answered.map((question) => {
            return <QuestionThumbnail key={ question.id } question={ question } />;
          }) :
		  questions.unanswered.map((question) => {
            return <QuestionThumbnail key={ question.id } question={ question } />;
          })
        }
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

export default connect(mapStateToProps)(QuestionThumbnailContainer);