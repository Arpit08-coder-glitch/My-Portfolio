const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Email configuration
const transporter = nodemailer.createTransport({
  service: 'gmail', // Use your email provider (e.g., Gmail, Outlook)
  auth: {
    user: 'arpitsin28@gmail.com',  // Replace with your email
    pass: 'Arpit.&ingh28',   // Replace with your email password or app password
  },
});

// API endpoint to handle form submissions
app.post('/send-email', (req, res) => {
  const { name, email, message } = req.body;

  // Email options
  const mailOptions = {
    from: email,  // User's email
    to: 'arpitsin28@gmail.com', // Your email address to receive the message
    subject: `New Message from ${name}`,
    text: `
      You have received a new message from your contact form:

      Name: ${name}
      Email: ${email}
      Message: ${message}
    `,
    replyTo: email, // Makes it easy for you to reply directly to the user
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      return res.status(500).send('Error sending email');
    }
    res.status(200).send('Message sent successfully');
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
