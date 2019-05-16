'use strict'
const store = require('../../store')

const commentOwned = function (comment) {
  console.log('storeuserid is', store.user._id)
  console.log('commentownerid is', comment)
  if (comment === store.user._id) {
    return true
  }
}

module.exports = commentOwned
