'use strict'
const store = require('../../store')

const commentBelongsTo = function (comment) {
  if (comment.blog === store.currentBlog) {
    return true
  } else {
    return false
  }
}

module.exports = commentBelongsTo
