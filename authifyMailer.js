require('dotenv').config()
const nodemailer = require('nodemailer');

const details = require('./eventDetails');

// General mailer to send emails
const authifyMailer = async(to, sub, body, filePath, fileName) => {
    const mailPass = process.env.EMAIL_PASS2;
    const mail = process.env.EMAIL;

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: mail,
            pass: mailPass
        }
    });

    var mailOptions = {
        from: `${details.ambassadorName} <${mail}>`,
        to: to,
        subject: sub,
        text: body,
        attachments: [{  
            filename: fileName,
            path: filePath,
        }]
    };

    try {
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Certificate sent to : ' + to);
                return true
            }
        });
    } catch (error) {
        console.error(error.message);
        return false;
    }

}

module.exports = authifyMailer