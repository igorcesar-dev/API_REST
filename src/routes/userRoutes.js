import { Router } from 'express';
import userController from '../controllers/UserController';

import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// router.get('/', userController.index); // index -> Lista todos usuários -> GET (Não deve existir)
// router.get('/:id', userController.show); // show -> Mostra um usuário -> GET (Não deve existir)

router.post('/', loginRequired, userController.create); // create/store -> Criar novo usuário -> POST
router.put('/', loginRequired, userController.update); // update -> Atualiza um usuário -> PATCH ou PUT
router.delete('/', loginRequired, userController.delete); // delete -> Apaga um usuário -> DELETE

export default router;
