import crosses = require('robust-segment-intersect');

// $ExpectType boolean
crosses([0, 0], [5, 5], [5, 0], [0, 5]);

// $ExpectError
crosses([1], [2], [3], [4]);
