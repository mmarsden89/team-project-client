const store = require('./../store.js')
const showCommentsTemplate = require('../templates/comment-listing.handlebars')

store.currentUpdate = null

const getCommentFailure = function (data) {
  $('#user-div').fadeIn(50)
  $('#user-div').html('Something went wrong, please try again!')
  $('#user-div').fadeOut(8000)
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
  $('#user-div').fadeIn(50)
  $('#user-div').html('Your comment has been added!')
  $('#user-div').fadeOut(8000)
}

const onCreateCommentFailure = function (data) {
  $('#user-div').fadeIn(50)
  $('#user-div').html('Something went wrong, please try again!')
  $('#user-div').fadeOut(8000)
}

const onUpdateCommentSuccess = function (data) {
  $('form').trigger('reset')
  $('#user-div').fadeIn(50)
  $('#user-div').html('You successfully changed your comment!')
  $('#user-div').fadeOut(8000)
}

const onUpdateCommentFailure = function (data) {
  $('#user-div').fadeIn(50)
  $('#user-div').html('Something went wrong, please try again!')
  $('#user-div').fadeOut(8000)
}

const onDestroyCommentSuccess = function (data) {
  $('#user-div').fadeIn(50)
  $('#user-div').html('Comment deleted!!')
  $('#user-div').fadeOut(8000)
}

const onDestroyCommentFailure = function (data) {
  $('#user-div').fadeIn(50)
  $('#user-div').html('Something went wrong, please try again!')
  $('#user-div').fadeOut(8000)
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
