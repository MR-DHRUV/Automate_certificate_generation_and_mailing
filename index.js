const genCert = require('./genCert');

const fs = require("fs");
const readXlsxFile = require('read-excel-file/node')

// regex expression to validate an email address
const isEmail = (email) => {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

// reading spreadsheet to obtain the data 
readXlsxFile(fs.createReadStream('./data.xlsx')).then((rows) => {
    rows.map((row) => {
        // check for validity of email and name
        if (row[0].length > 1 && isEmail(row[1])) {
            // if valid call genCert which will generate the certifiacte and email it
            genCert(row[0], row[1]);
        }
    })
})