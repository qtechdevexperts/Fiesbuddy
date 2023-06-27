import { NextApiRequest, NextApiResponse } from "next";
let nodemailer = require("nodemailer");

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    if (!req.body) {
      return res.status(400).json({ error: "Data is missing" });
    }

    const transporter = nodemailer.createTransport({
      port: process.env.EMAIL_SERVER_PORT as string,
      host: process.env.EMAIL_SERVER_HOST as string,
      auth: {
        user: process.env.EMAIL_SERVER_USER as string,
        pass: process.env.EMAIL_SERVER_PASSWORD as string,
      },
      secure: true,
    });
    const mailData = {
      from: "no-reply@feisbuddy.com",
      to: "mumtaz.ahmedjp@gmail.com",
      subject: `Message From ${req.body.name} & Email as ${req.body.email}`,
      text: req.body.message,
      html: `<div>${req.body.message}</div>`,
    };
    transporter.sendMail(mailData, function (err: any, info: any) {
      if (err) console.log(err);
      else console.log(info);
    });
    res.status(201);
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
};

export default handler;
