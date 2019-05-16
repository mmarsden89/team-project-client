'use strict'
const store = require('../../store')

const commentUpdateClicked = function () {
  if (!store.currentUpdate) {
    store.currentUpdate = false
    return true
  }
}

module.exports = commentUpdateClicked
