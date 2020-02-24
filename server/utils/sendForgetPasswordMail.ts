import sendMail from './sendEmail';

// Forget password email
const msg = (requesterEmail: string, passwordResetUrl: string) => {
  return {
    from: {
      email: 'support@udupay.com',
    },
    personalizations: [
      {
        to: [
          {
            email: requesterEmail,
          },
        ],
        dynamic_template_data: {
          passwordResetUrl,
        },
      },
    ],
    template_id: 'd-7d473ed34d5840d583a1605b957f556b',
  };
};

// send email function
async function sendForgetPasswordMail(email: string, token: string) {
  let requesterEmail = email,
    passwordResetUrl = `${process.env.CLIENT_URL}/api/v1/users/resetPassword/${token}`;

  sendMail(msg(requesterEmail, passwordResetUrl));
}

export default sendForgetPasswordMail;
