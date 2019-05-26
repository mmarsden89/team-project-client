'use strict'
const store = require('../../store')

const smashedLike = function (likes) {
  if (store.user !== undefined) {
    if (likes.some(function (element) {
      return element === store.user._id
    }
    )) {
      return true
    }
  }
}
module.exports = smashedLike
