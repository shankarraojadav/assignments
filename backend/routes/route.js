import express from 'express';
import { addUser, Authenticate } from '../controller.js';

const router = express.Router();

router.post('/', addUser);
router.post('/login', Authenticate)


export default router;