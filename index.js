const csv = require('csvtojson');
const readableFile = 'csv/nodejs-hw1-ex1.csv';
const writableFile = './hw1-ex2.txt';
const stream = require('stream')

stream.pipeline(
    require('fs').createReadStream(readableFile),
    csv({ delimiter: ';', colParser:{ amount:"number", price:"number"}, noheader: false, headers:['book','author','amount','price'], }),
    require('fs').createWriteStream(writableFile),
    (error) => {
        if (error) console.error(error.message);
    },
)