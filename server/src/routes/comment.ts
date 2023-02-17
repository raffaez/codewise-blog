import { FastifyInstance } from 'fastify';
import z from 'zod';
import { prisma } from '../lib/prisma';

export async function commentRoutes(fastify: FastifyInstance) {
  const postCommentSchema = z.object({
    params: z.object({
      name: z.string(),
    }),
    body: z.object({
      postedBy: z.string(),
      text: z.string(),
    }),
  });

  fastify.get<{ Params: { articleName: string } }>('/api/comments/:articleName', async (req, res) => {
    const { articleName } = req.params;

    const comments = await prisma.comment.findMany({
      where: {
        Article: {
          name: articleName,
        }
      }
    });

    return res.status(200).send(comments);
  });

  fastify.post<{
    Params: { name: string }, Body: { postedBy: string, text: string }
  }>('/api/comments/:name', async (req, res) => {
    try {
      postCommentSchema.parse(req);
    } catch (err: any) {
      return res.status(400).send({ error: err.message })
    }

    const { name } = req.params;
    const { postedBy, text } = req.body;

    const article = await prisma.article.findUnique({ where: { name } });

    if (article === null) return res.status(404).send('That article doesn\'t exist');

    await prisma.comment.create({
      data: {
        postedBy,
        text,
        Article: {
          connect: {
            name,
            articleId: article.articleId,
          }
        }
      }
    });

    return res.status(200).send('Comment posted');
  });
}