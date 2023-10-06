const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.SITE_ACC,
    pass: process.env.SITE_ACC_PASS,
  },
});


export default transporter;