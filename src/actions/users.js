export const RECEIVE_USERS = 'RECEIVE_USERS'
export const LINK_USER_QUESTION = 'LINK_USER_QUESTION'
export const LINK_USER_ANSWER = 'LINK_USER_ANSWER'

export function receiveUsers (users) {
  return {
    type: RECEIVE_USERS,
    users,
  }
}

export function linkUserQuestion (question, authorData) {
  return {
    type: LINK_USER_QUESTION,
    question,
    authorData
  }
}

export function linkUserAnswer (answer, question, authorData) {
  return {
    type: LINK_USER_ANSWER,
    answer,
    question,
    authorData
  }
}