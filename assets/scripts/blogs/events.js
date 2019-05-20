const getFormFields = require('./../../../lib/get-form-fields.js')
const api = require('./api')
const ui = require('./ui')
const commentsEvents = require('../comments/event')
const store = require('../store')

const onGetBlogs = function () {
  api.getBlogs()
    .then(ui.getBlogSuccess)
    .then(ui.showBlogs)
    .catch(ui.getBlogFailure)
}

const onNewBlog = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.createBlog(data)
    .then(ui.onCreateBlogSuccess)
    .catch(ui.onCreateBlogFailure)
  api.getBlogs()
  ui.showBlogs()
}

const onUpdateBlog = function (event) {
  event.preventDefault()
  const id = $(event.target).data('blog')
  const data = getFormFields(event.target)
  api.updateBlog(data, id)
    .then(ui.onUpdateBlogSuccess)
    .catch(ui.onUpdateBlogFailure)
  api.getBlogs()
}

const onDestroyBlog = function (event) {
  event.preventDefault()
  const id = $(event.target).data('blog')
  api.destroyBlog(id)
    .then(ui.onDestroyBlogSuccess)
    .catch(ui.onDestroyBlogFailure)
  api.getBlogs()
}

const onGetBlogsTimeout = function () {
  setTimeout(commentsEvents.onGetComments, 50)
  setTimeout(onGetBlogs, 500)
}

const onGetSingleBlog = function (event) {
  event.preventDefault()
  const id = $(event.currentTarget).data('blog-comment')
  store.currentBlog = id
  api.getSingleBlog(id)
    .then(ui.singleBlog)
}

const singleBacktoView = function (event) {
  event.preventDefault()
  if (store.user !== undefined) {
    ui.showBlogs()
    store.currentUpdate = null
  } else {
    ui.onOpen()
    store.currentUpdate = null
  }
}

const onEditSingleComment = function (event) {
  console.log('store.currentblog is!!!! ', store.currentBlog)
  store.currentUpdate = $(event.target).data('edit-comment')
  api.getSingleBlog(store.currentBlog)
    .then(ui.singleBlog)
}

const addHandlers = function (event) {
  window.setTimeout(ui.onOpen, 1000)
  $('.blog-create-btn').on('click', onGetBlogsTimeout)
  $('.content').on('submit', '.update-form', onUpdateBlog)
  $('#create-blog-form').on('submit', onNewBlog)
  $('.content').on('click', '.blog-delete', onDestroyBlog)
  // $('.content').on('click', '.button', onGetBlogsTimeout)
  $('.content').on('click', '.blog-update', ui.blogUpdateButtonClick)
  $('.content').on('click', '.view-comments', onGetSingleBlog)
  $('.content').on('click', '.right-x', singleBacktoView)
  $('.content').on('click', '.edit-comment', onEditSingleComment)
}

module.exports = {
  addHandlers,
  onGetBlogsTimeout,
  onGetSingleBlog
}
