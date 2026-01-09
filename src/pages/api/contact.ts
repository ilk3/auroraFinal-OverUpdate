import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const { firstName, lastName, phone, email, message } = req.body;

  if (!firstName || !lastName || !phone || !email || !message) {
    return res.status(400).json({ error: "All fields are required." });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "filipilic637@gmail.com",
        pass: "FLP$2512ilc",
      },
    });

    await transporter.sendMail({
      from: email,
      to: "ilicfilip28@gmail.com",
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      text: `Name: ${firstName} ${lastName}\nPhone: ${phone}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    res.status(200).json({ success: "Message sent successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Failed to send message. Please try again later." });
  }
}
