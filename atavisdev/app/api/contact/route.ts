import type { NextApiRequest, NextApiResponse } from 'next';
import transporter from '../../../utils/transporter';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(
  req: NextRequest,
  res: NextResponse
) {
  console.log('called');
  if (req.method === 'POST') {
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

      // Send the email
      await transporter.sendMail(mailData);

      return NextResponse.json({ message: 'Email sent successfully!', status: 200,})

      //res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
      console.error(error);

      return NextResponse.json({ error: 'Error sending email', status: 500,})
      //res.status(500).json({ error: 'Error sending email' });
    }
  } else {
    return NextResponse.json({ error: 'Method not allowed', status: 405,})
    //res.status(405).end();
  }
}