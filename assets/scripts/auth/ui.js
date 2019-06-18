const store = require('./../store.js')
const commentEvents = require('../comments/event')
const blogEvents = require('../blogs/events')
const blogUi = require('../blogs/ui')

const signUpSuccess = function (data) {
  $('form').trigger('reset')
  $('#sign-up-form').hide()
  $('#sign-up-form').fadeOut(500)
  setTimeout(signInFade, 520)
  $('#user-div').html('Sucessfully signed up!')
  $('#user-div').fadeOut(2000)
}

const signUpFailure = function (data) {
  $('form').trigger('reset')
  $('#user-div').html('Something went wrong, please try again!')
  $('#user-div').fadeOut(2000)
}

const signInSuccess = function (data) {
  // $('#new-blog-section').show()
  store.user = data.user
  commentEvents.onGetComments()
  $('form').trigger('reset')
  $('#login-form').fadeOut(500)
  $('#user-div').html('Sucessfully signed in!')
  $('#user-div').fadeOut(2000)
  setTimeout(showAccountButtons, 525)
  blogEvents.onGetBlogsTimeout()
}

const showAccountButtons = function () {
  $('#account-buttons').fadeIn(500)
}

const signInFailure = function (data) {
  $('form').trigger('reset')
  $('#user-div').html('Something went wrong, please try again!')
  $('#user-div').fadeOut(2000)
}

const changePasswordSuccess = function (data) {
  $('form').trigger('reset')
  $('#change-password').fadeOut(500)
  setTimeout(showAccountButtons, 520)
  $('#user-div').html('Your password has been changed!')
  $('#user-div').fadeOut(2000)
}

const changePasswordFailure = function (data) {
  $('form').trigger('reset')
  $('#user-div').html('Something went wrong, please try again!')
  $('#user-div').fadeOut(2000)
}

const signOutSuccess = function () {
  // $('#new-blog-section').hide()
  store.user.token = null
  store.user = undefined
  $('#account-buttons').fadeOut(500)
  setTimeout(signInFade, 520)
  $('#user-div').html('You signed out!')
  $('#user-div').fadeOut(2000)
  blogUi.onOpen()
}

const signOutFailure = function () {
  $('form').trigger('reset')
  store.user.token = null
  $('#account-buttons').fadeOut(500)
  setTimeout(signInFade, 520)
  $('#user-div').html('Something went wrong, please try again!')
  $('#user-div').fadeOut(2000)
}

const signUpBackUp = function () {
  event.preventDefault()
  $('form').trigger('reset')
  $('#sign-up-form').fadeOut(500)
  $('#login-form').fadeIn(500)
}

const changePwBackUp = function () {
  event.preventDefault()
  $('form').trigger('reset')
  $('#change-password').fadeOut(500)
  $('#account-buttons').fadeIn(500)
}

const signInFade = function () {
  $('#login-form').fadeIn(500)
}

const signUpFormFadeIn = function () {
  $('#sign-up-form').fadeIn(500)
}

const loginToSignup = function () {
  $('#login-form').fadeOut(500)
  setTimeout(signUpFormFadeIn, 500)
}

const toChangePassword = function () {
  $('#account-buttons').fadeOut(500)
  setTimeout(changePassShow, 520)
}

const changePassShow = function () {
  $('#change-password').fadeIn(500)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure,
  loginToSignup,
  toChangePassword,
  signUpBackUp,
  changePwBackUp
}
