require('dotenv').config();

export default function (req, res) {
  let nodemailer = require('nodemailer');
  const transporter = nodemailer.createTransport({
    port: 465,
    host: 'smtp.gmail.com',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
    secure: true,
  });

  const mailData = {
    from: process.env.SMTP_USER,
    to: req.body.email,
    subject: `Message From Your Website`,
    html: `
      <div>
        <div>
          <h3>Name: ${req.body.name}</h3>
        </div>
        <p style="font-size: 16px;">
          Message: ${req.body.message}
        </p>
      </div>
    `,
  };

  transporter.sendMail(mailData, function (err, info) {
    if (err) {
      res.status(500).json({ success: false, message: 'Failed to send mail' });
    } else {
      res.status(200).json({ success: true, message: 'Email has been sent' });
    }
  });
}