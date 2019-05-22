'use strict'
const config = require('../config')
const store = require('../store')

const getBlogs = function () {
  return $.ajax({
    url: config.apiUrl + '/blogs',
    method: 'GET',
    headers: {
    }
  })
}

const getSingleBlog = function (id) {
  return $.ajax({
    url: config.apiUrl + `/blogs/${id}`,
    method: 'GET',
    headers: {
    }
  })
}

const createBlog = function (data) {
  return $.ajax({
    url: config.apiUrl + '/blogs',
    method: 'POST',
    headers: {Authorization: 'Token token=' + store.user.token},
    data: {
      blog: {
        'title': `${data.blog.title}`,
        'text': `${data.blog.text}`,
        'username': `${store.user.username}`
      }
    }
  })
}

const updateBlog = function (data, id) {
  return $.ajax({
    url: config.apiUrl + `/blogs/${id}`,
    method: 'PATCH',
    headers: {Authorization: 'Token token=' + store.user.token},
    data
  })
}

const destroyBlog = function (id) {
  return $.ajax({
    url: config.apiUrl + `/blogs/${id}`,
    method: 'DELETE',
    headers: {Authorization: 'Token token=' + store.user.token}
  })
}

module.exports = {
  getBlogs,
  createBlog,
  updateBlog,
  destroyBlog,
  getSingleBlog
}
