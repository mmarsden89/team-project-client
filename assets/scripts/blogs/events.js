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

const onBackToBlogs = function () {
  if (store.user) {
    ui.showBlogs()
  } else {
    ui.onOpen()
  }
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

const onUpdateBlogTimeout = function () {
  api.getSingleBlog(store.currentBlog)
    .then(ui.singleBlog)
    .then(store.currentBlog = null)
}

const onUpdateBlog = function (event) {
  event.preventDefault()
  store.updateBlog = null
  const id = $(event.target).data('blog')
  const data = getFormFields(event.target)
  api.updateBlog(data, id)
    .then(ui.onUpdateBlogSuccess)
    .catch(ui.onUpdateBlogFailure)
  setTimeout(onUpdateBlogTimeout, 250)
}

const onDestroyBlog = function (event) {
  event.preventDefault()
  const id = $(event.target).data('delete-blog')
  api.destroyBlog(id)
    .then(onGetBlogs)
    .then(ui.onDestroyBlogSuccess)
    .catch(ui.onDestroyBlogFailure)
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
    onGetBlogs()
    store.currentUpdate = null
  } else {
    onGetBlogs()
    store.currentUpdate = null
  }
}

const onEditSingleComment = function (event) {
  store.currentUpdate = $(event.target).data('edit-comment')
  api.getSingleBlog(store.currentBlog)
    .then(ui.singleBlog)
}

const blogUpdateButtonClick = function (event) {
  store.updateBlog = $(event.target).data('edit-blog')
  api.getSingleBlog(store.currentBlog)
    .then(ui.singleBlog)
}

const onSmashThatLike = function (event) {
  const id = $(event.target).data('like')
  api.smashThatLike(id)
    .then(onGetBlogs)
  // $(event.target).css('display', 'none')
  // $('.fas').css('display', 'block')
}

const addHandlers = function (event) {
  window.setTimeout(ui.onOpen, 1000)
  $('.h1Title').on('click', onBackToBlogs)
  $('.update-form').hide()
  $('.content').on('click', '.blog-create-btn', onGetBlogsTimeout)
  $('.content').on('submit', '.update-form', onUpdateBlog)
  $('.content').on('submit', '#create-blog-form', onNewBlog)
  $('.content').on('click', '.blog-delete', onDestroyBlog)
  $('.content').on('click', '.edit-blog', blogUpdateButtonClick)
  $('.content').on('click', '.view-comments', onGetSingleBlog)
  $('.content').on('click', '.right-x', singleBacktoView)
  $('.content').on('click', '.edit-comment', onEditSingleComment)
  $('.content').on('click', '.far', onSmashThatLike)
}

module.exports = {
  addHandlers,
  onGetBlogsTimeout,
  onGetSingleBlog
}
