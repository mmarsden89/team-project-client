'use strict'
const store = require('../../store')

const commentUpdateClicked = function (comment) {
  if (comment === store.currentUpdate) {
    return true
  }
}

module.exports = commentUpdateClicked
