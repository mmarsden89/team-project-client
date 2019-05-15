'use strict'
const store = require('../../store')

const commentOwned = function (comment) {
  if (comment === store.currentBlog) {
    return true
  } else {
    return false
  }
}

module.exports = commentOwned
