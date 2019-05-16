'use strict'
const store = require('../../store')

const commentUpdateClicked = function (comment) {
  if (comment === store.currentUpdate) {
    return true
  } else {
    return false
  }
}

module.exports = commentUpdateClicked
