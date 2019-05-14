'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const showBlogsTemplate = require('./templates/blog-listing.handlebars')
const config = require('./config')
const store = require('./store')

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

const getBlogs = function () {
  return $.ajax({
    url: config.apiUrl + '/blogs',
    method: 'GET',
    headers: {
    }
  })
}
const onGetBlogs = function () {
  getBlogs()
    .then(getBlogSuccess)
    .then(showBlogs)
    .catch(getBlogFailure)
}

const getCommentFailure = function (data) {
  console.log('whoops')
}

const getCommentSuccess = function (data) {
  store.comments = data.comments
  console.log(store.comments)
}

const getComments = function () {
  return $.ajax({
    url: config.apiUrl + '/comments',
    method: 'GET',
    headers: {
    }
})
}

const onGetComments = function () {
  getComments()
    .then(getCommentSuccess)
    .catch(getCommentFailure)
}


$(() => {
  $('#clicky').on('click', onGetComments)
  $('#clicky').on('click', onGetBlogs)
})
