const express = require('express');
const path = require('path');
require('dotenv');
const serverless = require('serverless-http');
const app = express();
const bodyParser = require('body-parser');
const sgMail = require('@sendgrid/mail');
const PORT = process.env.PORT || 5000;
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const router = express.Router();
app.post('/.netlify/functions/sendGrid/email', async (req, res) => {
  try {
    let msg = {
      to: 'cylor.dev@gmail.com',
      from: 'cylor.dev@gmail.com',
      subject: `${req.body.email}`,
      text: `${req.body.message}`,
      html: `<h3>${req.body.email}</h3>
                  <h4>${req.body.subject}</h4>
                  <p>${req.body.message}</p>`,
    };
    await sgMail.send(msg).then((response) => res.send(msg));
  } catch (error) {
    console.log(error);
  }
});

app.get('/.netlify/functions/sendGrid/testing', (req, res) => {
  res.send('wtf');
});

app.all('*', (req, res) => {
  console.log(req.path);
  res.json({ youSaid: req.path });
  res.sendStatus(404);
});

app.use(bodyParser.json());
app.use('/.netlify/functions/server', router); // path must route to lambda

app.listen(PORT, () => {
  console.log(`Now listening on port ${PORT}`);
});

module.exports = app;
module.exports.handler = serverless(app);
