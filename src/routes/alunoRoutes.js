import { Router } from 'express';
import alunoController from '../controllers/AlunoController';

import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.get('/', alunoController.index); // lista todos alunos
router.get('/:id', alunoController.show); // lista um aluno por id
router.post('/', loginRequired, alunoController.create); // Cria um aluno
router.put('/:id', loginRequired, alunoController.update); // Atualiza um aluno
router.delete('/:id', loginRequired, alunoController.delete); // Deleta um aluno

export default router;
