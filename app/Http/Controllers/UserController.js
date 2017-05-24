'use strict'

const User = use('App/Model/User');
const Hash = use('Hash');

class UserController {

  * index(request, response) {
    const users = yield User.all();

    respond.send(users);
  }

  * create(request, response) {
    //
  }

  * store(request, response) {
      const { email, username, password } = request.only('email', 'username', 'password');
      const user = yield User.create({ email, username, password: yield Hash.make(password) });
      response.send(user);
  }

  * login(request, response) {
  const { username, password } = request.only('username', 'password');

  const user = yield User.query().where({ username }).firstOrFail();
  const isValid = yield Hash.verify(password, user.password);

  if (!isValid) {
    return response.status(401).json({
      message: 'Invalid username/password'
    });
  }

  // create a special passcode for the user (called a token)
  const token = yield request.auth.generate(user);
  // send the token to the user
  response.json({ token });
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
