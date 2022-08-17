const nodemailer = require('nodemailer');
const sendgrid = require('@sendgrid/mail');

function createGmailTransporter() {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: true,
    auth: {
      user: process.env.SMTP_USER, // generated ethereal user
      pass: process.env.SMTP_PASSWORD, // generated ethereal password
    },
  });
  return transporter;
}

async function sendNodeMailer(data) {
  const transporter = createGmailTransporter();

  // send mail with defined transport object
  const info = await transporter.sendMail(data);

  return info;
}

function sendMailSendGrid(data) {
  sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

  return sendgrid.send(data);
}

module.exports = {
  sendNodeMailer,
  sendMailSendGrid,
};
