const store = require('./../store.js')
const showBlogsTemplate = require('../templates/blog-listing.handlebars')

const getBlogSuccess = function (data, comments) {
  store.blogs = data.blogs
  console.log(data.blogs)
}

const showBlogs = function () {
  const showBlogsHtml = showBlogsTemplate({ blogs: store.blogs, comments: store.comments })
  $('.content').html(showBlogsHtml)
}

const getBlogFailure = function () {
  console.log('whoops')
}

const onCreateBlogSuccess = function (data) {
  $('form').trigger('reset')
  console.log('created')
}

const onCreateBlogFailure = function (data) {
  console.log('failed to create')
}

const onUpdateBlogSuccess = function (data) {
  $('form').trigger('reset')
  console.log('updated')
}

const onUpdateBlogFailure = function (data) {
  console.log('failed to update')
}

const onDestroyBlogSuccess = function (data) {
  console.log('destoyed')
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
  showBlogs
}
