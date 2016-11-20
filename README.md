[![Build Status](https://travis-ci.org/bhalash/lexicographer.svg?branch=master)](https://travis-ci.org/bhalash/lexicographer) [![devDependencies Status](https://david-dm.org/bhalash/lexicographer/dev-status.png)](https://david-dm.org/bhalash/lexicographer?type=dev)

# Lexicographer
Lexicographer is a [lexicographic permutation][1] generator created as a direct result of [Project Euler's twenty-fourth problem][3].

One time, many years ago during my first pass through Project Euler, this problem [owned the shit out of me][4]. Like, badly owned me. For the life of me I couldn't make the mental translation from mathematical method to functional algorithm. I gave up in the end, and used a solution scalped from some random website.

Well, fuck that noise.

This is a fully-functional [functional][5] lexicographic permutation [generator][2] generator. It doesn't use some fancy algorithm or mathematical inside to jump to the solution of the exercise. No, fuck that. This code _owns the shit out of the entire problem_ of lexicographic permutation in an over-engineered way. There are [test suites][6] and [comment blocks][7] and [examples][8] and [recursive README files][9] full of foul-mouthed trash talk.

## Installation

    npm install lexicographer

## Testing

    npm run test

## Usage
(This also solves [problem 24][3].)

```javascript
#!/usr/bin/env node

const lexicographer = require('lexicographer');
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
```

## Copyright

Copyright (c) 2016 [Mark Grealish][10]. See [LICENSE](LICENSE) for details.

[1]: https://en.wikipedia.org/wiki/Permutation#Generation_in_lexicographic_order "Permutation: Generation in lexicographic order"
[2]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function* "function*"
[3]: https://projecteuler.net/problem=24 "Problem 24"
[4]: https://www.bhalash.com/archives/13544792394 "Project Euler Problem 24"
[5]: https://en.wikipedia.org/wiki/Functional_programming "Functional programming"
[6]: test/test.js
[7]: lexicographer.js
[8]: #usage
[9]: README.md
[10]: project_euler_solution.js
[11]: https://www.bhalash.com
