import Router from 'express';
import {
  get,
  getByDate,
  getById,
  getByTitle,
  getByType,
  log,
  remove,
  update,
} from '../controllers/notification-controller.js';
import { isValidToken } from '../security/jwt.js';
import { isValidAuth } from '../security/basic.js';

const router = Router();

router.delete('/notification', isValidAuth, remove);
router.get('/notification', isValidAuth, get);
router.get('/notification/date', isValidAuth, getByDate);
router.get('/notification/id', isValidAuth, getById);
router.get('/notification/title', isValidAuth, getByTitle);
router.get('/notification/type', isValidAuth, getByType);
router.post('/notification', isValidAuth, log);
router.put('/notification', isValidAuth, update);

export default router;
