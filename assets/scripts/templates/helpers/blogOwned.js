'use strict'
const store = require('../../store')

const blogOwned = function (blog) {
  if (store.user) {
    if (blog === store.user._id) {
      console.log(blog)
      console.log(store.user)
      console.log('blow owner is true')
      return true
    } else {
      console.log(blog)
      console.log('console log', store.user)
      console.log('blowowner is false')
      return false
    }
  }
}

module.exports = blogOwned
