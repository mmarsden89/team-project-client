'use strict'

const moment = require('moment')

const howLongAgo = function (time) {
  time = moment(time).fromNow()
  return time
}

module.exports = howLongAgo
