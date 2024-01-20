const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.SERVER_PORT || 3001;

app.use(cors());
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
  service: 'gmail', // e.g., 'gmail'
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

app.post('/send-email', async (req, res) => {
  const { name, email, message, phoneNumber } = req.body;

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'bennahd@yahoo.com', // Set the recipient email address
    subject: `New Message From Wigwonderland`,
      text: `Name: ${name} 
    \nEmail: ${email}
    \nPhone Number: ${phoneNumber}

    \nMessage: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Failed to send email:', error);
    res.status(500).json({ error: 'Failed to send email', details: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
