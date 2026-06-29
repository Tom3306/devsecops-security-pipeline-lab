import express from 'express';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import pino from 'pino';
import { randomUUID } from 'node:crypto';
import { z } from 'zod';

const logger = pino({ level: process.env.LOG_LEVEL || 'info' });

const searchSchema = z.object({
  q: z.string().trim().min(1).max(80)
});

const feedbackSchema = z.object({
  email: z.string().email().max(254),
  message: z.string().trim().min(10).max(1000)
});

export function createApp() {
  const app = express();

  app.disable('x-powered-by');
  app.use(helmet());
  app.use(express.json({ limit: '16kb' }));
  app.use(rateLimit({
    windowMs: 60 * 1000,
    limit: 120,
    standardHeaders: true,
    legacyHeaders: false
  }));

  app.use((req, res, next) => {
    req.requestId = randomUUID();
    res.setHeader('x-request-id', req.requestId);
    next();
  });

  app.get('/healthz', (_req, res) => {
    res.status(200).json({ status: 'ok' });
  });

  app.get('/api/search', (req, res) => {
    const parsed = searchSchema.safeParse(req.query);
    if (!parsed.success) {
      return res.status(400).json({
        error: 'invalid_query',
        details: parsed.error.flatten().fieldErrors
      });
    }

    const normalizedQuery = parsed.data.q.toLowerCase();
    res.json({
      query: parsed.data.q,
      results: [
        {
          id: 'appsec-pipeline',
          title: 'Application security pipeline',
          matched: normalizedQuery.includes('security') || normalizedQuery.includes('appsec')
        }
      ]
    });
  });

  app.post('/api/feedback', (req, res) => {
    const parsed = feedbackSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({
        error: 'invalid_feedback',
        details: parsed.error.flatten().fieldErrors
      });
    }

    logger.info({ requestId: req.requestId }, 'feedback accepted');
    res.status(202).json({ status: 'accepted', requestId: req.requestId });
  });

  app.use((_req, res) => {
    res.status(404).json({ error: 'not_found' });
  });

  return app;
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const port = Number(process.env.PORT || 3000);
  createApp().listen(port, () => {
    logger.info({ port }, 'devsecops security pipeline lab listening');
  });
}

