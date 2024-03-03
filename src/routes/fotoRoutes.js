import { Router } from 'express';
// import loginRequired from '../middlewares/loginRequired';

import fotoController from '../controllers/FotoController';

const router = new Router();

router.post('/', fotoController.create); // create/store -> Criar novo usuário -> POST

export default router;
