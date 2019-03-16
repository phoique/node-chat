const isAuth = (request, response, next) => {

  // if there is a session
  if (request.session.username) {
    next();
  } else {
    // login page redirect
    response.redirect('/');
  }
}

module.exports = isAuth;