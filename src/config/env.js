import dotenv from 'dotenv';

dotenv.config();
export const { PORT = 3000, SMTP_PORT = 2525 } = process.env;