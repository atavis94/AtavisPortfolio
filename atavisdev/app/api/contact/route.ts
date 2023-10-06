import { NextApiRequest, NextApiResponse } from 'next';
import transporter from '../../../utils/transporter';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(
  req: NextRequest,
  res: NextApiResponse
) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    // Create email data
    const mailData = {
      from: process.env.SITE_ACC,
      to: process.env.DESTINATION_ADD,
      subject: subject,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    // Verify transporter
    if (transporter.verify()) {
      try {
        await transporter.sendMail(mailData, function (error: Error, info: any) {
          if (error) {
            console.error(error);
            res.status(504).json({ error: 'Error sending email' });
          } else {
            console.log(info);
            res.status(200).json({ info: 'Email sent successfully!' });
          }
        });
      } catch (error) {
        console.error(error);
        res.status(501).json({ error: 'Error sending email' });
      }
    } else {
      res.status(502).json({ error: 'Failed to verify transporter.' });
    }
  } catch (error) {
    console.error(error);
    res.status(503).json({ error: 'Error sending email' });
  }
}
