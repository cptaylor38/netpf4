const express = require('express');
require('dotenv');
const serverless = require('serverless-http');
const app = express();
const bodyParser = require('body-parser');
const sgMail = require('@sendgrid/mail');
const PORT = process.env.PORT || 5000;
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

app.use(bodyParser);

app.post('/contact/email', async (req, res) => {
  try {
    const msg = {
      to: 'cylor.dev@gmail.com',
      from: 'cylor.dev@gmail.com',
      subject: req.body.email,
      text: req.body.message,
      html: `<h3>${req.body.email}</h3>
                <h4>${req.body.subject}</h4>
                <p>${req.body.message}</p>`,
    };
    await sgMail.send(msg).then((response) => res.json(response));
  } catch (error) {
    console.log(error);
  }
});

app.all('*', (req, res) => {
  console.log(req.path);
  console.log('route not found');
  res.sendStatus(404);
});

app.listen(PORT, () => {
  console.log(`Now listening on port ${PORT}`);
});

module.exports.handler = serverless(app);