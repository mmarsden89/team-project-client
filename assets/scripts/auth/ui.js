const store = require('./../store.js')

const signUpSuccess = function (data) {
  console.log('success')
  $('form').trigger('reset')
  $('#sign-up-form').hide()
}

const signUpFailure = function (data) {
  console.log('failure')
  $('form').trigger('reset')
}

const signInSuccess = function (data) {
  console.log('success')
  store.user = data.user
  $('form').trigger('reset')
  $('#login-form').hide()
}

const signInFailure = function (data) {
  console.log('failure')
  $('form').trigger('reset')
}

const changePasswordSuccess = function (data) {
  console.log('success')
  $('form').trigger('reset')
}

const changePasswordFailure = function (data) {
  console.log('failure')
  $('form').trigger('reset')
}

const signOutSuccess = function () {
  console.log('success')
  store.user = null
}

const signOutFailure = function () {
  console.log('failure')
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
