'use strict'

const user = use('App/Model/User');
const Hash = use('Hash');

class UserController {

  * index(request, response) {
    //
  }

  * create(request, response) {
    //
  }

  * store(request, response) {
      const { email, username, password } = request.only('email', 'username', 'password');
      const user = yield User.create({ email, username, password: yield Hash.make(password) });
      response.send(user);
  }

  * show(request, response) {
    //
  }

  * edit(request, response) {
    //
  }

  * update(request, response) {
    //
  }

  * destroy(request, response) {
    //
  }

}

module.exports = UserController
