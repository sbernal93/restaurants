/**
 * Created by santiago on 5/1/16.
 */
'use strict';

/**
 * Dependencies
 */

const co = require('co');


/**
 * Run a generator function and print errors if any
 */

function run (fn) {
    co(fn).catch(function (err) {
        console.error(err.stack);
    });
}


/**
 * Expose fn
 */

module.exports = run;