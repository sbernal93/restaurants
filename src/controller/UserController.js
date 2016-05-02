/**
 * Created by santiago on 5/1/16.
 */
'use strict';

var Boom = require('boom');
var UserModel = require('../model/entities/odm/mongorito/user');

function UserController() {
  this.userModel = new UserModel();
}

//[GET] /users
UserController.prototype.index = function (request, reply) {
    reply(this.userModel.getAllUsers());
};

UserController.prototype.show = function (request, reply) {

};

UserController.prototype.store = function (request, reply) {

};

UserController.prototype.update = function (request, reply) {

};

UserController.prototype.destroy = function (request, reply) {

};


module.exports = UserController;