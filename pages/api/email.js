const nodemailer = require('nodemailer');

export default function handler(req, res) {
  const message = {
    from: req.body.email,
    to: process.env.EMAIL_ADDRESS,
    subject: req.body.subject,
    text: req.body.message,
    html: `<h2>Name: ${req.body.name}</h2>
      <h3>Email: ${req.body.email}</h3>
      <p>${req.body.message}</p>`,
  };

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_ADDRESS,
      pass: process.env.APP_PASSWORD,
    },
  });

  if (req.method === 'POST') {
    transporter.sendMail(message, (err, info) => {
      if (err) {
        res.status(404).json({
          error: `Connection refused at ${err.address}`,
        });
      } else {
        res.status(250).json({
          success: `Message delivered to ${info.accepted}`,
        });
      }
    });
  }
}
