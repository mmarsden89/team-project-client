const store = require('./../store.js')
const showCommentsTemplate = require('../templates/comment-listing.handlebars')

const getCommentFailure = function (data) {
  console.log('whoops')
}

const getCommentSuccess = function (data) {
  store.comments = data.comments
  console.log(store.comments)
}

const showComments = function () {
  const showCommentsHtml = showCommentsTemplate({ blogs: store.blogs, comments: store.comments })
  $('.commentContent').html(showCommentsHtml)
}

const onCreateCommentSuccess = function (data) {
  $('form').trigger('reset')
  console.log('created')
}

const onCreateCommentFailure = function (data) {
  console.log('failed to create')
}

const onUpdateCommentSuccess = function (data) {
  $('form').trigger('reset')
  console.log('updated')
}

const onUpdateCommentFailure = function (data) {
  console.log('failed to update')
}

const onDestroyCommentSuccess = function (data) {
  console.log('destoyed')
}

const onDestroyCommentFailure = function (data) {
  console.log('failed to destroy')
}
module.exports = {
  getCommentSuccess,
  getCommentFailure,
  onCreateCommentSuccess,
  onCreateCommentFailure,
  onUpdateCommentSuccess,
  onUpdateCommentFailure,
  onDestroyCommentSuccess,
  onDestroyCommentFailure,
  showComments
}
