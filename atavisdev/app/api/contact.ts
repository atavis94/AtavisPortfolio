import type { NextApiRequest, NextApiResponse } from 'next';
import transporter from '../../utils/transporter';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    try {
      const { name, email, subject, message } = req.body;

      // Create email data
      const mailData = {
        from: process.env.SITE_ACC,
        to: process.env.DESTINATION_ADD,
        subject: subject,
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      };

      // Send the email
      await transporter.sendMail(mailData);

      res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error sending email' });
    }
  } else {
    res.status(405).end();
  }
}