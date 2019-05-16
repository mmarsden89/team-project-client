'use strict'
const store = require('../../store')

const loggedIn = function () {
  if (store.user !== undefined) {
    return true
  } else {
    return false
  }
}

module.exports = loggedIn
