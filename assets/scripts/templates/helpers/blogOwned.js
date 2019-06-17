'use strict'
const store = require('../../store')

const blogOwned = function (blog) {
  if (store.user) {
    if (blog === store.user._id) {
      return true
    }
  }
}

module.exports = blogOwned
