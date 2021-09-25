import {
  _getUsers,
} from '../db/_DATA.js'

export function getInitialData () {
  return Promise.all([
    _getUsers(),
  ]).then(([users]) => ({
    users,
  }))
}