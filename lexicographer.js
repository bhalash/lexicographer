/**
 * Lexicographic permutation generator.
 *
 * Project Euler #24 once owned the shit out of me, so I came back and owned the
 * shit out of it. This is a JavaScript generator which takes an array or
 * array-like collection and returns an iterator object that'll permute it
 * lexicographically until the last state is reached.
 *
 * @see https://projecteuler.net/problem=24
 * @see https://en.wikipedia.org/wiki/Permutation#Generation_in_lexicographic_order
 */

const Lexicographer = function() {};

/**
 * Find the last index in an array per the given predicate.
 *
 * @private
 * @param {array} array - Array or array-like collection.
 * @param {function} predicate - Predicate callback to test conditions.
 * @param {number=} [index=array.length - 1] - Starting index.
 * @return {number} - First found index matching predicate. -1 if not found.
 */

function findLastIndex(array, predicate, index) {
    'use strict';

    if (!Number.isInteger(index)) {
        index = array.length - 1;
    }

    if (index < 0 || predicate(array[index], index, array)) {
        return index;
    } else {
        return findLastIndex(array, predicate, index - 1);
    }
}

/**
 * Lexicographic permutation generator. Strings should be split and joined
 * outside this generator.
 *
 * The first yielded value is the initial state of the array-like collection.
 * This is the valid starting point, but it means an object in an
 * already-complete state will yield itself.
 *
 * @example
 *
 *   > let permuter = require('lexicographer').permute([2, 1, 0]);
 *   > permuter.next();
 *   > { value: [ 2, 1, 0 ], done: false }
 *   > permuter.next()
 *   > { value: undefined, done: true }
 *
 * @public
 * @requires findLastIndex
 * @param {array} array - Any array-like collection.
 * @return {object} - Iteration generator for passed array collection.
 */

Lexicographer.prototype.permute = function*(array) {
    'use strict';

    let pivot, largest, successor, temp;
    array = array.slice();

    while (pivot !== -1) {
        /* 0. Yield first to ensure the proper first iteration (the unchanged
         * collection) is output. */
        yield array;

        pivot = findLastIndex(array, (number, index) => {
            // 1. Find the pivot for operations.
            return number < array[index + 1];
        });

        // 2. The big element next to the pivot.
        largest = pivot + 1;

        successor = findLastIndex(array, number => {
            /* 3. Last element, such that it is bigger than the pivot, and smaller
             * or equal to the largest. */
            return array[pivot] < number && number <= array[largest];
        });

        // 4. Swap the pivot and successor.
        temp = array[pivot];
        array[pivot] = array[successor];
        array[successor] = temp;

        // 5. Reverse the array after the pivot.
        array = array.slice(0, largest).concat(array.slice(largest).reverse());
    }
};

module.exports = Object.create(Lexicographer.prototype);
