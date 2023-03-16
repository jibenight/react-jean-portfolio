// PhusionPassenger need for O2switch
if (typeof PhusionPassenger !== 'undefined') {
  PhusionPassenger.configure({ autoInstall: false });
}

import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import nodemailer from 'nodemailer';
// const path = require('path');
import path from 'path';
const app = express();
const port = 3000;

const __dirname = path.dirname(new URL(import.meta.url).pathname);

app.use(express.static(path.join(__dirname, '/dist')));
//render index.html page
app.get('/', (request, response) => {
  response.render('index.html');
});

// body parser middleware need for post and put
app.use(express.json());
// this is to handle URL encoded data
app.use(express.urlencoded({ extended: true }));
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
  // Autoriser les demandes provenant de n'importe quel domaine
  response.setHeader('Access-Control-Allow-Origin', '*');

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

  let textBody = `FROM: ${request.body.name} EMAIL: ${request.body.email} MESSAGE: ${request.body.message}`;
  let htmlBody = `<h2>Email du formulaire jean-nguyen.dev</h2><p>Nom: ${request.body.name}</p><p>Objet: ${request.body.subject}</p><p>Email: <a href="mailto:${request.body.email}">${request.body.email}</a></p><p>Message:<br><br> ${request.body.message}</p>`;
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
      response.json({
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

// PhusionPassenger need for O2switch
if (typeof PhusionPassenger !== 'undefined') {
  app.listen('passenger');
} else {
  app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
  });
}
