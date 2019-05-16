const store = require('./../store.js')
const showBlogsTemplate = require('../templates/blog-listing.handlebars')

const getBlogSuccess = function (data, comments) {
  store.blogs = data.blogs
  console.log(data.blogs)
}

const showBlogs = function () {
  const showBlogsHtml = showBlogsTemplate({ blogs: store.blogs, comments: store.comments })
  $('.content').html(showBlogsHtml)
  $('#create-blog-form').fadeIn(500)
  $('#blogs-back').fadeIn(500)
}

const blogsBack = function () {
  $('.content').fadeOut(500)
  $('#blogs-back').fadeOut(500)
}

const getBlogFailure = function () {
  console.log('whoops')
}

const onCreateBlogSuccess = function (data) {
  $('form').trigger('reset')
  console.log('created')
  showBlogs()
}

const onCreateBlogFailure = function (data) {
  console.log('failed to create')
}

const onUpdateBlogSuccess = function (data) {
  $('form').trigger('reset')
  console.log('updated')
  showBlogs()
}

const onUpdateBlogFailure = function (data) {
  console.log('failed to update')
}

const onDestroyBlogSuccess = function (data) {
  console.log('destoyed')
  showBlogs()
}

const onDestroyBlogFailure = function (data) {
  console.log('failed to destroy')
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
