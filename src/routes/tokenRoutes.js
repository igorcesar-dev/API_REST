import { Router } from 'express';
import tokenController from '../controllers/TokenController';

const router = new Router(); // Criação de instância de roteador usando construtor 'Router';

router.post('/', tokenController.create); // Definição de rota chamando o método create do tokenController;

export default router; // Exportação do roteador;
