import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';

const app = express();
app.use(express.json());
app.use(cors());

// Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'filipilic637@gmail.com', // Replace with your Gmail
    pass: 'FLP$2512ilc' // Generate an App Password
  }
});

app.post('/send', async (req, res) => {
  const { firstName, lastName, phone, email, message } = req.body;

  const mailOptions = {
    from: email,
    to: 'ilicfilip28@gmail.com',
    subject: `New Contact Form Submission from ${firstName} ${lastName}`,
    text: `Name: ${firstName} ${lastName}\nPhone: ${phone}\nEmail: ${email}\nMessage: ${message}`
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Error sending email', error });
  }
});

app.listen(5000, () => console.log('Server running on port 5000'));
