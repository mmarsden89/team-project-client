'use strict'
const store = require('../../store')

const commentBelongsTo = function (comment) {
  if (comment === store.currentBlog) {
    return true
  } else {
    return false
  }
}

module.exports = commentBelongsTo
