'use strict'
const store = require('../../store')

const hasComments = (id) => {
  if (store.comments.map(x => x.owner.id === id)) {
    return store.comments.text
  }
}

module.exports = hasComments
