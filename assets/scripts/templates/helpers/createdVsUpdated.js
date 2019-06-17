'use strict'

const convertTime = function (time) {
  if (time.updatedAt !== time.createdAt) {
    return true
  }
}

module.exports = convertTime
