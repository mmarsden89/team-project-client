const getFormFields = require('./../../../lib/get-form-fields.js')
const api = require('./api')
const ui = require('./ui')

const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const addHandlers = function (event) {
  // $('#new-blog-section').hide()
  $('#account-buttons').hide()
  $('#sign-up-back').on('click', ui.signUpBackUp)
  $('#change-pw-back').on('click', ui.changePwBackUp)
  $('#sign-up-form').hide()
  $('#change-password').hide()
  $('#login-to-signup').on('click', ui.loginToSignup)
  $('#change-pass').on('click', ui.toChangePassword)
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-password').on('submit', onChangePassword)
  $('#logout').on('click', onSignOut)
}

module.exports = {
  addHandlers
}
