'use strict'
const store = require('../../store')

const commentUpdateClicked = function () {
  if (store.currentUpdate) {
    return true
  }
}

module.exports = commentUpdateClicked
