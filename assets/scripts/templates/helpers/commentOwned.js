'use strict'
const store = require('../../store')

const commentOwned = function (comment) {
  if (comment === store.user.id) {
    return true
  }
}

module.exports = commentOwned
