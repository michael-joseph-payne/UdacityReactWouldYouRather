export const RECEIVE_USERS = 'RECEIVE_USERS'
export const LINK_USER = 'LINK_USER'

export function receiveUsers (users) {
  return {
    type: RECEIVE_USERS,
    users,
  }
}

export function linkUser (question, authorData) {
  return {
    type: LINK_USER,
    question,
    authorData
  }
}