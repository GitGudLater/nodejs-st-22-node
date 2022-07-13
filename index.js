import * as readLine from 'node:readline';

var readLineAI = readLine.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false,
});

readLineAI.on('line', string => console.log(
    string.split('').reverse().concat('\n').join('')
));