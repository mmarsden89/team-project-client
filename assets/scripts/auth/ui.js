const store = require('./../store.js')
const commentEvents = require('../comments/event')

const signUpSuccess = function (data) {
  console.log('success')
  $('form').trigger('reset')
  $('#sign-up-form').hide()
  $('#sign-up-form').fadeOut(500)
  setTimeout(signInFade, 520)
}

const signUpFailure = function (data) {
  console.log('signup failure')
  $('form').trigger('reset')
}

const signInSuccess = function (data) {
  console.log('success')
  store.user = data.user
  commentEvents.onGetComments()
  $('form').trigger('reset')
  $('#login-form').fadeOut(500)
  setTimeout(showAccountButtons, 525)
}

const showAccountButtons = function () {
  $('#account-buttons').fadeIn(500)
}

const signInFailure = function (data) {
  console.log('signin failure')
  $('form').trigger('reset')
}

const changePasswordSuccess = function (data) {
  console.log('success')
  $('form').trigger('reset')
  $('#change-password').fadeOut(500)
  setTimeout(showAccountButtons, 520)
}

const changePasswordFailure = function (data) {
  console.log('changepass failure')
  $('form').trigger('reset')
}

const signOutSuccess = function () {
  console.log('success')
  store.user.token = null
  $('#account-buttons').fadeOut(500)
  setTimeout(signInFade, 520)
}

const signOutFailure = function () {
  console.log('signout failure')
  $('form').trigger('reset')
  store.user.token = null
  $('#account-buttons').fadeOut(500)
  setTimeout(signInFade, 520)
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
