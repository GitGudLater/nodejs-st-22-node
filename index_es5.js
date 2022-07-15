'use strict';

var csv = require('csvtojson');
var readableFS = require('fs').createReadStream("./nodejs-hw1-ex1.csv").pipe(csv({ delimiter: ';' }));
var writableFS = require('fs').createWriteStream('./hw1-ex2.txt');

readableFS.on('data', function (data) {
    writableFS.write(data.toString());
});

readableFS.on('error', function (error) {
    return console.error(error.message);
});

writableFS.on('ready', function () {
    return console.log('Complited');
});
