#!/usr/bin/env node

const lexicographer = require('../');
const array = [...Array(10).keys()];
const breakpoint = 1000000;
let permutations = 0;

for (let value of lexicographer.permute(array)) {
    permutations++;

    if (permutations === breakpoint) {
        console.log(value.join(''));
        break;
    }
}
