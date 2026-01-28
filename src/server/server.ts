import http from 'node:http';
import { envs } from '@config/envs.js';
import { ExpressAdapter } from './express/app.js';
import { connectToMongoDB } from './data/mongodb.connection.js';

const expressApp = new ExpressAdapter();
const server = http.createServer(expressApp.handler);

function startServer(port: number) {
  server.listen(port, () => {
    console.log(`Server running at PORT: ${port}`);
  });
}

export async function bootstrap() {
  await connectToMongoDB(envs.MONGO_DB_NAME);
  startServer(envs.PORT);
}
