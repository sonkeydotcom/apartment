import nodemailer from "nodemailer";
import asyncHandler from "express-async-handler";

// @desc    Send email
// @route   POST /api/mail
// @access  Public

const sendEmails = asyncHandler(async (req, res) => {
  const transporter = nodemailer.createTransport({
    host: "mail.privateemail.com",
    port: 465,
    secure: true,
    auth: {
      user: "support@halsteadrealty.rent",
      pass: "Bloomyguy1",
    },
  });
  //"Zillow Housing" <annagu.kennedy@gmail.com>'
  const mailData = {
    from: "support@halsteadrealty.rent>", // sender address
    to: "annagu.kennedy@gmail.com",
    subject: "Thank your for your Interest in our Property!",
    text: "hello",
    html: `
    <!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Confirmation: Viewing Appointment</title>
<style>
/* Add your CSS styles here */
body {
  font-family: Arial, sans-serif;
  background-color: #f4f4f4;
  margin: 0;
  padding: 0;
}

.container {
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

h1 {
  color: #333;
}

p {
  color: #666;
  line-height: 1.6;
}
</style>
</head>
<body>
<div class="container">
  <h1>Viewing Appointment Confirmation</h1>
  <p>Hello [Recipient Name],</p>
  <p>We are writing to confirm your viewing appointment for the property located at:</p>
  <p><strong>Address:</strong> [Property Address]</p>
  <p><strong>Date:</strong> [Viewing Date]</p>
  <p><strong>Time:</strong> [Viewing Time]</p>
  <p>If you have any questions or need to reschedule, please contact us as soon as possible.</p>
  <p>Thank you, and we look forward to seeing you at the viewing!</p>
  <p>Best regards,<br>[Your Name]<br>[Your Position/Company]</p>
</div>
</body>
</html>

  `,
  };

  const mail = await transporter.sendMail(mailData);
  if (mail) {
    res.status(200).json({ message: `Email sent to ${mailData.to}` });
  } else {
    res.status(500).json({ message: "Error sending email" });
  }
});

export default sendEmails;
