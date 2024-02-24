import { Router } from 'express';
import userController from '../controllers/UserController';

const router = new Router();

router.post('/', userController.create); // create/store -> Criar novo usuário -> POST
router.get('/', userController.index); // index -> Lista todos usuários -> GET
router.get('/:id', userController.show); // show -> Mostra um usuário -> GET
router.put('/:id', userController.update); // update -> Atualiza um usuário -> PATCH ou PUT
router.delete('/:id', userController.delete); // delete -> Apaga um usuário -> DELETE
export default router;
