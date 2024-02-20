import { Router } from 'express';
import homeController from '../controllers/HomeController';

const router = new Router(); // Criação de instância de roteador usando construtor 'Router';

router.get('/', homeController.index); // Definição de rota chamando o método index do homeController;

export default router; // Exportação do roteador;
