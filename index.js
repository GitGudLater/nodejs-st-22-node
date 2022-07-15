const csv = require('csvtojson');
const readableFS = require('fs').createReadStream("./nodejs-hw1-ex1.csv").pipe(csv({ delimiter: ';' }));
const writableFS = require('fs').createWriteStream('./hw1-ex2.txt');

readableFS.on('data', data => {
    writableFS.write(data.toString());
});

readableFS.on('error', error => console.error(error.message));

writableFS.on('ready', () => console.log('Complited'));
