import { _saveQuestion, _saveQuestionAnswer } from '../db/_DATA.js'
import { linkUserQuestion, linkUserAnswer } from '../actions/users.js'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'
export const ADD_VOTE = 'ADD_VOTE'

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

export function addVote (answer, question, authorData) {
  return {
    type: ADD_VOTE,
    answer,
    question,
    authorData
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
      .then((question) => dispatch(linkUserQuestion(question.question, authorData)))
  }
}

export function handleAnswerQuestion (answer, question) {
  return (dispatch, getState) => {
    const { authedUser, users } = getState();
    
    const userData = Object.entries(users).map(([ key, user ]) => {
      return user;
	});
    
    const authorData = userData.find((user) => {
      return user.name === authedUser;
    });

    return _saveQuestionAnswer ({
      authedUser: authorData.id,
      qid: question.id,
      answer: answer
    })
    .then(() => dispatch(linkUserAnswer(answer, question, authorData)))
    .then(() => dispatch(addVote(answer, question, authorData)));
  }
}