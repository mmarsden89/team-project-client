'use strict'
const store = require('../../store')

const commentOwned = function (comment) {
  if (store.user !== undefined) {
    if (comment === store.user._id) {
      return true
    }
  }
}

module.exports = commentOwned
