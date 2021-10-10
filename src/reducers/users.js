import { RECEIVE_USERS, LINK_USER_QUESTION, LINK_USER_ANSWER } from '../actions/users'

export default function users (state = {}, action) {
  switch(action.type) {
    case RECEIVE_USERS :
      return {
        ...state,
        ...action.users
      }
    case LINK_USER_QUESTION :
      const questionsAsked = {
          [action.authorData.id]: {
            ...state[action.authorData.id],
            questions: state[action.authorData.id].questions.concat(action.question.id)
          }
        }
      
      return {
        ...state,
        ...questionsAsked
      }
    case LINK_USER_ANSWER :
      const questionsAnswered = {
          [action.authorData.id]: {
            ...state[action.authorData.id],
            answers: { ...state[action.authorData.id].answers, ...{ [action.question.id]: action.answer } }
          }
        }
      
      return {
        ...state,
        ...questionsAnswered
      }
    default :
      return state
  }
}