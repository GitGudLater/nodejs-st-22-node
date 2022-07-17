const csv = require('csvtojson');
const readableFile = 'csv/nodejs-hw1-ex1.csv';
const writableFile = './hw1-ex2.txt';
if( require('fs').existsSync(readableFile) && require('fs').existsSync(writableFile)) {
    const readableFS = require('fs').createReadStream(readableFile).pipe(csv({ delimiter: ';', colParser:{ Amount:"number", Price:"number"}, noheader: false, headers:['book','author','amount','price'], }));
    const writableFS = require('fs').createWriteStream(writableFile);
    readableFS.on('data', data => {
        writableFS.write(data.toString());
    });
    
    readableFS.on('error', (error) => {
        console.error(error.message);
    });
    
    writableFS.on('ready', () => console.log('Complited'));
}
else {
    console.log('Error - be sure you are used correct filepaths');
}
