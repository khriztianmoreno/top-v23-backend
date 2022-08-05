/**
 * Healthcheck API
 * @module api/healthcheck
 */
import { Router } from 'express'

const router = Router();

router.get('/', (_, res) => {
  res.json({ message: 'This server is running!!' })
})

export default router;
