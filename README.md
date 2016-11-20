[![Build Status](https://travis-ci.org/bhalash/lexicographer.svg?branch=master)](https://travis-ci.org/bhalash/lexicographer) [![devDependencies Status](https://david-dm.org/bhalash/lexicographer/dev-status.png)](https://david-dm.org/bhalash/lexicographer?type=dev)

# Lexicographer
Lexicographer is a [lexicographic permutation][1] generator created as a direct result of [Project Euler's 24th problem][3].

One time, many years ago during my first pass through Project Euler, this problem [owned the shit out of me][4]. Like, badly owned me. For the life of me I couldn't make the mental translation from mathematical method to functional algorithm. I gave up in the end, and used a solution scalped from some random website.

Well, fuck that noise.

This is a fully-functional [functional][5] lexicographic permutation [generator][2] generator. It dosn't use some fancy algorithm or mathematical inside to jump to the solution of the exercise. No, fuck that. This code _owns the shit out of the entire problem_ of lexicographic permutation in an over-engineered way. There are [test suites][6] and [comment blocks][7] and [examples][8] and [recursive README files][9] full of foul-mouthed trash talk.

## Installation

    npm install lexicographer

## Testing

    npm run test

## Usage

```javascript
const lexicographer = require('lexicographer');

let permuter = lexicographer.permute([0, 1, 2]),
    next = permuter.next();

while (!next.done) {
    console.log(next.value);
    next = permuter.next();
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
[8]: #Usage
[9]: README.md
[10]: https://www.bhalash.com
