'use strict'
const config = require('../config')
const store = require('../store')

const getComments = function () {
  return $.ajax({
    url: config.apiUrl + `/comments`,
    method: 'GET',
    headers: {
    }
  })
}

const createComment = function (id, data) {
  return $.ajax({
    url: config.apiUrl + '/comments',
    method: 'POST',
    headers: {Authorization: 'Token token=' + store.user.token},
    data: {
      comment: {
        'blog': `${id}`,
        'text': `${data.comment.text}`
      }
    }
  })
}

const updateComment = function (data, id) {
  return $.ajax({
    url: config.apiUrl + `/comments/${id}`,
    method: 'PATCH',
    headers: {Authorization: 'Token token=' + store.user.token},
    data
  })
}

const destroyComment = function (id) {
  return $.ajax({
    url: config.apiUrl + `/comments/${id}`,
    method: 'DELETE',
    headers: {Authorization: 'Token token=' + store.user.token}
  })
}

module.exports = {
  getComments,
  createComment,
  updateComment,
  destroyComment
}
