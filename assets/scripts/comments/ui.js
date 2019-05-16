const store = require('./../store.js')
const showCommentsTemplate = require('../templates/comment-listing.handlebars')

store.currentUpdate = null

const getCommentFailure = function (data) {
}

const getCommentSuccess = function (data) {
  store.comments = data.comments
}

const showComments = function (event) {
  const showCommentsHtml = showCommentsTemplate({ blogs: store.blogs, comments: store.comments })
  store.currentBlog = event.target.id
  $(event.target).find('.comment-content').html(showCommentsHtml)
}

const onCreateCommentSuccess = function (data) {
  $('form').trigger('reset')
}

const onCreateCommentFailure = function (data) {
}

const onUpdateCommentSuccess = function (data) {
  $('form').trigger('reset')
}

const onUpdateCommentFailure = function (data) {
}

const onDestroyCommentSuccess = function (data) {
}

const onDestroyCommentFailure = function (data) {
}

const showCommentUpdateForm = function () {
  store.currentUpdate = true
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
  showComments,
  showCommentUpdateForm
}
