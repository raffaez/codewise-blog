import Fastify from 'fastify';

async function bootstrap() {
  const fastify = Fastify({ logger: true });

  fastify.listen({ port: 3000 })
}

bootstrap();