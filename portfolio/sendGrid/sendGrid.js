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

app.post('.netlify/functions/sendGrid/contact/email', async (req, res) => {
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

// app.all('*', (req, res) => {
//   console.log(req.path);
//   console.log('route not found');
//   res.sendStatus(404);
// });

app.use(bodyParser.json());
app.use('/.netlify/functions/server', router); // path must route to lambda
app.use('/', (req, res) => res.sendFile(path.join(__dirname, '../index.html')));

app.listen(PORT, () => {
  console.log(`Now listening on port ${PORT}`);
});

module.exports = app;
module.exports.handler = serverless(app);
