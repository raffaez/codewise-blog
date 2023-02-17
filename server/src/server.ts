import cors from '@fastify/cors';
import Fastify from 'fastify';

import { articleRoutes } from './routes/article';
import { commentRoutes } from './routes/comment';
import { upvoteRoutes } from './routes/upvote';

async function bootstrap() {
  const fastify = Fastify({
    logger: true,
  });

  await fastify.register(cors, {
    origin: true,
  });

  await fastify.register(articleRoutes);
  await fastify.register(commentRoutes);
  await fastify.register(upvoteRoutes);

  fastify.listen({ port: 3333 }, () => {
    console.log('Server listening on port 3333');
  });
}

bootstrap();