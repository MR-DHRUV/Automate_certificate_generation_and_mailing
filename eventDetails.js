const ambassadorName = "";// write your name here
const eventName = "";// write your event name here

module.exports = Object.freeze({
    ambassadorName : ambassadorName, 
    eventName : eventName, 
    subject : "Event Certificate", // subject of email
    body : `Hi,\nI hope this email finds you well. I am writing to follow up on the event "${eventName}" that we recently held. As a attendee in the event, you are entitled to receive a certificate acknowledging your participation.\n\nPlease find the certificate attached to this mail.\n\nThe certificate has been generated through the use of the program mrdhruv.xyz/gencert and has been sent automatically. I would greatly appreciate your support for this project by taking a moment to star the GitHub repository. Thank you for your consideration.\nThanks and Regards\n${ambassadorName}`, // body of email
});




