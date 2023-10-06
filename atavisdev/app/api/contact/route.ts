
import transporter from '../../../utils/transporter';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(
  req: NextRequest,
  res: NextResponse
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

      // Send the email
      if(transporter.verify()){
        try{
          await transporter.sendMail(mailData, function(error: Error, info: any) {
            if (error) {
              return res.json();
              return NextResponse.json({ error: 'Error sending email', status: 504,});
            } else {
              return res.json();
              return NextResponse.json({ info: 'Email sent successfully!', status: 200,})
            }});
        }
        catch(error){
          return res.json();
          return NextResponse.json({ error: 'Error sending email', status: 501,})
        }
      }
      else{

        return res.json();
        return NextResponse.json({ error: 'Failed to verify transporter.', status: 502,})
      }

    } catch (error) {
      console.error(error);
      return res.json();
      return NextResponse.json({ error: 'Error sending email', status: 503,})
    }
  }