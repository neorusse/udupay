const nodemailer = require("nodemailer");

// The credentials for the email account you want to send mail from.
const credentials = {
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    // These environment variables will be pulled from the .env file
    user: `${process.env.EMAIL_ADDRESS}`,
    pass: `${process.env.EMAIL_PASSWORD}`
  }
};

// Getting Nodemailer all setup with the credentials for when the 'sendEmail()'
// function is called.
const transporter = nodemailer.createTransport(credentials);

// exporting an 'async' function here allows 'await' to be used
// as the return value of this function.
export async function sendEmail(email: string, token: string) {
  // The from and to addresses for the email that is about to be sent.
  const contacts = {
    from: `${process.env.EMAIL_ADDRESS}`,
    to: `${email}`
  };

  const content = {
    subject: "Link To Reset Password",
    text:
      "You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n" +
      "Please click on the following link, or paste this into your browser to complete the process within one hour of receiving it:\n\n" +
      `http://localhost:3050/api/v1/users/resetPassword/${token}\n\n` +
      "If you did not request this, please ignore this email and your password will remain unchanged.\n\n" +
      "Support Team.\n" +
      "UduPay"
  };

  // Combining the content and contacts into a single object that can be passed to Nodemailer.
  const mailOptions = Object.assign({}, content, contacts);

  return await transporter.sendMail(mailOptions);
}
