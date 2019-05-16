'use strict'
const store = require('../../store')

const notLoggedIn = function () {
  if (store.user === undefined) {
    return true
  } else {
    return false
  }
}

module.exports = notLoggedIn
