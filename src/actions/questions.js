import { _saveQuestion } from '../db/_DATA.js'
import { linkUser } from '../actions/users.js'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'

export function receiveQuestions (questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  }
}

export function addQuestion (question) {
  return {
    type: ADD_QUESTION,
    question,
  }
}

export function handleAddQuestion (optionOneText, optionTwoText) {
  return (dispatch, getState) => {
    const { authedUser, users } = getState();
    
    const userData = Object.entries(users).map(([ key, user ]) => {
      return user;
	});
    
    const authorData = userData.find((user) => {
      return user.name === authedUser;
    });

    return _saveQuestion({
      optionOneText: optionOneText,
      optionTwoText: optionTwoText,
      author: authorData.id,
    })
      .then((question) => dispatch(addQuestion(question)))
      .then((question) => dispatch(linkUser(question.question, authorData)))
  }
}