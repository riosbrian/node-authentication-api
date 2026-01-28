import dotenv from 'dotenv';
import path from 'path';
import env from 'env-var';

const ENV_FILE = process.env.NODE_ENV === 'prod' ? '.env' : '.env.dev';

dotenv.config({ path: path.resolve(process.cwd(), ENV_FILE) });

export const envs = {
  NODE_ENV: env.get('NODE_ENV').default('development').asString(),
  PORT: env.get('PORT').required().asPortNumber(),
  MONGO_URL: env.get('MONGO_URL').required().asString(),
  MONGO_DB_NAME: env.get('MONGO_DB_NAME').required().asString(),
};
