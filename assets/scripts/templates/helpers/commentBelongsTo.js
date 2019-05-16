'use strict'

const commentBelongsTo = function (blog, comment) {
  if (blog === comment) {
    return true
  }
}

module.exports = commentBelongsTo
