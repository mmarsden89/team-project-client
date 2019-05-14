'use strict'
const store = require('../../store')

const loggedIn = function () {
  if (store.user !== null) {
    console.log('true')
    return true
  } else {
    console.log('false')
    return false
  }
}

module.exports = loggedIn
