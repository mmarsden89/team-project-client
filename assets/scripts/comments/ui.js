const store = require('./../store.js')
const showCommentsTemplate = require('../templates/comment-listing.handlebars')

const getCommentFailure = function (data) {
  console.log('whoops')
}

const getCommentSuccess = function (data) {
  store.comments = data.comments
  console.log('============')
  console.log(store.comments)
  console.log('============')
}

const showComments = function (event) {
  const showCommentsHtml = showCommentsTemplate({ blogs: store.blogs, comments: store.comments })
  store.currentBlog = event.target.id
  console.log('!!!!!!!!!!!')
  console.log(store.currentBlog)
  console.log('!!!!!!!!!!!')
  $(event.target).find('.comment-content').html(showCommentsHtml)
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

const showCommentUpdateForm = function () {
  store.currentUpdate = null
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
