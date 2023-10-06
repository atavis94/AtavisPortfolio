import { NextApiRequest, NextApiResponse } from 'next';
import transporter from '../../../utils/transporter';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(
  req: NextRequest
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

    await new Promise((resolve, reject) => {
      transporter.sendMail(mailData, (err: Error, info: any) => {
        if (err) {
          reject(err);
        } else {
          resolve(info);
          return Response.json({ info })

        }
      });
    });


  } catch (err) {
    console.error(err);
    return Response.json({ err })

  }
}
