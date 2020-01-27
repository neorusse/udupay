export const INITIAL_STATE = {
  tabs: [
    {
      title: 'Make a payment',
      iconUrl:
        'https://res.cloudinary.com/dtziv0hyw/image/upload/v1580045436/payment_kiiqh6.jpg',
      id: 1,
      linkUrl: '/payment',
    },
    {
      title: 'Payment History',
      iconUrl:
        'https://res.cloudinary.com/dtziv0hyw/image/upload/v1580045436/transaction_j0uqa4.jpg',
      id: 2,
      linkUrl: '/paymenthistory',
    },
    {
      title: 'Help/Support',
      iconUrl:
        'https://res.cloudinary.com/dtziv0hyw/image/upload/v1580045436/support_rlulbw.jpg',
      id: 3,
      linkUrl: '/support',
    },
    {
      title: 'My Profile',
      iconUrl:
        'https://res.cloudinary.com/dtziv0hyw/image/upload/v1580045436/profile_fwhmra.jpg',
      id: 4,
      linkUrl: '/profile',
    },
  ],
};

const dashboardReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default dashboardReducer;
