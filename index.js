const csv = require('csvtojson');
const fs = require('fs');
try {
    console.log('script started');
    csv({ delimiter: ';' })
    .fromFile("./nodejs-hw1-ex1.csv")
    .then(jsonObj => { 
        try{
            fs.writeFileSync('./hw1-ex2.txt',JSON.stringify(jsonObj)); 
        }
        catch(error) {
            console.log(error);
        }
    }
    )
}
catch (error) {
    console.log(error);
}