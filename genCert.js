const fs = require("fs");
const path = require("path");

const PDFLib = require('pdf-lib');
const PDFDocument = PDFLib.PDFDocument;

const details = require('./eventDetails')
const authifyMailer = require('./authifyMailer')

const genCert = async (name,email) => {
    
    // reading template 
    const content = await fs.readFileSync(path.resolve(__dirname, "template.pdf"));

    // load template 
    const pdfDoc = await PDFDocument.load(content);

    // filling details
    const form = pdfDoc.getForm();

    const A_NAME = form.getTextField('A_NAME');
    const E_NAME = form.getTextField('E_NAME');
    const Y_NAME = form.getTextField('Y_NAME');

    A_NAME.setText(name);
    E_NAME.setText(details.eventName);
    Y_NAME.setText(details.ambassadorName);

    // make form immutable
    form.flatten();

    // save pdf buffer
    const pdfBytes = await pdfDoc.save();

    // write buffer to a new file
    const outputPath = path.resolve(__dirname+'/certificates',`cert_${name}.pdf`);
    await fs.writeFileSync(outputPath,pdfBytes);

    // mailing
    await authifyMailer(email,details.subject,details.body,outputPath,"certificate.pdf")
}

module.exports = genCert;