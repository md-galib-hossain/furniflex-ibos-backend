import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join((process.cwd(), '.env')) });

export default {
  NODE_ENV: process.env.NODE_ENV,
  port: process.env.PORT,
  bcrypt_salt_rounds: process.env.bcrypt_salt_rounds,
  database_url: process.env.DATABASE_URL,
  FRONTEND_LINK:process.env.FRONTEND_LINK,
  Stripe_Secret_Key: process.env.STRIPE_SECRET_KEY
};
