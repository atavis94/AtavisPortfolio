const nodemailer = require('nodemailer');

// Create a transporter using Gmail SMTP
const transporter = nodemailer.createTransport({
  service: 'yandex',
  auth: {
    user: process.env.SITE_ACC,
    pass: process.env.SITE_ACC_PASS,
  },
});

export default transporter;