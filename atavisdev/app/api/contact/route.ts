import transporter from '../../../utils/transporter';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method === 'POST') {
 
      const { name, email, subject, message } = req.body;

      // Create email data
      const mailData = {
        from: process.env.SITE_ACC,
        to: process.env.DESTINATION_ADD,
        subject: subject,
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      };

      await new Promise((resolve, reject) => {
        transporter.sendMail(mailData, (err: Error, info: any) => {
          if (err) {
            reject(err);
          } else {
            resolve(info);
            res.json({ info }); // Send JSON response using res.json
          }
        });
      });
    } else {
      res.status(405).json({ error: 'Method not allowed' });
    }
  } catch (err) {
    console.error(err);
    res.status(503).json({ error: 'Error sending email' });
  }
}
