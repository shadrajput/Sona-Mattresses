require('dotenv').config()
import { transporter } from './utils/email'

// eslint-disable-next-line import/no-anonymous-default-export
export default function (req, res) {
  const mailData = {
    from: process.env.SMTP_USER,
    to: process.env.SMTP_USER,
    subject: `Message From Your Website`,
    html: `
      <div>
        <div>
          <h3>User has subscribed for news letter</h3>
        </div>
        <p style="font-size: 16px;">
          Email: ${req.body.email}
        </p>
      </div>
    `,
  }

  transporter.sendMail(mailData, function (err) {
    if (err) {
      res.status(500).json({ success: false, message: 'Failed to send mail' })
    } else {
      res.status(200).json({ success: true, message: 'Email has been sent' })
    }
  })
}
