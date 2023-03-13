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
let folder;
let error404 = true;
const __dirname = path.dirname(new URL(import.meta.url).pathname);
// enable static files pointing to the folder "src"
// this can be used to serve the index.html file
if (process.env.NODE_ENV !== 'production') {
  folder = 'index.html';
  console.log('Mode Development');
} else {
  folder = '/dist';
  console.log('Mode Production');
}
app.use(express.static(path.join(__dirname, folder)));
//render index.html page
app.get('/', (request, response) => {
  response.render('index.html');
});

// body parser middleware need for post and put
app.use(express.json());
// this is to handle URL encoded data
app.use(express.urlencoded({ extended: false }));
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
// end custom middleware

// HTTP POST

app.post('/', function (request, response) {
  error404 = false;
  // create reusable transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    host: 'mail.jean-nguyen.dev',
    port: 465,
    secure: true,
    auth: {
      user: process.env.ACCOUNT_USER, // this should be YOUR GMAIL account
      pass: process.env.PASSWORD, // this should be your password
    },
  });

  let textBody = `FROM: ${request.body.name} EMAIL: ${request.body.email} MESSAGE: ${request.body.message}`;
  let htmlBody = `<h2>Email du formulaire jean-nguyen.dev</h2><p>Nom: ${request.body.name}</p><p>Objet: ${request.body.subject}</p><p>Email: <a href="mailto:${request.body.email}">${request.body.email}</a></p><p>Message:<br><br> ${request.body.message}</p>`;
  let mail = {
    from: 'contact@jean-nguyen.dev', // sender address
    to: 'nguyen.jean@me.com', // list of receivers (THIS COULD BE A DIFFERENT ADDRESS or ADDRESSES SEPARATED BY COMMAS)
    subject: 'Message du formulaire: jean-nguyen.dev', // Subject line
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
if (error404) {
  app.use(function (request, response) {
    response.status(404).sendFile(path.join(__dirname, folder, '404.html'));
  });
}

// PhusionPassenger need for O2switch
if (typeof PhusionPassenger !== 'undefined') {
  app.listen('passenger');
} else {
  app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
  });
}
