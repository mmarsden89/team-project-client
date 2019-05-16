'use strict'

const authEvents = require('./auth/events')
const blogEvents = require('./blogs/events')
const commentEvents = require('./comments/event')

$(() => {
  authEvents.addHandlers()
  blogEvents.addHandlers()
  commentEvents.addHandlers()
  blogEvents.onGetBlogsTimeout()
})
