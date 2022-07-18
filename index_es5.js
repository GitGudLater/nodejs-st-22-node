'use strict';

var csv = require('csvtojson');
var readableFile = 'csv/nodejs-hw1-ex1.csv';
var writableFile = './hw1-ex2.txt';
var stream = require('stream');

stream.pipeline(require('fs').createReadStream(readableFile).pipe(csv({ delimiter: ';', colParser: { amount: "number", price: "number" }, noheader: false, headers: ['book', 'author', 'amount', 'price'] })), require('fs').createWriteStream(writableFile), function (error) {
    if (error) console.error(error);
});
