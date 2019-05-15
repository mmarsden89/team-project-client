'use strict'
const store = require('../../store')

const blogOwned = function (blog) {
  if (blog.owner === store.user.id) {
    return true
  } else {
    return false
  }
}

module.exports = blogOwned
