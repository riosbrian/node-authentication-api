import http from 'node:http';
import { envs } from '@config/envs.js';
import { ExpressAdapter } from './express/app.js';

const expressApp = new ExpressAdapter();
const server = http.createServer(expressApp.handler);

function startServer(port: number) {
  server.listen(port, () => {
    console.log(`Server running at PORT: ${port}`);
  });
}

export async function bootstrap() {
  // TODO: Add DB connection
  startServer(envs.PORT);
}
