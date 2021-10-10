import { RECEIVE_QUESTIONS, ADD_QUESTION, ADD_VOTE } from '../actions/questions'

export default function questions (state = {}, action) {
  switch(action.type) {
    case RECEIVE_QUESTIONS :
      return {
        ...state,
        ...action.questions
      }
    case ADD_QUESTION :
      return {
        ...state,
        [action.question.id]: action.question
      }
    case ADD_VOTE :
      let votedFor = {}
      
      if (action.answer === 'optionOne') {
        votedFor = {
          [action.question.id]: {
            ...state[action.question.id],
            votes: state[action.question.id].optionOne.votes.concat(action.authorData.id)
          }
        }
      } else {
        votedFor = {
          [action.question.id]: {
            ...state[action.question.id],
            votes: state[action.question.id].optionTwo.votes.concat(action.authorData.id)
          }
        }
      }
      
      return {
        ...state,
        ...votedFor
      }
      
    default :
      return state
  }
}