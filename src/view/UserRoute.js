/**
 * Created by santiago on 5/1/16.
 */
'use strict';

//const Hapi = require('hapi');
var Joi = require('joi');
var UserController = require('../controller/UserController');

exports.register = function(server, options, next) {

    var userController = new UserController();

    server.bind(userController);

    // Declare routes
    server.route([
        {
            method: 'GET',
            path: '/users',
            config: {
                handler: userController.index,
                validate: {
                    query: Joi.object().keys({
                        start: Joi.number().min(0),
                        limit: Joi.number().min(1)
                    })
                }
            }
        },
        {
            method: 'GET',
            path: '/users/{id}',
            config: {
                handler: userController.show,
                validate: {
                    params: {
                        id: Joi.string().regex(/[a-zA-Z0-9]{16}/)
                    }
                }
            }
        },
        {
            method: 'POST',
            path: '/users',
            config: {
                handler: userController.store,
                validate: {
                    payload: Joi.object().length(1).keys({
                        task: Joi.string().required().min(1).max(60)
                    })
                }
            }
        },
        {
            method: 'PUT',
            path: '/users/{id}',
            config: {
                handler: userController.update,
                validate: {
                    params: {
                        id: Joi.string().regex(/[a-zA-Z0-9]{16}/)
                    },
                    payload: Joi.object().length(1).keys({
                        task: Joi.string().required().min(1).max(60)
                    })
                }
            }
        },
        {
            method: 'DELETE',
            path: '/users/{id}',
            config: {
                handler: userController.destroy,
                validate: {
                    params: {
                        id: Joi.string().regex(/[a-zA-Z0-9]{16}/)
                    }
                }
            }
        }
    ]);

    next();

};

exports.register.attributes = {
    name: 'routes-user',
    version: '1.0.1'
};