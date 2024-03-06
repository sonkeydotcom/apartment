import nodemailer from "nodemailer";
import asyncHandler from "express-async-handler";

// @desc    Send email
// @route   POST /api/mail
// @access  Public

const sendEmailers = asyncHandler(async (req, res) => {
  const { name, address, email, phone, moveInDate } = req.body;

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
    from: '"Halstead Realty" <support@halsteadrealty.rent>', // sender address
    to: email, // list of receivers
    subject: "Rental Application Submission Confirmation!",
    attachments: [
      {
        filename: "logo.png",
        path: "https://i.ibb.co/5LZMzMR/logo.png",
        cid: "logo", //same cid value as in the html img src
      },
    ],
    html: `
    <style>
      /* Add your CSS styles here */
      body {
        font-family: Arial, sans-serif;
        line-height: 1.6;
        margin: 0;
        padding: 0;
      }
      .container {
        max-width: 600px;
        margin: 0 auto;
        padding: 20px;
        background-color: #f9f9f9;
        border: 1px solid #ddd;
        border-radius: 5px;
      }
      h1 {
        color: #333;
        font-size: 24px;
        margin-bottom: 20px;
      }
      ul {
        list-style-type: none;
        padding: 0;
      }
      li {
        margin-bottom: 10px;
      }
      p.footer {
        margin-top: 20px;
        font-size: 14px;
        color: #666;
      }
    </style>
    <div class="container">
      <p>Dear ${name},</p>
      <p>You submitted a rental application for the property located at ${address}. We appreciate your interest in renting with us.</p>
      <p>Below, you'll find a summary of the details provided in your application:</p>
      <ul>
        <li><strong>Applicant Name:</strong> ${name}</li>
        <li><strong>Email Address:</strong> ${email}</li>
        <li><strong>Phone Number:</strong> ${phone}</li>
        <li><strong>Current Address:</strong> ${address}</li>
        <li><strong>Desired Move-in Date:</strong> ${moveInDate}</li>
       
      </ul>
      <p>To proceed with your application, kindly contact your realtor/landlord to arrange payment for the rental application fee. They will provide you with the necessary instructions and payment details.</p>
  <p>Once the payment is completed, our team will promptly review your application and conduct the necessary checks. </p>
  <p>If you have any inquiries or require further assistance, please feel free to reach out to us at <b>support@halsteadrealty.rent</b>.</p>
  <p>We sincerely appreciate your consideration. We look forward to connecting with you soon!</p>
  <p class="footer">Warm regards</p>
    </div>
  `,
  };

  const mail = await transporter.sendMail(mailData);
  if (mail) {
    res.status(200).json({ message: `Email sent to ${mailData.to}` });
  } else {
    res.status(500).json({ message: "Error sending email" });
  }
});

export default sendEmailers;
