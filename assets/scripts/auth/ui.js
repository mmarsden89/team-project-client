const store = require('./../store.js')

const signUpSuccess = function (data) {
  $('form').trigger('reset')
}

const signUpFailure = function (data) {
  $('form').trigger('reset')
}

const signInSuccess = function (data) {
  store.user = data.user
}

const signInFailure = function (data) {
  $('form').trigger('reset')
}

const changePasswordSuccess = function (data) {
  $('form').trigger('reset')
}

const changePasswordFailure = function (data) {
  $('form').trigger('reset')
}

const signOutSuccess = function () {
  store.user = null
}

const signOutFailure = function () {
  $('form').trigger('reset')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
