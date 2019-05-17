const store = require('./../store.js')
const api = require(`./api.js`)

store.currentUpdate = null

const getCommentFailure = function (data) {
  $('#user-div').fadeIn(50)
  $('#user-div').html('Something went wrong, please try again!')
  $('#user-div').fadeOut(8000)
}

const getCommentSuccess = function (data) {
  store.comments = data.comments
}

const onCreateCommentSuccess = function (data) {
  $('form').trigger('reset')
  $('#user-div').fadeIn(50)
  $('#user-div').html('Your comment has been added!')
  $('#user-div').fadeOut(8000)
  api.getComments()
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

const showCommentUpdateForm = function (event) {
  store.currentUpdate = $(event.target).data('comment')
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
  showCommentUpdateForm
}
