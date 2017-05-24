'use strict'

class PostController {

  * index(request, response) {
    const ribbiter = yield Ribbiter.with('users').fetch();
    response.json(ribbiter);
  }

  * create(request, response) {
    //
  }

  * store(request, response) {
    const user_id = request.param('user_id');
    const input = request.only('body');
    input.user_id = user_id;
    input.user_id = request.authUser.id;

    const review = yield User.create(input);

    response.send(review);
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

module.exports = PostController
