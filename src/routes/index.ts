import { Router } from 'express';

import { messagesRouter } from './messages.routes';
import { settingsRouter } from './settings.routes';
import { usersRouter } from './users.routes';

const router = Router()

router.use('/settings', settingsRouter)
router.use('/users', usersRouter)
router.use('/messages', messagesRouter)

export { router }