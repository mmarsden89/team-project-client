const getFormFields = require('./../../../lib/get-form-fields.js')
const api = require('./api')
const ui = require('./ui')

const onGetComments = function () {
  api.getComments()
    .then(ui.getCommentSuccess)
    .catch(ui.getCommentFailure)
}

const onNewComment = function (event) {
  event.preventDefault()
  const id = $(event.target).data('blog')
  const data = getFormFields(event.target)
  api.createComment(id, data)
    .then(ui.onCreateCommentSuccess)
    .then(onGetComments)
    .catch(ui.onCreateCommentFailure)
  api.getComments()
}

const onUpdateComment = function (event) {
  event.preventDefault()
  const id = $(event.target).data('comment')
  const data = getFormFields(event.target)
  api.updateComment(data, id)
    .then(ui.onUpdateCommentSuccess)
    .then(onGetComments)
    .catch(ui.onUpdateCommentFailure)
  api.getComments()
}

const onDestroyComment = function (event) {
  event.preventDefault()
  const id = $(event.target).data('comment')
  api.destroyComment(id)
    .then(ui.onDestroyCommentSuccess)
    .then(onGetComments)
    .catch(ui.onDestroyCommentFailure)
  api.getComments()
}

const addHandlers = function (event) {
  $('.content').on('submit', '.create-comment-form', onNewComment)
  $('.content').on('click', '.comment-update', ui.showCommentUpdateForm)
  $('.content').on('submit', '.update-form-comment', onUpdateComment)
  $('.content').on('click', '.comments-button', onGetComments)
  $('.content').on('click', '.comment-delete', onDestroyComment)
}

module.exports = {
  addHandlers,
  onGetComments
}
