import transporter from '../../../utils/transporter';
import nodemailer from 'nodemailer';
import { NextResponse } from "next/server";

export async function POST(req: Request) {

    const body = await req.json();

    const { name, email, message } = body;

    // Create email data
    const mailData: nodemailer.SendMailOptions = {
      from: process.env.SITE_ACC,
      to: process.env.DESTINATION_ADD,
      subject: "Contact Form Submission",
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    return await transporter
    .sendMail(mailData)
    .then((response: nodemailer.SentMessageInfo) => {
      console.log(response); // Log the response
      return NextResponse.json(
        { error: false, emailSent: true, errors: [], response },
        { status: 200 }
      );
    })
    .catch((error: Error) => {
      console.error(error); // Log the error
      return NextResponse.json(
        { error: true, emailSent: false, errors: [error.message] },
        { status: 500 }
      );
    });
}
