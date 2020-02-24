import sendMail from './sendEmail';

// Welcome email
const msg = (userEmail: string, homePageUrl: string) => {
  return {
    from: {
      email: 'support@udupay.com',
    },
    personalizations: [
      {
        to: [
          {
            email: userEmail,
          },
        ],
        dynamic_template_data: {
          homePageUrl,
        },
      },
    ],
    template_id: 'd-7ef4b047434d488dafab347d38a553cf',
  };
};

// send email function
async function sendSignUpMail(email: string) {
  let userEmail = email,
    homePageUrl = `${process.env.CLIENT_URL}`;

  sendMail(msg(userEmail, homePageUrl));
}

export default sendSignUpMail;
