const getFormFields = require('./../../../lib/get-form-fields.js')
const api = require('./api')
const ui = require('./ui')
const store = require('../store')
const blogApi = require('../blogs/api')
const blogUi = require('../blogs/ui')

const onGetComments = function () {
  api.getComments()
    .then(ui.getCommentSuccess)
    .catch(ui.getCommentFailure)
}

const onNewComment = function (event) {
  event.preventDefault()
  const id = $(event.target).data('blog-comment')
  const data = getFormFields(event.target)
  api.createComment(id, data)
    .then(ui.onCreateCommentSuccess)
    .catch(ui.onCreateCommentFailure)
  api.getComments()
  setTimeout(getSingleBlogCommentUpdate, 500)
}

const getSingleBlogCommentUpdate = function () {
  blogApi.getSingleBlog(store.currentBlog)
    .then(blogUi.singleBlog)
}

const onUpdateComment = function (event) {
  event.preventDefault()
  const id = $(event.target).data('comment-update')
  const data = getFormFields(event.target)
  api.updateComment(data, id)
    .then(ui.onUpdateCommentSuccess)
    .then(store.currentUpdate = null)
    .catch(ui.onUpdateCommentFailure)
  setTimeout(getSingleBlogCommentUpdate, 500)
}

const onDestroyComment = function (event) {
  event.preventDefault()
  const id = $(event.target).data('delete-comment')
  api.destroyComment(id)
    .then(ui.onDestroyCommentSuccess)
    .then(onGetComments)
    .catch(ui.onDestroyCommentFailure)
  setTimeout(getSingleBlogCommentUpdate, 500)
}

const addHandlers = function (event) {
  $('.content').on('submit', '.create-comment-form', onNewComment)
  $('.content').on('submit', '.update-form-comment', onUpdateComment)
  $('.content').on('click', '.comments-button', onGetComments)
  $('.content').on('click', '.comment-delete', onDestroyComment)
}

module.exports = {
  addHandlers,
  onGetComments
}
