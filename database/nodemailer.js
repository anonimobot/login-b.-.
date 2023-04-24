const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "botanonimo913@gmail.com", 
    pass: "Eusoupro1."
  }
});


module.exports = transporter;