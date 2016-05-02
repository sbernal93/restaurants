/**
 * Created by santiago on 5/1/16.
 */
'use strict';

/*const mongorito = require('mongorito');
const run = require('./run');

const Model = mongorito.Model;
*/
// a user model
class User {
    /* collection(){
        return 'users';
    }*/
}


User.prototype.getAllUsers = function ( ) {
    return 'users';
};

User.prototype.findUserByProperty = function (prop, value) {

};

User.prototype.getUsers = function (start, limit) {

};

User.prototype.getUser = function ( id) {

};

User.prototype.addUser = function (newUser) {

};

User.prototype.updateUser = function (id, updatedUser) {

};

User.prototype.deleteUser = function (id) {

};

module.exports = User;