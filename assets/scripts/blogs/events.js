const getFormFields = require('./../../../lib/get-form-fields.js')
const api = require('./api')
const ui = require('./ui')

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
}

const onUpdateBlog = function (event) {
  event.preventDefault()
  const id = $(event.target).data('blog')
  console.log('id is', id)
  const data = getFormFields(event.target)
  console.log(data)
  api.updateBlog(data, id)
    .then(ui.onUpdateBlogSuccess)
    .catch(ui.onUpdateBlogFailure)
}

const onDestroyBlog = function (event) {
  event.preventDefault()
  console.log(event)
  const id = $(event.target).data('blog')
  console.log(id)
  api.destroyBlog(id)
    .then(ui.onDestroyBlogSuccess)
    .catch(ui.onDestroyBlogFailure)
}

const addHandlers = function (event) {
  $('.content').on('submit', '.update-form', onUpdateBlog)
  $('#blogs-back').fadeOut()
  $('#clicky').on('click', onGetBlogs)
  $('#blogs-back').on('click', ui.blogsBack)
  $('#create-blog-form').on('submit', onNewBlog)
  $('#place').on('submit', onUpdateBlog)
  $('.content').on('click', '.btn-danger', onDestroyBlog)
}

module.exports = {
  addHandlers
}
