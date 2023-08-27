require('dotenv').config();
import { transporter } from './utils/email'

export default function (req, res) {
  const mailData = {
    from: process.env.SMTP_USER,
    to: process.env.SMTP_USER,
    subject: `Message From Your Website`,
    html: `
      <div>
        <p style="font-size: 16px; font-style: italic;">
          Customer is requesting for quotation
        </p>
        <div>
          <h3>Name: ${req.body.first_name} ${req.body.last_name}</h3>
        </div>
        <p style="font-size: 16px;">
          Email: ${req.body.email}
        </p>
        <p style="font-size: 16px;">
          Mobile: ${req.body.phone}
        </p>
        <p style="font-size: 16px;">
          Category: ${req.body.category}
        </p>
        <p style="font-size: 16px;">
          Size: ${req.body.size}
        </p>
        <p style="font-size: 16px;">
          Quantity: ${req.body.quantity}
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