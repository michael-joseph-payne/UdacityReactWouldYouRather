import { RECEIVE_USERS, LINK_USER } from '../actions/users'

export default function users (state = {}, action) {
  switch(action.type) {
    case RECEIVE_USERS :
      return {
        ...state,
        ...action.users
      }
    case LINK_USER :
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
    default :
      return state
  }
}