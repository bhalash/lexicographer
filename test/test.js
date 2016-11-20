const tape = require('tape');
const lexicographer = require('../');
const permuter = lexicographer.permute([0, 1, 2]);

/**
 * permute() Method
 * =============================================================================
 */

tape('permute()', assert => {
    assert.plan(8);
    assert.equal( typeof lexicographer.permute, 'function');
    assert.deepEqual(permuter.next().value, [0, 1, 2]);
    assert.deepEqual(permuter.next().value, [0, 2, 1]);
    assert.deepEqual(permuter.next().value, [1, 0, 2]);
    assert.deepEqual(permuter.next().value, [1, 2, 0]);
    assert.deepEqual(permuter.next().value, [2, 0, 1]);
    assert.deepEqual(permuter.next().value, [2, 1, 0]);
    assert.equal(permuter.next().value, undefined);
});
