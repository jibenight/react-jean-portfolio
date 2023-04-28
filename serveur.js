require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const path = require('path');
const helmet = require('helmet');
const cors = require('cors');
const validator = require('validator');
const rateLimit = require('express-rate-limit');

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

// Apply rate limiter to all requests
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
});
app.use(limiter);

// HTTP POST request
app.post('/', function (request, response) {
  const { name, email, message, subject } = request.body;

  if (!validator.isEmail(email)) {
    return response.status(400).json({ message: 'Invalid email address' });
  }

  const maxLength = 5000;
  if (message.length > maxLength) {
    return response.status(400).json({ message: 'Message is too long' });
  }

  const minLength = 1;
  if (!validator.isLength(name, { min: minLength })) {
    return response.status(400).json({ message: 'Name is too short' });
  }

  if (!validator.isLength(subject, { min: minLength })) {
    return response.status(400).json({ message: 'Subject is too short' });
  }

  const escapedName = validator.escape(name);
  const escapedSubject = validator.escape(subject);
  const escapedMessage = validator.escape(message);

  let textBody = `FROM: ${escapedName} EMAIL: ${email} MESSAGE: ${escapedMessage}`;
  let htmlBody = `<h2>Email du formulaire jean-nguyen.dev (React Version)</h2><p>Nom: ${escapedName}</p><p>Objet: ${escapedSubject}</p><p>Email: <a href="mailto:${email}">${email}</a></p><p>Message:<br><br> ${escapedMessage}</p>`;

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
