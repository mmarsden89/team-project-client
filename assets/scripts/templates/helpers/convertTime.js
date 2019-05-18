'use strict'

const moment = require('moment')

const convertTime = function (time) {
  time = moment(time).format('MMMM Do YYYY, h:mm a')
  return time
}

module.exports = convertTime
