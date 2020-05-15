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
    const msg = {
      to: 'cylor.dev@gmail.com',
      from: 'cylor.dev@gmail.com',
      subject: `Portfolio alert`,
      text: `Someone has sent you a message from your portfolio.`,
      html: `           <h3>{{{email}}}</h3>
                        <h4>{{{subject}}}</h4>
                        <p>{{{message}}}</p>`,
      dynamic_template_data: {
        email: req.body.email,
        subject: req.body.subject,
        message: req.body.message,
      },
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
