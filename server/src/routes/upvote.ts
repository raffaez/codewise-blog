import { FastifyInstance } from 'fastify';
import z from 'zod';

import { prisma } from '../lib/prisma';

export const upvoteRoutes = async (fastify: FastifyInstance) => {

  const putUpvoteSchema = z.object({
    params: z.object({
      name: z.string(),
    }),
  });

  fastify.put<{
    Params: { name: string }
  }>('/api/upvote/:name', async (req, res) => {
    try {
      putUpvoteSchema.parse(req);
    } catch (err: any) {
      return res.status(400).send({ error: err.message })
    }

    const { name } = req.params;

    if (await prisma.article.findUnique({ where: { name } }) === null) return res.status(404).send('That article doesn\'t exist');

    const article = await prisma.article.update({
      where: {
        name,
      },
      data: {
        upvotes: {
          increment: 1,
        }
      }
    });

    return res.status(200).send(`${article.name} now has ${article.upvotes} upvotes`);
  });
};