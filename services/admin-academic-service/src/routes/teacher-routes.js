import Router from 'express';
import {
  get,
  getByEmailAddress,
  getByGroup,
  getById,
  getBySubject,
  getByUser,
  log,
  remove,
  update,
} from '../controllers/teacher-controller.js';
import { isValidToken } from '../security/jwt.js';

const router = Router();

router.delete('/teacher/:id', isValidToken, remove);
router.get('/teacher', isValidToken, get);
router.get('/teacher/:group', isValidToken, getByGroup);
router.get('/teacher/:id', isValidToken, getById);
router.get('/teacher/:subject', isValidToken, getBySubject);
router.get('/teacher/:user', isValidToken, getByUser);
router.post('/teacher', isValidToken, log);
router.post('/teacher/emailaddress', isValidToken, getByEmailAddress);
router.put('/teacher', isValidToken, update);

export default router;
