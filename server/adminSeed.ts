import { insertAdmin } from './helpers/userQueryBuilder';
import { hashPassword } from './helpers/appService';

const createAdmin = async () => {
  let password: string = 'admin';

  try {
    const hashedPassword = await hashPassword(password);

    // write admin detail to db
    const seeded = await insertAdmin(
      'russell',
      'nyorere',
      'admin@udupay.com',
      hashedPassword,
      'lekki',
      'lagos',
      '08068908852',
      true,
    );

    return seeded;
  } catch (error) {
    return error.message;
  }
};

export default createAdmin;
