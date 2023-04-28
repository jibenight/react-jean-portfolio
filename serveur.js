require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const path = require('path');
const helmet = require('helmet');
const cors = require('cors');
const validator = require('validator');

const app = express();
const port = 3000;

app.use(helmet());
app.use(cors());
app.use(express.static(path.join(__dirname, 'dist')));

//render index.html page
app.get('/', (request, response) => {
  response.render('index.html');
});

// body parser middleware need for post and put
app.use(express.json({ limit: '1kb' }));
// this is to handle URL encoded data
app.use(express.urlencoded({ extended: true, limit: '1kb' }));
// end parser middleware

// custom middleware to log data access for check in terminal
const log = function (request, response, next) {
  console.log(
    `${new Date()}: ${request.protocol}://${request.get('host')}${
      request.originalUrl
    }`
  );
  console.log(request.body); // make sure JSON middleware is loaded first
  next();
};
app.use(log);

// HTTP POST request
app.post('/', function (request, response) {
  const { name, email, message, subject } = request.body;

  if (!validator.isEmail(email)) {
    return response.status(400).json({ message: 'Invalid email address' });
  }

  // create reusable transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    host: 'mail.jean-nguyen.dev',
    port: 465,
    secure: true,
    auth: {
      user: process.env.ACCOUNT_USER,
      pass: process.env.PASSWORD,
    },
  });

  let textBody = `FROM: ${name} EMAIL: ${email} MESSAGE: ${message}`;
  let htmlBody = `<h2>Email du formulaire jean-nguyen.dev (React Version)</h2><p>Nom: ${name}</p><p>Objet: ${subject}</p><p>Email: <a href="mailto:${email}">${email}</a></p><p>Message:<br><br> ${message}</p>`;
  let mail = {
    from: 'contact@jean-nguyen.dev',
    to: 'nguyen.jean@me.com',
    subject: 'Message du formulaire: jean-nguyen.dev',
    text: textBody,
    html: htmlBody,
  };

  // send mail
  transporter.sendMail(mail, function (err, info) {
    if (err) {
      console.log(err);
      response.status(500).json({
        message:
          "message not sent: an error occured; check the server's console log",
      });
    } else {
      response.status(204).send();
    }
  });
});

//error 404
app.use(function (request, response) {
  response.status(404).sendFile(path.join(__dirname, folder, 'index.html'));
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
