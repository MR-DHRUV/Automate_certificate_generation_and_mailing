# Automate certificate generation and mailing

- **This script written in NodeJS is a straightforward tool capable of generating and mailing certificates in bulk, utilizing data from a spreadsheet (.xlsx).**
<br>

- **The script creates certificates by utilizing a fillable PDF template and subsequently sends them to the designated email address.**
<br>

- **Initially, I developed this project for sending MLSA certificates in bulk. However, it can be customized to generate certificates with a template of your choice. For instructions on how to do this, please refer to the "Changing Certificate Template" section.**  

<hr>

## Setup for sending MLSA Certificates

**1** Clone the repository using the command.
```bash
  $ git clone https://github.com/MR-DHRUV/Automate_certificate_generation_and_mailing.git
```
<br>

**2** Open a terminal in the root folder of the project and install npm packages using the following command.
```bash
  $ npm i
```
<br>

**3** Completing the ```.env``` file to initialize the mailer

- Create a file named as ```.env``` in the root folder of the project and copy the contents of ```env.txt``` in it. 

- Put your Gmail id that will be used for mailing in front of "EMAIL" in the .env file.

- Obtain app password for your gmail id that will act as password and will be used to send emails by reffering this link https://support.google.com/mail/answer/185833?hl=en, and paste it in front of "EMAIL_PASS2" in the env.
<br>

**4** Update the event details in the ```eventDetails.js``` file. 
<br>

**5** Populate the data in the ```data.xlsx``` file in the following format.

| Name  | Email|
| :--------- | :------- | 
| `Name of the attendee`    | `Email of the attendee` | 

<br>

**6** Run the script using the following command. 
```bash
   $ node index.js
```
<br>

#### Progress will be reported in the terminal as follows
```bash
    Certificate sent to : email1
    Certificate sent to : emailN
```

<hr>

## Changing Certificate Template


**1** To generate certificates, it is necessary to create a fillable PDF template. For guidance on creating one, please refer to the following <a href="https://www.youtube.com/watch?v=6cYpJJxvZMc" target="_blank" rel="noopener noreferrer">link</a> . Save the pdf as ```template.pdf```.

**2** Update the ```eventDetails.js``` file and add the **fixed(That will be same in all certificates)** properties that you created in the template pdf. 


**3** Updating the ```genCert.js``` file to populate the new fixed properties.

```javascript
    // Lets concider that we have added a new property named as "E_DATE" and that will be fixed in all certificates

    // Updating eventDetails.js
    module.exports = Object.freeze({
        ...
        // adding new property
        date : "16-03-23" // date of event
    });

    // Updating genCert.js
    // After the line 23 add the new feild as follows
    const E_DATE = form.getTextField('E_DATE');

    // Fill the property
    E_DATE.setText(details.date);
```

**4** Adding properties that will be populated from spreadsheet.

```javascript
    // Updating genCert.js
    // To populate this new property from excel we will pass this new property as a parameter to the function genCert present at line 10 as follows
    const genCert = async (name,email,date) => {....

    // After the line 23 add the new feild as follows
    const E_DATE = form.getTextField('E_DATE');

    // Now we have to fill the property as follows
    E_DATE.setText(date);

    // Updating index.js
    // Say this new property date is present in 3rd column of the excel sheet, so we'll modify line no 18 as follows

    // we'll add row[col-1] as js uses 0 based indexing
    genCert(row[0], row[1],row[2]);
``` 

<hr>

## Support

For any issue or query I'll love to hear at : developer.authify@gmail.com

**We love contributions ❤️** <br>Contribute to this project <a href="https://github.com/MR-DHRUV/Automate_certificate_generation_and_mailing" target="_blank" rel="noopener noreferrer">here</a>

## Contact Me <br>


<a href="https://www.linkedin.com/in/dhruv-gupta-55034a228/" target="_blank" rel="noopener noreferrer">
  <img src="https://cdn-icons-png.flaticon.com/512/1384/1384014.png" alt="" width="50px" height="50px">
</a>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<a href="https://github.com/MR-DHRUV" target="_blank" rel="noopener noreferrer">
  <img src="https://cdn-icons-png.flaticon.com/512/733/733609.png" alt="" width="50px" height="50px">
</a>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<a href="mailto://developer.authify@gmail.com" target="_blank" rel="noopener noreferrer">
  <img src="https://cdn-icons-png.flaticon.com/512/60/60543.png" alt="" width="50px" height="50px">
</a>

