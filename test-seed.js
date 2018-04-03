"use strict";

let JSGA = require("./jsga.js");

let algorithm = JSGA({
    length: 10,
    radix: 10,
    fitness: m => m.reduce((p, c) => p + c),
    seed: [[9, 9, 9, 9, 9, 9, 9, 9, 9, 8],
           [9, 9, 9, 9, 9, 9, 9, 9, 9, 8],
           [9, 9, 9, 9, 9, 9, 9, 9, 9, 8],
           [9, 9, 9, 9, 9, 9, 9, 9, 9, 8],
           [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]],
    size: 50
});

for (let generation of algorithm.run(20)) {
    console.log(generation.best.params);
}
