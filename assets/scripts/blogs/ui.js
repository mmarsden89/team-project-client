const store = require('./../store')
const events = require('./events')
const showBlogsTemplate = require('../templates/blog-listing.handlebars')

const getBlogSuccess = function (data, comments) {
  store.blogs = data.blogs
}

const showBlogs = function () {
  const showBlogsHtml = showBlogsTemplate({ blogs: store.blogs, comments: store.comments })
  $('#new-blog-section').show()
  $('.content').html(showBlogsHtml)
  $('#create-blog-form').fadeIn(500)
  $('#blogs-back').fadeIn(500)
}

const blogsBack = function () {
  $('.content').fadeOut(500)
  $('#blogs-back').fadeOut(500)
}

const getBlogFailure = function () {
}

const onCreateBlogSuccess = function (data) {
  $('form').trigger('reset')
}

const onCreateBlogFailure = function (data) {
}

const onUpdateBlogSuccess = function (data) {
  $('form').trigger('reset')
  showBlogs()
}

const onUpdateBlogFailure = function (data) {
}

const onDestroyBlogSuccess = function (data) {
  showBlogs()
}

const onDestroyBlogFailure = function (data) {
}

module.exports = {
  getBlogSuccess,
  getBlogFailure,
  onCreateBlogSuccess,
  onCreateBlogFailure,
  onUpdateBlogSuccess,
  onUpdateBlogFailure,
  onDestroyBlogSuccess,
  onDestroyBlogFailure,
  showBlogs,
  blogsBack
}
