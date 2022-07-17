'use strict';

var csv = require('csvtojson');
var readableFile = 'csv/nodejs-hw1-ex1.csv';
var writableFile = './hw1-ex2.txt';
if (require('fs').existsSync(readableFile) && require('fs').existsSync(writableFile)) {
    var readableFS = require('fs').createReadStream(readableFile).pipe(csv({ delimiter: ';', colParser: { Amount: "number", Price: "number" }, noheader: false, headers: ['book', 'author', 'amount', 'price'] }));
    var writableFS = require('fs').createWriteStream(writableFile);
    readableFS.on('data', function (data) {
        writableFS.write(data.toString());
    });

    readableFS.on('error', function (error) {
        console.error(error.message);
    });

    writableFS.on('ready', function () {
        return console.log('Complited');
    });
} else {
    console.log('Error - be sure you are used correct filepaths');
}
