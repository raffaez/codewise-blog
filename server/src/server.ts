import cors from '@fastify/cors';
import Fastify from 'fastify';

import { articleRoutes } from './routes/article';
import { commentRoutes } from './routes/comment';

async function bootstrap() {
  const fastify = Fastify({
    logger: true,
  });

  await fastify.register(cors, {
    origin: true,
  });

  await fastify.register(articleRoutes);
  await fastify.register(commentRoutes);

  fastify.listen({ port: 3333 }, () => {
    console.log('Server listening on port 3333');
  });
}

bootstrap();