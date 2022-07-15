'use strict';

var _nodeReadline = require('node:readline');

var readLine = _interopRequireWildcard(_nodeReadline);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var readLineAI = readLine.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

readLineAI.on('line', function (string) {
    return console.log(string.split('').reverse().concat('\n').join(''));
});
