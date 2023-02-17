import { FastifyInstance } from 'fastify';
import z from 'zod';
import { prisma } from '../lib/prisma';

export async function articleRoutes(fastify: FastifyInstance) {
  const postArticleSchema = z.object({
    body: z.object({
      name: z.string(),
      title: z.string(),
      content: z.array(z.string()),
      image: z.string(),
      category: z.string(),
    }),
  });

  const putArticleSchema = z.object({
    params: z.object({
      name: z.string(),
    }),
    body: z.object({
      title: z.string().optional(),
      content: z.array(z.string()).optional(),
      image: z.string().optional(),
      category: z.string().optional(),
    }),
  });

  fastify.get('/api/articles', async (req, res) => {
    const articles = await prisma.article.findMany();

    return res.status(200).send(articles);
  });

  fastify.get<{ Params: { name: string } }>('/api/articles/:name', async (req, res) => {
    const { name } = req.params;

    const article = await prisma.article.findUnique({ where: { name } });

    if (article === null) return res.status(404).send('That article doesn\'t exist');

    return res.status(200).send(article);
  })

  fastify.post<{ Body: { name: string, title: string, content: string[], image: string, category: string } }>('/api/articles/', async (req, res) => {
    try {
      postArticleSchema.parse(req);
    } catch (err: any) {
      return res.status(400).send({ error: err.message })
    }

    const { name, title, content, image, category } = req.body;

    if (await prisma.article.findUnique({ where: { name } }) !== null) return res.status(409).send('That article already exists');

    const article = await prisma.article.create({
      data: {
        name,
        title,
        content,
        image,
        category,
        comments: {},
        upvotes: 0,
      }
    });

    return res.status(200).send(article);
  });

  fastify.put<{ Params: { name: string }, Body: { title?: string, content?: string, image?: string[], category?: string } }>('/api/articles/:name', async (req, res) => {
    try {
      putArticleSchema.parse(req);
    } catch (err: any) {
      return res.status(400).send({ error: err.message })
    }

    const { name } = req.params;
    const { title, content, image, category } = req.body;

    if (await prisma.article.findUnique({ where: { name } }) === null) return res.status(404).send('That article doesn\'t exist');

    await prisma.article.update({
      where: {
        name,
      },
      data: {
        title,
        content,
        image,
        category,
      }
    });

    const updatedArticle = await prisma.article.findUnique({ where: { name } });

    return res.status(200).send(updatedArticle);
  });

  fastify.delete<{ Params: { name: string } }>('/api/articles/:name', async (req, res) => {
    const { name } = req.params;

    if (await prisma.article.findUnique({ where: { name } }) === null) return res.status(404).send('That article doesn\'t exist');

    await prisma.article.delete({ where: { name } });

    return res.status(200).send('Article deleted');
  });
}