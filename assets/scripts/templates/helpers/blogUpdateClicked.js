'use strict'
const store = require('../../store')

const blogUpdateClicked = function (blog) {
  if (blog === store.updateBlog) {
    return true
  }
}

module.exports = blogUpdateClicked
